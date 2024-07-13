"use client";

import { useEffect, useState } from "react";
import ExpenseCard, { Item } from "./(components)/ExpenseCard";
import ExpenseEntryForm from "./(components)/ExpenseEntryForm";
import MonthlyExpense from "./(components)/MonthlyExpense";
import { useAuth } from "./utils/AuthContext";

const getItems = async () => {
  try {
    const res = await fetch("/api/items", {
      cache: "no-store",
    });
    return res.json();
  } catch (error) {
    console.log("Failed to get items", error);
    return [];
  }
};

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const { loggedIn } = useAuth();

  useEffect(() => {
    const fetchItems = async () => {
      const items = await getItems();
      setItems(items);
    };
    fetchItems();
  }, []);
  return (
    <div className="flex flex-wrap md:flex-nowrap">
      <div className="w-full md:w-1/2 flex flex-col p-4">
        {loggedIn ? <p>You are logged in</p> : <p>Log in now</p>}
        <ExpenseEntryForm />
        <MonthlyExpense />
      </div>
      <div className="w-full md:w-1/2 flex flex-col p-4 justify-between">
        {items.map((item) => (
          <ExpenseCard key={item._id} item={item} />
        ))}
      </div>
    </div>
  );
}
