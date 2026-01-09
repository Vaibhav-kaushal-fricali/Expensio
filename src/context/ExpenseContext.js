import { createContext, useContext, useState } from "react";
import { getCategoryColor, getDate, getID } from "../Helper";

export const ExpenseContext = createContext();

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    const newExpense = {
      id: getID(),
      title: expense.title,
      amount: Number(expense.amount),
      category: expense.category.name,
      date: getDate(),
      color: getCategoryColor(expense.category.color),
      icon: expense.category.icon,
    };

    setExpenses([...expenses, newExpense])
  };
  return (
    <ExpenseContext.Provider value={{ expenses, addExpense }}>
      {children}
    </ExpenseContext.Provider>
  );
}

export const useExpenses = () => useContext(ExpenseContext);
