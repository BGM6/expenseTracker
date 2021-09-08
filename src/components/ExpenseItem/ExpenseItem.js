import './expenseItem.css';
import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpenseDate from '../ExpenseDate/ExpenseDate';

const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);

	const onBtnClick = () => {
		setTitle('updated!')
		console.log(title);
	};

	return (
		<Card className="expense-item">
			<ExpenseDate date={props.date}/>
			<div className="expense-item__description">
				<h2>{title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
			<button
				onClick={onBtnClick}
			>
				Change Title
			</button>
		</Card>
	);
};

export default ExpenseItem;