import '../App.css';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from './../actions'

const initialState = {
    username: '',
    password: ''
}

const Login = (props) => {
    const [ formValue, setFormValue ] = useState(initialState);
    const { authorization } = props;

    const handleChange = (e) => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formValue);
        console.log(authorization);
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
                <button>Login</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return ({
        authorization: state.authorization
    })
}

export default connect(mapStateToProps, { login })(Login);