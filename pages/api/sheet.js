import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const {
      submittedAt,
      fullName,
      phoneNumber,
      email,
      message,
      date,
      type = "School",
    } = req.body;
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
    const sheets = google.sheets({
      auth,
      version: "v4",
    });
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: `${type}!A2:C`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[submittedAt, fullName, phoneNumber, email, date, message]],
      },
    });
    res.status(200).json({ message: "It works!", response });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ message: "Hey!" });
  }
}
