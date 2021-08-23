import React, { useState } from 'react';
import '../App.css';

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
		<div>
			<form onSubmit={handleSubmit}>
                <label>Username: &nbsp;
                    <input type='text' name='username' id='username' onChange={handleChange} value={formValue.username}/>
                </label>
                <label>Password: &nbsp;
                    <input text='password' name='password' id='password' onChange={handleChange} value={formValue.password}/>
                </label>
                <button>Sign Up!</button>
            </form>
		</div>
	)
}

export default Signup;