import './expense.css';
import React, {useState} from 'react';

import Card from '../UI/Card';
import ExpenseItem from '../ExpenseItem/ExpenseItem';
import ExpenseFilter from '../ExpenseFilter/ExpenseFilter';

const Expense = ({items}) => {
	const [selectedYear, setSelectedYear] = useState('2020');

	const selectedYearHandler = year => {
		setSelectedYear(year);
	};

	// const renderExpenses = items.map(({title, amount, date}) => {
	// 	return (
	// 		<div key={title}>
	// 			<ExpenseItem
	// 				title={title}
	// 				amount={amount}
	// 				date={date}
	// 			/>
	// 		</div>
	// 	);
	// });

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={selectedYear}
					getYear={selectedYearHandler}
				/>
				{items.map(expense => <
					div key={expense.title}>
					<ExpenseItem
						title={expense.title}
						amount={expense.amount}
						date={expense.date}/>
				</div>)
				}
			</Card>
		</div>
	);
};

export default Expense;