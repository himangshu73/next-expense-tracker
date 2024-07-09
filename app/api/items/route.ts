import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import Item from "@/models/itemModel";

export async function GET(req: NextRequest) {
  await connect();

  try {
    const items = await Item.find({});
    console.log("Item Found");
    return NextResponse.json(items, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error Fetching Items", error },
      { status: 500 }
    );
  }
}
