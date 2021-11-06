import {currencyAPI} from "../api/api";

const ADD_BASE_CURRENCY = 'C/SRC/REDUX/EXCHANGE_REDUCER/ADD_BASE_CURRENCY';
const ADD_ACTUAL_RATES = 'C/SRC/REDUX/EXCHANGE_REDUCER/ADD_ACTUAL_RATES'

let initialState = {
    baseApp: 'USD',
    interests: ['USD','EUR','RUB'],
    actualRates: [],
    isFetching: false
}

const exchangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASE_CURRENCY: {
            return  {
                ...state,
                baseApp: action.base
            }
        }
        case ADD_ACTUAL_RATES: {
            return  {
                ...state,
                actualRates: [...action.actualRates]
            }
        }
        default:
            return state;
    }
}

export const setBaseAC = (base) => ({type: ADD_BASE_CURRENCY, base});
export const getActualRatesAC = (actualRates) => ({type: ADD_ACTUAL_RATES, actualRates});


export const setActualRatesTC = (interests, baseApp) => {
    return (dispatch) => {
        dispatch(setBaseAC(baseApp))
        currencyAPI.getArrRates(interests, baseApp).then(response => {
                dispatch(getActualRatesAC(response))
            })
    }
}


export default exchangeReducer;


