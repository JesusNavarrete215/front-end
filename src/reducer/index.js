import { LOGIN_START, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './../actions';

export const initialState = {
    isLoading: false,
    error: '',
    authorization: false,
    message: ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case LOGIN_START:
            return({
                ...state,
                isLoading: true,
            })
        case LOGIN_SUCCESS:
            return({
                ...state,
                isLoading: false,
                authorization: true,
                message: action.payload
            })
        case LOGIN_FAIL:
            return({
                ...state,
                isLoading: false,
                error: action.payload
            })
        case LOGOUT:
            return({
                ...state,
                authorization: false,
            })
        default: return state
    }
}

export default reducer;