import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';


export const login = props => dispatch => {

	const credentials = {
		username: props.username,
		password: props.password,
	}
	dispatch({ type: LOGIN_START })
	axios
		.post('https://potluck-planner-07.herokuapp.com/api/auth/login', credentials)
		.then(res => {
			console.log(res.credentials)

			dispatch({ type: LOGIN_SUCCESS, payload: res.credentials })
		})
		.catch(error => {
			dispatch({ type: LOGIN_FAIL, payload: error.response.credentials.message })
		})


}







export const loginStart = () => {
    return({type:LOGIN_START});

}




export const loginSuccess = (success) => {
    return({type:LOGIN_SUCCESS, payload: success})

}




export const loginFail = (error) => {
    return({type:LOGIN_FAIL, payload:error})
    
}