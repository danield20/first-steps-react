import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
    {
        id: "e1",
        title: "Car Insurance",
        amount: 290,
        date: new Date(2021, 2, 28),
    },
];

function App() {
    const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

    const addExpenseHandler = (newExpense) => {
        console.log("Added")
        setExpenses(prevExpenses => {
            return [newExpense, ...prevExpenses]
        });
    };

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
