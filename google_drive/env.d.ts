declare module 'process' {
  global {
    namespace NodeJS {
      interface ProcessEnv {
        GOOGLE_DRIVE_CLIENT_EMAIL: string,
        GOOGLE_DRIVE_PRIVATE_KEY: string,
        GOOGLE_DRIVE_FOLDER_ID: string,
      }
    }
  }
}
