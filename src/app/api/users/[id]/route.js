import { NextResponse } from "next/server";

export async function GET(request, {params:{id}}) {
  await new Promise((res) => setTimeout(res, 10000));

  return NextResponse.json({
    name: `seller ${id}`
  })
}
