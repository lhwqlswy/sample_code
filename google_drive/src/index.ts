import { google } from "googleapis";
import { Readable } from "stream";
import "dotenv/config";

const main = async () => {
  const clientEmail = process.env.GOOGLE_DRIVE_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_DRIVE_PRIVATE_KEY;
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID;
  if (!clientEmail) {
    throw new Error("env var GOOGLE_DRIVE_CLIENT_EMAIL not set");
  }
  if (!privateKey) {
    throw new Error("env var GOOGLE_DRIVE_PRIVATE_KEY not set");
  }

  const SCOPES = ['https://www.googleapis.com/auth/drive'];
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: SCOPES,
  });
  const driveService = google.drive({ version: "v3", auth });

  const stream = Readable.from("test content");
  await driveService.files.create({
    fields: "id",
    supportsAllDrives: true, // my shareの場合は要らない。shared drivesの場合は必須です
    requestBody: {
      name: "test.txt",
      parents: [folderId],
    },
    media: {
      mimeType: "text/csv",
      body: stream,
    }
  });
}

main().catch(console.error);
