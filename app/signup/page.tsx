"use client";

import { useRouter } from "next/navigation";
import React, { ChangeEvent, FormEvent, useState } from "react";

interface User {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const Signup: React.FC = (): JSX.Element => {
  const [user, setUser] = useState<User>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (user.password !== user.confirmPassword) {
      alert("Password do not match");
      return;
    }

    const response = await fetch("/api/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: user.username,
        email: user.email,
        password: user.password,
      }),
    });

    if (response.ok) {
      alert("User Created Successfully");
      router.push("/")
    } else {
      alert("Error Creating User");
    }

    console.log(user);
  };
  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col justify-center items-center mt-16">
      <div className="w-full max-w-md">
        <form
          className="p-4 w-full bg-green-300 rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={user.username}
              placeholder="Username"
              onChange={handleChange}
              required
              className="px-3 py-2 block w-full rounded-md bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={user.email}
              placeholder="Email"
              onChange={handleChange}
              required
              className="px-3 py-2 block w-full rounded-md bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
              required
              className="px-3 py-2 block w-full rounded-md bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-slate-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={user.confirmPassword}
              placeholder="Confirm Password"
              onChange={handleChange}
              required
              className="px-3 py-2 block w-full rounded-md bg-white border border-slate-300 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500"
            />
          </div>
          <button
            type="submit"
            className="w-full p-2 mt-2 rounded-md shadow-md bg-blue-500 text-white hover:bg-blue-700"
          >
            Signup
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
