import React from 'react';
import {Routes, Route} from 'react-router-dom';
import HeaderContent from './components/HomeContent';
import LoginPage from './pages/loginPage/LoginPage';
import SignupPage from './pages/signupPage/SignupPage';

const Routing = () => {
  return (
	<Routes>
		<Route path='/' element={HeaderContent}/>
		<Route path='login' element={<LoginPage/>}/>
		<Route path='signup' element={<SignupPage/>}/>
	</Routes>
  )
}

export default Routing;
