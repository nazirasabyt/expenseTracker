import React from "react";
import { db } from "./firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const addExpenseHandler = async (data) => {
    try {
      await addDoc(collection(db, "myExpenses"), {
        ...data,
        timestamp: serverTimestamp(),
      });
      alert("Your Expense is Added");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses />
    </div>
  );
};

export default App;
