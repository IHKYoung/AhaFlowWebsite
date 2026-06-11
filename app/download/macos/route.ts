import { NextResponse } from "next/server";

const defaultDownloadUrl =
  "https://github.com/IHKYoung/AhaDownload/releases/latest/download/AhaFlow-macOS-universal.dmg";

export const dynamic = "force-dynamic";

export function GET() {
  const downloadUrl =
    process.env.MACOS_DOWNLOAD_URL ??
    process.env.NEXT_PUBLIC_MACOS_DOWNLOAD_URL ??
    defaultDownloadUrl;

  return NextResponse.redirect(new URL(downloadUrl), 307);
}
