import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  ]

  const App = () => {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
    /*const addExpenseHandler = (expense) => {
      setExpenses((prevExpenses) => {
        return [expense, ...prevExpenses];
      });
    };*/
    const saveNewExpense = (expense) => {
      setExpenses((prevExpenses) => {
        prevExpenses.push(expense);
        return [...prevExpenses];
      });
      //console.log(expenses);
    };
  
    return (
      <div>
        <NewExpense onAddExpense={saveNewExpense} />
        <Expenses items={expenses} />
      </div>
    );
  };

export default App;
