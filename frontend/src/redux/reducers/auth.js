import {AUTH, AUTH_FAILED, LOGOUT, RESET} from '../constants/authTypes'

const initialState = {
    authData: null, errors: null
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH:
            localStorage.setItem('profile', JSON.stringify({...action?.data}))
            return {
                ...state,
                authData: action.data,
                loading: false,
                errors: null
                }
        case AUTH_FAILED:
            return {
                ...state,
                loading: false,
                errors: action.data
                }
        case LOGOUT:
            localStorage.clear('profie');
            return { 
                 authData: null,
                 loading: false,
                 errors: null
                }
        case RESET:
            return { 
                 authData: null,
                 loading: false,
                 errors: null
                }
        default:
            return state;

    }
}

export default authReducer;