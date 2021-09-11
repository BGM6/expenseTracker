import './expenseForm.css';
import React, {useState} from 'react';

const ExpenseForm = ({onSaveExpenseData, stopEditing}) => {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');

	const onTitleChange = (event) => {
		setEnteredTitle(event.target.value);
	};

	const onAmountChange = (event) => {
		setEnteredAmount(event.target.value);
	};

	const onDateChange = (event) => {
		setEnteredDate(event.target.value);
	};

	const onFormSubmit = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		};
		onSaveExpenseData(expenseData);
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	// const [formData, setFormData] = useState({
	// 	enteredTitle: '',
	// 	enteredAmount: '',
	// 	enteredDate: ''
	// });
	//
	// const {enteredTitle, enteredAmount, enteredDate} = formData;
	//
	// const handleFormData = (event) => {
	// 	setFormData({...formData, [event.target.name]: event.target.value});
	// };
	//
	// const handleFormSubmit = (event) => {
	// 	event.preventDefault();
	// 	console.log(formData);
	// };


	return (
		<form onSubmit={onFormSubmit}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						name="title"
						value={enteredTitle}
						onChange={onTitleChange}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						name="amount"
						value={enteredAmount}
						onChange={onAmountChange}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						name="date"
						value={enteredDate}
						onChange={onDateChange}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="button" onClick={stopEditing}>Cancel</button>
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;