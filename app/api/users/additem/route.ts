import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import Item from "@/models/itemModel";
import jwt from "jsonwebtoken";
import { parse } from "cookie";

interface JwtPayload {
  id: string;
  username: string;
  email: string;
}

export async function POST(req: NextRequest) {
  await connect();
  try {
    const cookies = parse(req.headers.get("cookie") || "");
    const token = cookies.token;

    if (!token) {
      return NextResponse.json(
        { messge: "Not authenticated" },
        { status: 401 }
      );
    }

    const decoded = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
    const userId = decoded.id;

    const { item, quantity, unit, price } = await req.json();

    const newItem = new Item({
      item,
      quantity,
      unit,
      price,
      user: userId,
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
