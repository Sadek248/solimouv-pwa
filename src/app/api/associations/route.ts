import { NextResponse } from "next/server";
import { associations } from "@/data/associations";

export async function GET() {
    return NextResponse.json(associations);
}