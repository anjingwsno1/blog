import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
    type: constants.CHANGE_LOGIN,
    value: true
})
export const logout = () => ({
    type: constants.LOGOUT,
    value: false
})
export const login = (account, password) => {
    return (dispatch) => {
        const res = {
            "success": true,
            "data": true
        };
        const result = res.data;
        if (result) {
            dispatch(changeLogin())
        }else {
            alert('login failed')
        }
    }
}