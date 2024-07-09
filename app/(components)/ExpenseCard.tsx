import React, { useEffect, useState } from "react";

interface Item {
  _id: string;
  item: string;
  quantity: number;
  unit: string;
  price: number;
  user: string;
}

const ExpenseCard = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch("/api/items");
        if (!response.ok) {
          throw new Error("Error Fetching Items");
        }
        const data = await response.json();
        setItems(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchItems();
  }, []);

  if (loading) {
    return <div>Loading....</div>;
  }
  return (
    <div className="bg-green-300 rounded-lg mb-4  p-4 shadow-md shadow-gray-500">
      <ul>
        {items.map((item) => (
          <li key={item._id}>
            <div className="font-bold text-gray-700">Item: {item.item}</div>
            <div className="font-bold text-gray-700">
              Quantity: {item.quantity}
              {item.unit}
            </div>
            <div className="font-bold text-gray-700">
              Price: {item.price} Taka
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ExpenseCard;
