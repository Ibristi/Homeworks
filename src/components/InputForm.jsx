import { useState } from 'react'
import './InputForm.css'
const InputForm = (props) => {
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

		const expenseData = {
			thing: thing, 
			quantity: quantity,
			date: date
		}
		// console.log(expenseData);
		props.onSaveExpenseData(expenseData)
	}
	return (
		<form onSubmit={submitHandler}>
			<div className='wrap'>
				<div className='blocks'>
					<label>Thing</label>
					<input name='title' type='text' value={thing} onChange={thingChangeHandler}/>
				</div>
				<div className='blocks'>
					<label>Quantity</label>
					<input name='amount' type='number' min='0.1' step='1' value={quantity} onChange={quantityChangeHandler}/>
				</div>
				<div className='blocks'>
					<label>Date</label>
					<input name='date' type='date' value={date} onChange={dateChangeHandler}/>
				</div>
				<div className='actions'>
					<button type='submit' className='btn'>КОШ</button>
				</div>
			</div>
		</form>
	)
}
export default InputForm
