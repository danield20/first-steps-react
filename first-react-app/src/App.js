import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
    const expenses = [
        {
            id: "e1",
            title: "Car Insurance",
            amount: 290,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e2",
            title: "Car Insurance",
            amount: 291,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e3",
            title: "Car Insurance",
            amount: 292,
            date: new Date(2021, 2, 28),
        },
        {
            id: "e4",
            title: "Car Insurance",
            amount: 293,
            date: new Date(2021, 2, 28),
        },
    ];

    const addExpenseHandler = (newExpense) => {
        expenses.push(newExpense)
        console.log(newExpense)
    }

    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}></NewExpense>
            <Expenses items={expenses}></Expenses>
        </div>
    );
}

export default App;
