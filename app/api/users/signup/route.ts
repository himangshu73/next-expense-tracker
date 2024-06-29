import { NextRequest, NextResponse } from "next/server";
import { connect } from "@/app/dbConfig/dbConfig";
import User from "@/models/userModel";

interface UserData {
  username: string;
  email: string;
  password: string;
}

export async function POST(req: NextRequest): Promise<NextResponse> {
  await connect();

  try {
    const { username, email, password }: UserData = await req.json();

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User already exists" },
        { status: 400 }
      );
    }

    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();
    return NextResponse.json(
      { message: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error while creating user", error },
      { status: 500 }
    );
  }
}

export async function GET(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Get Method not allowed" },
    { status: 405 }
  );
}

export async function PUT(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Put Method not allowed" },
    { status: 405 }
  );
}

export async function DELETE(req: NextRequest): Promise<NextResponse> {
  return NextResponse.json(
    { message: "Delete Method not allowed" },
    { status: 405 }
  );
}
