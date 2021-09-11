import './newExpense.css';
import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';

const NewExpense = ({onAddExpense}) => {
	const [isEditing, setIsEditing] = useState(false);

	const isEditingHandler = () => {
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};
	const saveExpenseDataHandler = enteredExpenseData => {
		const expenseData = {
			...enteredExpenseData,
			id: Math.random().toString()
		};
		onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			{!isEditing && <button onClick={isEditingHandler}>Add New Expense</button>}
			{isEditing && <ExpenseForm
				onSaveExpenseData={saveExpenseDataHandler}
				stopEditing={stopEditingHandler}
			/>}
		</div>
	);
};

export default NewExpense;