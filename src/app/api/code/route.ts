import { NextResponse } from "next/server";

export async function POST() {
    return NextResponse.redirect("https://webrtctzn.glitch.me", {status: 302});
}
