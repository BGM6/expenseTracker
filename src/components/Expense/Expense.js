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

	console.log(selectedYear)
	return (
		<div>
			<Card className="expenses">
				<ExpenseFilter
					selected={selectedYear}
					getYear={selectedYearHandler}/>
				<ExpenseItem
					title={items[0].title}
					amount={items[0].amount}
					date={items[0].date}
				/>
				<ExpenseItem
					title={items[1].title}
					amount={items[1].amount}
					date={items[1].date}
				/>
				<ExpenseItem
					title={items[2].title}
					amount={items[2].amount}
					date={items[2].date}
				/>
				<ExpenseItem
					title={items[3].title}
					amount={items[3].amount}
					date={items[3].date}
				/>
			</Card>
		</div>
	);
};

export default Expense;