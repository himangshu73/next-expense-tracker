import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between bg-blue-500">
      <h1 className="font-bold text-3xl text-white p-4">
        <Link href="/">Expense Tracker</Link>
      </h1>
      <ul className="flex items-center gap-2 text-white p-4">
        <li className="hover:text-slate-500">
          <Link href="/signup">SignuJp</Link>
        </li>
        <li className="hover:text-slate-500">
          <Link href="/login">Login</Link>
        </li>
        <li className="hover:text-slate-500">
          <Link href="#">Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
