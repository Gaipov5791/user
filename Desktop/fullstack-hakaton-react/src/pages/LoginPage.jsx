import React from 'react';
import { Link } from 'react-router-dom';
import './loginPage.css';

const LoginPage = () => {
	// const [username, setUserName] = useState('');
	// const [password, setPassword] = useState('');
	return (
		<main>
			<section className="login-container">
				<h3 className='login-title'>Войти</h3>
				<form className="login-form">
					<label>
						Имя
					</label>
					<input 
						type="username" 			className="login-username" 
						// placeholder='username'
						// onChange={(e) => setUserName(e.target.value)}
						// value={username}
					/>
					<label>
						Пароль
					</label>
					<input 
						type="password" 			className="login-password" 
						// placeholder='password'
						// onChange={(e) => setPassword(e.target.value)}
						// value={password}
					/>
					
				<div className="forgot-pass">
					<a href="/forgotpassword" className="forgot-pass-link">
						Забыли пароль?
					</a>
				</div>
				<div className="login-buttons">
					<button className="login-btn">
						Войти
					</button>
					<div className="registration-btn">
						<Link className='registration-link' to='/registration'>
							Регистрация
						</Link>
					</div>
				</div>
			</form>
			</section>
		</main>
	)
}

export default LoginPage;