import './expenseList.css';
import React from 'react';

import ExpenseItem from '../ExpenseItem/ExpenseItem';

const ExpenseList = ({items}) => {

	if (items.length === 0) {
		return <h2 className="expenses-list__fallback">Found no expenses.</h2>
	}
	return (
		<ul className="expenses-list">

			{items.map(expense =>
			<div key={expense.id}>
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}/>
			</div>)}
		</ul>
	);
};

export default ExpenseList;