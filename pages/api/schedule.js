import { google } from "googleapis";
import { startOfWeek, endOfWeek, format } from "date-fns";
import { FORMAT_DATE_FOLDER, SCHEDULE_TYPE } from "../../lib/constant";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { className, scheduleType } = req.body;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.CLIENT_EMAIL,
        client_id: process.env.CLIENT_ID,
        private_key: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: [
        "https://www.googleapis.com/auth/drive",
        "https://www.googleapis.com/auth/drive.file",
        "https://www.googleapis.com/auth/spreadsheets",
      ],
    });
    const drive = google.drive({
      auth,
      version: "v3",
    });

    let pageToken = null;
    const rootFolderId =
      scheduleType === SCHEDULE_TYPE.program
        ? process.env.PROGRAM_FOLDERID
        : process.env.MEALMENU_FOLDERID;

    // List all folders in root folder
    const foldersResponse = await drive.files.list({
      q: `'${rootFolderId}' in parents`,
      fields: "nextPageToken, files(id, name)",
      spaces: "drive",
      pageToken: pageToken,
    });
    const folders = foldersResponse?.data?.files;

    if (!folders || folders.length === 0) {
      res.status(200).json({ id: null });
      return;
    }

    // Get firstday of week (Monday of the week)
    const firstDay = startOfWeek(new Date(), { weekStartsOn: 1 });
    // Get lastday of week (Sunday of the week)
    const lastDay = endOfWeek(new Date(), { weekStartsOn: 1 });
    // Get folder name
    const folderName = `${format(firstDay, FORMAT_DATE_FOLDER)}_${format(
      lastDay,
      FORMAT_DATE_FOLDER
    )}`;

    //Find folder based on current date
    const currentFolder = folders.find((item) => item.name == folderName);
    const folderID = currentFolder?.id;
    if (!folderID) {
      res.status(200).json({ id: null });
      return;
    }

    // Find list of files in current folder
    const response = await drive.files.list({
      q: `'${folderID}' in parents`,
      fields: "nextPageToken, files(id, name)",
      spaces: "drive",
      pageToken: pageToken,
    });
    const files = response?.data?.files;
    if (!files || files.length === 0) {
      res.status(200).json({ id: null });
      return;
    }
    const file = files?.find((item) => item.name.includes(className));
    const id = file?.id;

    res.status(200).json({ id: id });
  }
}
