import { NextResponse } from "next/server";
import { programmeData } from "@/data/programme";

export async function GET() {
  return NextResponse.json(programmeData);
}