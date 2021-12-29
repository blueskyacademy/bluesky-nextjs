import { google } from "googleapis";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const {
      submittedAt,
      fullNameStudent,
      dateOfBirth,
      gender,
      reTest,
      currentSchool,
      currentGrade,
      fullNameParent,
      relationship,
      occupation,
      company,
      phoneNumber,
      email,
      dateOfExam,
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
      range: `Placement!A3:C`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [
          [
            submittedAt,
            fullNameStudent,
            dateOfBirth,
            gender,
            reTest,
            currentSchool,
            currentGrade,
            fullNameParent,
            relationship,
            occupation,
            company,
            phoneNumber,
            email,
            dateOfExam,
          ],
        ],
      },
    });
    res.status(200).json({ message: "It works!", response });
  } else {
    // Handle any other HTTP method
    res.status(200).json({ message: "Hey!" });
  }
}
