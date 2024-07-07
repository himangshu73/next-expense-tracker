import React, { ChangeEvent, FormEvent, useState } from "react";

const ExpenseEntryForm = () => {
  const [addItem, setAddItem] = useState({
    item: "",
    quantity: 0,
    unit: "KG",
    price: 0,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/users/additem", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addItem),
    });
    if (response.ok) {
      alert("Item added successfully");
      setAddItem({
        item: "",
        quantity: 0,
        unit: "KG",
        price: 0,
      });
    } else {
      alert("Cannot add item");
    }
    console.log(addItem);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { name, value } = e.target;
    setAddItem((prevAddItem) => ({
      ...prevAddItem,
      [name]: value,
    }));
  };

  const handleUnitChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAddItem((prevAddItem) => ({
      ...prevAddItem,
      unit: e.target.value,
    }));
  };
  return (
    <div className="mb-4">
      <form
        className=" bg-slate-300 p-4 rounded-lg shadow-md shadow-slate-500"
        onSubmit={handleSubmit}
      >
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700">Item</label>
          <input
            type="text"
            id="item"
            name="item"
            value={addItem.item}
            onChange={handleChange}
            placeholder="item"
            className="w-full p-2 rounded-md bg-white border border-blue-500 focus:ring focus:ring-red-300"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700">Quantity</label>
          <div className="flex items-center space-x-2">
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={addItem.quantity}
              onChange={handleChange}
              placeholder="quantity"
              className="w-full p-2 rounded-md bg-white border border-blue-500 focus:ring focus:ring-red-300"
            />
            <div className="flex items-center space-x-2">
              <input
                type="radio"
                id="kg"
                name="unit"
                value="KG"
                checked={addItem.unit === "KG"}
                onChange={handleUnitChange}
              />
              <label>KG</label>
              <input
                type="radio"
                id="liter"
                name="unit"
                value="LTR"
                checked={addItem.unit === "LTR"}
                onChange={handleUnitChange}
              />
              <label>LTR</label>
              <input
                type="radio"
                id="pcs"
                name="unit"
                value="PCs"
                checked={addItem.unit === "PCs"}
                onChange={handleUnitChange}
              />
              <label>PCs</label>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700">Price</label>
          <input
            type="number"
            id="price"
            name="price"
            value={addItem.price}
            onChange={handleChange}
            placeholder="price"
            className="w-full p-2 rounded-md bg-white border border-blue-500 focus:ring focus:ring-red-300"
          />
        </div>
        <button
          type="submit"
          className="bg-green-500 hover:bg-red-700 rounded-md p-2 w-full"
        >
          Add Item
        </button>
      </form>
    </div>
  );
};

export default ExpenseEntryForm;
