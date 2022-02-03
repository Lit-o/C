import { currencyAPI } from "../api/api";

const CURRENCY_CONVERT = 'C/SRC/REDUX/CONVERT_REDUCER/CURRENCY_CONVERT';
const CURRENCY_CONVERT_STATE = 'C/SRC/REDUX/CONVERT_REDUCER/CURRENCY_CONVERT_STATE'

let initialState = {
    base: '',
    interest: '',
    result: 0,
    isFetching: false
}

const converterReducer = (state = initialState, action) => {
    switch (action.type) {
        case CURRENCY_CONVERT_STATE: {
            return {
                ...state,
                base: action.base,
                interest: action.interest,
                isFetching: true
            }
        }
        case CURRENCY_CONVERT: {
            return {
                ...state,
                result: action.result,
                isFetching: false
            }
        }
        default:
            return state;
    }
}

export const getConvertAC = (result) => ({ type: CURRENCY_CONVERT, result });
export const getConvertStateAC = (base, interest) => ({ type: CURRENCY_CONVERT_STATE, base, interest });

export const getConvertTC = (base, interest, value) => {
    return (dispatch) => {
        dispatch(getConvertStateAC(base, interest))
        currencyAPI.convert(base, interest, value).then(response => {
            dispatch(getConvertAC(response))
        })
    }
}


export default converterReducer;



