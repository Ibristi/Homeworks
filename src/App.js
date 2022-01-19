import './App.css'
import NewExpense from './components/NewExpense'


function App() {

	const addExpenseHandler = (expense) => {
		console.log(expense);

	}


	return (
		<div className='App'>
			<NewExpense onAddExpense={addExpenseHandler}/>
		</div>
	)
}

export default App
