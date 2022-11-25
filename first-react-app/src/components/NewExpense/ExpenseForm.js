import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        enteredTitle: "",
        enteredAmount: "",
        eneteredDate: "",
        addExpense: false,
    });

    const titleChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value,
            };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value,
            };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                eneteredDate: event.target.value,
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.eneteredDate),
        };

        setUserInput({
            enteredTitle: "",
            enteredAmount: "",
            eneteredDate: "",
            addExpense: false,
        });

        props.onSaveExpenseData(expenseData);
    };

    const addExpenseHandler = (event) => {
        event.preventDefault();

        setUserInput((prevState) => {
            return {
                ...prevState,
                addExpense: !prevState.addExpense,
            };
        });
    };

    let expenseForm = (
        <div className="new-expense__actions__button">
            <button onClick={addExpenseHandler}>Add Expense</button>
        </div>
    );

    if (userInput.addExpense) {
        expenseForm = (
            <form onSubmit={submitHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input
                            type="text"
                            value={userInput.enteredTitle}
                            onChange={titleChangeHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input
                            type="number"
                            value={userInput.enteredAmount}
                            min="0.01"
                            step="0.01"
                            onChange={amountChangeHandler}
                        />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input
                            type="date"
                            value={userInput.eneteredDate}
                            min="2019-01-01"
                            max="2022-12-31"
                            onChange={dateChangeHandler}
                        />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button type="button" onClick={addExpenseHandler}>
                        Cancel
                    </button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        );
    }

    return <div>{expenseForm}</div>;
};

export default ExpenseForm;
