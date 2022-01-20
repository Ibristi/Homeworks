import { useState } from 'react'
import './App.css'
import NewExpense from './components/NewExpense'


function App() {

	const [expenses, setExpenses] = useState('');

	const addExpenseHandler = (expense) => {
		console.log(expense);

		setExpenses(expense)

	}


	return (
		<div className='App'>
			<NewExpense onAddExpense={addExpenseHandler}/>
			<div className='renderThing'>
				<h1>{expenses.thing}</h1>
				<h1>{expenses.quantity}</h1>
				<h1>{expenses.date}</h1>
			</div>
		</div>
	)
}

export default App
