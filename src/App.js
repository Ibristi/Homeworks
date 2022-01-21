import './App.css'

function App() {
	return (
		<div className='App'>
			<form className='form'>
				<div className='container'>
					<h1>SIGN UP</h1>
					<div className='name-part'>
						Full name:
						<input type='text' placeholder='Ф.И.О' />
					</div>
					<div className='username-part'>
						Nickname:
						<input type='text' placeholder='Nickname' />
					</div>
					<div className='email-part'>
						Email:
						<input type='email' placeholder='Email' />
					</div>
					<button className='btn'>Confirm</button>
				</div>
			</form>
		</div>
	)
}

export default App
