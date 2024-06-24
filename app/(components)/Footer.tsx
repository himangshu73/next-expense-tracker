import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="text-center bg-blue-500 p-2 text-white">
      Expense Tracker &copy;{currentYear}
    </div>
  );
};

export default Footer;
