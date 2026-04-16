import { NextResponse } from "next/server";
import { programme } from "@/data/programme";

export async function GET() {
    return NextResponse.json(programme);
}