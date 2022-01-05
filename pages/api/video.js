import { google } from "googleapis";
import nextConnect from "next-connect";
import middleware from "../../middleware/middleware";

var fs = require("fs");
const handler = nextConnect();
handler.use(middleware);

handler.post(async (req, res) => {
  try {
    const files = req.files;
    const body = req.body;
    console.log("files", files);
    console.log("body", body);
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
    const fileName = `${body.email}`;

    let fileMetaData = {
      name: fileName,
      parents: [process.env.APPLICATION_VIDEO_FOLDERID],
    };
    let media = {
      mimeType: "video/x-matroska",
      body: fs.createReadStream(files.file.filepath),
    };
    const response = await drive.files.create({
      resource: fileMetaData,
      media: media,
      fields: "id",
    });
    console.log("response", response);
    res.status(200).json({ message: "It works!" });
  } catch (error) {
    res.status(500).json({ message: "Error!" });
  }
});
export const config = {
  api: {
    bodyParser: false,
  },
};
export default handler;
