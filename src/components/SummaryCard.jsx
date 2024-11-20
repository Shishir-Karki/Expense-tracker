import React from "react";

const SummaryCard = ({ title, amount, details }) => (
    <div className="bg-[#222] border border-gray-500 rounded-lg p-5 shadow-md">
    <h3 className="text-xl text-gray-400 mb-1">{title}</h3>
    <p className="text-2xl font-semibold text-gray-100">{amount}</p>
    {details && (
      <p className="text-2xl text-gray-500 mt-1">{details}</p>
    )}
  </div>
  
);

export default SummaryCard;