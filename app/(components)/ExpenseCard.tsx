import React, { useEffect, useState } from "react";

export interface Item {
  _id: string;
  item: string;
  quantity: number;
  unit: string;
  price: number;
  user: string;
}

interface ExpenseCardProps {
  item: Item;
}

const ExpenseCard: React.FC<ExpenseCardProps> = ({ item }) => {
  return (
    <div className="bg-green-300 rounded-lg mb-4  p-4 shadow-md shadow-gray-500">
      <ul>
        <li>
          <div className="font-bold text-gray-700">Item: {item.item}</div>
          <div className="font-bold text-gray-700">
            Quantity: {item.quantity}
            {item.unit}
          </div>
          <div className="font-bold text-gray-700">
            Price: {item.price} Taka
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ExpenseCard;
