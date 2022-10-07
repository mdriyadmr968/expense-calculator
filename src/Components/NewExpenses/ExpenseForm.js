import React, { useState } from 'react';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');


    const titleChangeHandler =(event) => {
        setEnteredTitle(event.target.value);
    }
    const amountChangeHandler =(event) => {
        setEnteredAmount(event.target.value);
    }
    const dateChangeHandler =(event) => {
        setEnteredDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);

        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');



    }
    return (
      <div>
        <form onSubmit={submitHandler}>
          <div>
            <label htmlFor="">title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="">amount</label>
            <input
              type="Number"
              value={enteredAmount}
              onChange={amountChangeHandler}
            ></input>
          </div>
          <div>
            <label htmlFor="">date</label>
            <input
              type="date"
              value={enteredDate}
              onChange={dateChangeHandler}
            ></input>
          </div>
          <div className="new-expense__actions">
            <button type="button" onClick={props.onCancel}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      </div>
    );
};

export default ExpenseForm;