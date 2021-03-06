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
    const fileName = `${body.fullName}-${body.email}-${body?.title}`;
    let fileMetaData = {
      name: fileName,
      parents: ["1xifVOa2ufa30z1O6nMsAlNCG4vT4GrOY"],
    };
    let media = {
      mimeType: "application/pdf",
      body: fs.createReadStream(files.cv.filepath),
    };
    const response = await drive.files.create({
      resource: fileMetaData,
      media: media,
      fields: "id",
    });
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
