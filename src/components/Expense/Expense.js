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

	const filteredItems = items.filter(item => item.date.getFullYear().toString() === selectedYear);

	let expenseContent = <p>No expenses found.</p>;

	if (filteredItems.length > 0) {
		expenseContent = filteredItems.map(expense =>
			<div key={expense.id}>
				<ExpenseItem
					title={expense.title}
					amount={expense.amount}
					date={expense.date}/>
			</div>);
	}

	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={selectedYear}
					getYear={selectedYearHandler}
				/>
				{expenseContent}
			</Card>
		</div>
	);
};

export default Expense;