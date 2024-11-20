import React, { useState, useRef, useEffect } from "react";

const ExpenseForm = ({ onAddExpense, onSetBudget, closeForm }) => {
  const [activeTab, setActiveTab] = useState('Expense');
  const [amount, setAmount] = useState("");
  const [note, setNote] = useState("");
  const modalRef = useRef();

  // Handle click outside to close
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        closeForm();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [closeForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount) {
      if (activeTab === 'Expense') {
        onAddExpense(amount, note);
      } else {
        onSetBudget(amount);
      }
      setAmount("");
      setNote("");
      closeForm();
    }
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center">
      <div ref={modalRef} className="bg-[#121212] border border-gray-800/50 rounded-lg w-full max-w-md p-6 relative">
        <button
          onClick={closeForm}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-300"
        >
          ✕
        </button>

        <div className="flex gap-4 mb-6">
          <button
            className={`text-sm ${
              activeTab === 'Expense' 
                ? 'text-gray-200' 
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Expense')}
          >
            Expense
          </button>
          <button
            className={`text-sm ${
              activeTab === 'Budget' 
                ? 'text-gray-200' 
                : 'text-gray-500'
            }`}
            onClick={() => setActiveTab('Budget')}
          >
            Budget
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-400 mb-1">
              Amount of {activeTab} <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full bg-[#1a1a1a] border border-gray-800/50 rounded-md p-2 
                         text-gray-300 focus:outline-none focus:border-gray-700"
              placeholder="0"
            />
          </div>

          {activeTab === 'Expense' && (
            <div>
              <label className="block text-sm text-gray-400 mb-1">
                Note of Expense <span className="text-gray-600">(Optional)</span>
              </label>
              <input
                type="text"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-[#1a1a1a] border border-gray-800/50 rounded-md p-2 
                           text-gray-300 focus:outline-none focus:border-gray-700"
                placeholder="Enter note"
              />
            </div>
          )}

          <div className="flex gap-3 mt-6">
            <button
              type="button"
              onClick={closeForm}
              className="flex-1 bg-[#1a1a1a] border border-gray-800/50 rounded-md p-2 
                       text-gray-300 hover:bg-[#222] transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-[#1a1a1a] border border-gray-800/50 rounded-md p-2 
                       text-gray-300 hover:bg-[#222] transition-colors"
            >
              ADD
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;