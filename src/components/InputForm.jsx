import { useState } from 'react'
import './InputForm.css'
const InputForm = () => {
	const [thing, setThing] = useState('')
	const [quantity, setQuantity] = useState('')
	const [date, setDate] = useState('')

	const thingChangeHandler = (event) => {
		setThing(event.target.value)
	}
	const quantityChangeHandler = (event) => {
		setQuantity(event.target.value)
	}
	const dateChangeHandler = (event) => {
		setDate(event.target.value)
	}

	const submitHandler = (event) => {
		event.preventDefault()
		console.log(thing);
		console.log(quantity);
		console.log(date);
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Thing</label>
					<input name='title' type='text' onChange={thingChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Quantity</label>
					<input name='amount' type='number' min='0.1' step='1' onChange={quantityChangeHandler}/>
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input name='date' type='date' onChange={dateChangeHandler}/>
				</div>
				<div className='new-expense__actions'>
					<button type='submit' className='btn'>Add Expense</button>
				</div>
			</div>
		</form>
	)
}
export default InputForm
