import React from "react";

const ExpenseCard = ({ expenses }) => {
  return (
    <div className="space-y-3">
    <p className="text-sm text-gray-500">Expense History</p>
    {expenses.length ? (
      expenses.map((expense) => (
        <div
          key={expense.id}
          className="bg-[#2c2c2c] border border-gray-500 rounded-lg p-4 
                     flex justify-between items-center shadow-sm"
        >
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <div>
              <p className="text-2xl font-light text-gray-200">${expense.amount}</p>
              <p className="text-xl text-gray-500">{expense.note}</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p className="text-xs text-gray-500">
              {new Date(expense.timestamp).toLocaleString()}
            </p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-gray-500">No expenses yet!</p>
    )}
  </div>
  
  );
};

export default ExpenseCard;