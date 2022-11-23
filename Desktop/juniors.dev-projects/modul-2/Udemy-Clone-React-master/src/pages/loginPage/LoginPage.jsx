import React from 'react';
import './loginPage.css';

const LoginPage = () => {
  return (
	<div className='login'>
		<h2 className='login-title'>Log in form</h2>
		<form className='login-input'>
			<input className='input' type="text" placeholder='Email...'/>
			<input className='input' type="text" placeholder='Name...'/>
			<input className='input' type="text" placeholder='Lastname...'/>
		</form>
	</div>
  )
}

export default LoginPage;