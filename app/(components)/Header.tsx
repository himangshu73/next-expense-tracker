"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../utils/AuthContext";

const Header = () => {
  const router = useRouter();
  const { loggedIn, setLoggedIn } = useAuth();

  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/users/logout", {
        method: "GET",
      });
      if (res.ok) {
        setLoggedIn(false);
        console.log("Logout Successful");
        router.push("/login");
      } else {
        console.error("Logout failed");
      }
    } catch (error: any) {
      console.error("An error occurred:", error.message);
    }
  };

  return (
    <div className="flex justify-between bg-blue-500">
      <h1 className="font-bold text-3xl text-white p-4">
        <Link href="/">Expense Tracker</Link>
      </h1>
      <ul className="flex items-center gap-2 text-white p-4">
        {loggedIn ? (
          <li
            className="hover:text-slate-500 cursor-pointer"
            onClick={handleLogout}
          >
            Logout
          </li>
        ) : (
          <>
            <li className="hover:text-slate-500">
              <Link href="/signup">Signup</Link>
            </li>
            <li className="hover:text-slate-500">
              <Link href="/login">Login</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default Header;
