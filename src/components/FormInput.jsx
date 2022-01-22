import { useState } from 'react'
import './FormInput.css'
const FormInput = (props) => {
    const [name,  setName] = useState('')
    const [phone, setPhone] = useState('')
    const [city, setCity] = useState('')
    const [message, setMessage] = useState('')

    const nameChangeHandler = (e) => {
        setName(e.target.value)
    }

    const phoneChangeHandler = (e) => {
        setPhone(e.target.value)
    }

    const cityChangeHandler = (e) => {
        setCity(e.target.value)
    }
    
    const messageChangeHandler = (e) => {
        setMessage(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault()
        const currentData = {
            name,
            phone,
            city,
            message
        }
        console.log(currentData);
        props.onSaveFormData(currentData)
    } 
    return (
		<form className='form' onSubmit={submitHandler}>
			<div className='container'>
				<h1>SIGN UP</h1>
				<div className='name-part'>
					Full name:
					<input type='text' placeholder='Ф.И.О' value={name} onChange={nameChangeHandler}/>
				</div>
				<div className='phone-part'>
					Phone number:
					<input type='tel' maxLength={10} placeholder='Number'  value={phone} onChange={phoneChangeHandler}/>
				</div>
                <div>
                    Choose the city:
                    <select className='city-select'  value={city} onChange={cityChangeHandler}>
                        <option value="select" placeholder='select'></option>
                        <option value="miami">MIAMI</option>
                        <option value="NEW-YORK">NEW-YORK</option>
                        <option value="Chicago">Chicago</option>
                        <option value="DUBAI">DUBAI</option>
                        <option value="LAS-VEGAS">LAS-VEGAS</option>
                        <option value="LOS-Angeles">LOS-Angeles</option>
                    </select>
                </div>
                <div>
                    Add some message:
                    <textarea className='field' placeholder='MESSAGE'  value={message} onChange={messageChangeHandler}/>
                </div>
				<button className='btn'>Confirm</button>
			</div>
		</form>
    )
}
export default FormInput