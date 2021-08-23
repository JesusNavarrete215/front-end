import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const login = (credentials) => {
    return (dispatch) => {
        dispatch(loginStart());
        axios.post('http://backend-link.com', credentials)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                alert(err);
            })
    }
}

export const loginStart = () => {
    return({type:LOGIN_START});
}

export const loginSuccess = () => {
    return({type:LOGIN_SUCCESS})
}

export const loginFail = (error) => {
    return({type:LOGIN_FAIL, payload:error})
}