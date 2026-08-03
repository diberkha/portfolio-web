import { NextResponse } from "next/server";
import { fallbackData } from "@/lib/portfolio";

export async function GET() {
  return NextResponse.json(fallbackData);
}
