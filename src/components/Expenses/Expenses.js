import React, { useState, useEffect } from "react";
import { db } from "../../firebase";
import {
  collection,
  onSnapshot,
  query,
  where,
  getDocs,
} from "firebase/firestore";

import ExpensesFilter from "./ExpensesFilter";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesChart from "./ExpenseChart";
import "./Expenses.css";

const Expenses = (props) => {
  const [expenses, setExpenses] = useState([]);
  const [filteredYear, setFilteredYear] = useState("2020");
  const recipesRef = collection(db, "recipes");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  useEffect(() => {
    const unsub = onSnapshot(
      collection(db, "myExpenses"),
      (snapshot) => {
        let list = [];
        snapshot.docs.forEach((doc) => {
          list.push({ id: doc.id, ...doc.data() });
        });
        setExpenses(list);
      },
      (error) => {
        console.log(error);
      }
    );
    return () => {
      unsub();
    };
  }, []);

  // const filteredExpenses = expenses.filter((expense) => {
  //   return expense.date.getFullYear().toString() === filteredYear;
  // });

  const filteredExpenses = async () => {
    const year = expenses.date.getFullYear().toString();
    console.log(year);
    const q = query(recipesRef, where("date", "==", filteredYear));
    const querySnapshot = await getDocs(q);
    let list = [];
    querySnapshot.forEach((doc) => {
      list.push({ id: doc.id, ...doc.data() });
    });
  };

  // useEffect(() => {
  //   try {
  //     const fetchData = async () => {
  //       setLoading(true);
  //       const q = query(recipesRef, where("section", "==", "Cold Kitchen"));
  //       const querySnapshot = await getDocs(q);
  //       let list = [];
  //       querySnapshot.forEach((doc) => {
  //         list.push({ id: doc.id, ...doc.data() });
  //       });
  //       setSortedRecipes(list);
  //       setLoading(false);
  //     };
  //     fetchData();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }, []);

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesChart expenses={expenses} />
        {expenses &&
          expenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                title={expense.title}
                amount={expense.amount}
                date={expense.date}
              />
            );
          })}
      </Card>
    </div>
  );
};

export default Expenses;
