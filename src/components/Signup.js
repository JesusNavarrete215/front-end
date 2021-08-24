import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import StyledSignup from '../styledComponents/StyledSignup';

const initialState = {
    username: '',
    password: ''
}

const Signup = () => {
    const [ formValue, setFormValue ] = useState(initialState);

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue);
    }

	return (
		<StyledSignup>
            <div className='content-box'>
                <div className='form-box'>
                    <h2>Sign up</h2>
                    <form onSubmit={handleSubmit}>
                        <div className='input-box'>
                            <span>Username</span>
                            <input type='text' name='username' id='username' onChange={handleChange} value={formValue.username}/>
                        </div>
                        <div className='input-box'>
                            <span>Password</span>
                            <input type='password' name='password' id='password' onChange={handleChange} value={formValue.password}/>
                        </div>
                        <div className='remember'>
                            <label><input type='checkbox' name='remember'/> Remember me</label>
                        </div>
                        <div className='input-box'>
                            <button className='button'>Sign up</button>
                        </div>
                        <div className='input-box'>
                            <p>Already have an account? <Link to='/login'>Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
            <div className='img-box'>
                <img src='https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=953&q=80' alt='alt text'/>
            </div>
		</StyledSignup>
	)
}

export default Signup;