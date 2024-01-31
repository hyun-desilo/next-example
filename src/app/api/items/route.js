import { NextResponse } from "next/server";

export async function GET(request) {
  await new Promise((res) => setTimeout(res, 2000));

  return NextResponse.json([
    { name: "Item 1", image: "https://picsum.photos/200/300", sellerId: 1 },
    { name: "Item 2", image: "https://picsum.photos/200/200", sellerId: 2 },
  ])
}
