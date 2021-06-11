import { AUTH, AUTH_FAILED } from '../constants/authTypes'
import * as api from '../api/index'

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);
        console.log('may be error', data.message);

        dispatch({ type: AUTH, data})
        history.push('/')
    } catch (error) {
        dispatch({ type: AUTH_FAILED, data:error.response.data.message})
    }
}

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);
        console.log('may be error',data);
        dispatch({ type: AUTH, data})
        history.push('/')
    } catch (error) {
        dispatch({ type: AUTH_FAILED, data:error.response.data.message})
    }
}