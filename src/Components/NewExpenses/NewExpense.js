import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true);
  };
  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);    
  };

  return (
    <div>
      {!isEditing && (
        <button onClick={startEditingHandler}>add new expense</button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEditingHandler}
        ></ExpenseForm>
      )}
    </div>
  );
};

export default NewExpense;
