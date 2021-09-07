import './expense.css';
import React from 'react';

import Card from '../UI/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';

const Expense = ({expenses}) => {
	const renderContent = expenses.map(({title, amount, date}) => {
		return (
			<Card className="expenses" key={title}>
				<ExpenseItem title={title} amount={amount} date={date}/>
			</Card>
		);
	});
	return (
		<React.Fragment>
			{renderContent}
		</React.Fragment>
	);
};

export default Expense;