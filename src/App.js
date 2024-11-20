import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addExpense, setBudget } from "./redux/store";
import Header from "./components/Header";
import SummaryCard from "./components/SummaryCard";
import ExpenseCard from "./components/ExpenseCard";
import ExpenseForm from "./components/ExpenseForm";

const App = () => {
  const { budget, expenses } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);

  const handleAddExpense = (amount, note) => {
    dispatch(
      addExpense({
        id: Math.random().toString(36).substring(2, 9),
        amount: parseFloat(amount),
        note,
        timestamp: Date.now(),
      })
    );
  };

  const handleSetBudget = (amount) => {
    dispatch(setBudget(parseFloat(amount)));
  };

  const totalExpenses = expenses.reduce((acc, expense) => acc + expense.amount, 0);
  const remainingBalance = budget - totalExpenses;

  return (
    <div className="min-h-screen bg-[#1a1a1a] ">
      <div className="container mx-auto p-6 max-w-lg">
        <div className="flex justify-between items-center mb-8">
          <Header />
          <button
            className="w-14 h-14 bg-transparent border border-gray-500 
                     rounded-full flex items-center justify-center text-3xl text-gray-300 
                     hover:bg-gray-800 transition-colors"
            onClick={() => setShowForm(!showForm)}
          >
            +
          </button>
        </div>
        <div className="space-y-4 mb-10 text-3xl">
          <SummaryCard title="Total Expenses" amount={`$${totalExpenses}`} />
          <SummaryCard
            title="Total Budget"
            amount={`$${budget}`}
            details={`Remaining Balance: $${remainingBalance}`}
          />
        </div>
        <ExpenseCard expenses={expenses} />
        {showForm && (
          <ExpenseForm
            onAddExpense={handleAddExpense}
            onSetBudget={handleSetBudget}
            closeForm={() => setShowForm(false)}
          />
        )}
      </div>
    </div>
  );
};

export default App;