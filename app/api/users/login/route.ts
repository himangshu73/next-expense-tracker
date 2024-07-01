import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
//import jwt from "jsonwebtoken";
import { error } from "console";

const bcrypt = require("bcrypt");

export async function POST(req: NextRequest) {
  await connect();

  try {
    const { email, password } = await req.json();

    const user = await User.findOne({ email });

    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    } else {
      console.log("User Found");
    }

    const correctPassword = await bcrypt.compare(password, user.password);
    if (!correctPassword) {
      return NextResponse.json(
        { error: "Incorrect Password" },
        { status: 400 }
      );
    }
    return NextResponse.json({ message: "Login Successfull" }, { status: 201 });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
