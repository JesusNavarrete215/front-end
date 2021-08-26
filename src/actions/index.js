import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const LOGOUT = 'LOGOUT';

export const login = (credentials) => {
    return (dispatch) => {
        dispatch(loginStart());
        axios.post('https://potluck-planner-07.herokuapp.com/api/auth/login', credentials)
            .then(res => {
                dispatch(loginSuccess(res.data.message));
                localStorage.setItem('token', res.data.token);
            })
            .catch(err => {
                dispatch(loginFail(err.response.data.message));
            })
    }
}

export const loginStart = () => {
    return({type: LOGIN_START});

}

export const loginSuccess = (success) => {
    return({type: LOGIN_SUCCESS, payload: success});

}

export const loginFail = (error) => {
    return({type: LOGIN_FAIL, payload: error});
}
