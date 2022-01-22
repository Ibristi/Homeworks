import { useState } from 'react'
import './App.css'
import Form from './components/Form'

function App() {
	const [forms, setForms] = useState('')
	const addFormDataHandler = (rend) => {
		setForms(rend)
	}
	return (
		<div className='App'>
			<Form onAddFormData={addFormDataHandler}/>
			<div className='render-div'>
				<h2 className='name'>{forms.name}</h2>
				<h2 className='name'>{forms.phone}</h2>
				<h2 className='name'>{forms.city}</h2>
				<h2 className='name'>{forms.message}</h2>
			</div>
		</div>
	)
}

export default App
