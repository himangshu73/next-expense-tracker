import React from "react";

const ExpenseEntryForm = () => {
  return (
    <div className="mb-4">
      <form className=" bg-slate-300 p-4 rounded-lg shadow-md shadow-slate-500">
        <div className="mb-4">
          <label className="block mb-2 font-bold text-gray-700">Item</label>
          <input
            type="text"
            id="item"
            name="item"
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
              placeholder="quantity"
              className="w-full p-2 rounded-md bg-white border border-blue-500 focus:ring focus:ring-red-300"
            />
            <div className="flex items-center space-x-2">
              <input type="radio" id="kg" name="unit" value="KG" />
              <label>KG</label>
              <input type="radio" id="liter" name="unit" value="LTR" />
              <label>LTR</label>
              <input type="radio" id="pcs" name="unit" value="PCS" />
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
