import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import Item from "@/models/itemModel";

export async function POST(req: NextRequest) {
  await connect();
  try {
    const { item, quantity, unit, price, user } = await req.json();

    const newItem = new Item({
      item,
      quantity,
      unit,
      price,
      user,
    });
    await newItem.save();
    return NextResponse.json(
      { message: "Item added successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while addid item",
        error,
      },
      { status: 500 }
    );
  }
}
