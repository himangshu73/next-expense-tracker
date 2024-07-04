"use client";

import ExpenseCard from "./(components)/ExpenseCard";
import ExpenseEntryForm from "./(components)/ExpenseEntryForm";
import MonthlyExpense from "./(components)/MonthlyExpense";
import { useAuth } from "./utils/AuthContext";

export default function Home() {
  const { loggedIn } = useAuth();
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2 flex flex-col p-4">
        {loggedIn ? <p>You are logged in</p> : <p>Log in now</p>}
        <ExpenseEntryForm />
        <MonthlyExpense />
      </div>
      <div className="w-full md:w-1/2 flex flex-col p-4 justify-between">
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
        <ExpenseCard />
      </div>
    </div>
  );
}
