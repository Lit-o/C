import {currencyAPI} from "../api/api";

const ADD_BASE_CURRENCY = 'C/SRC/REDUX/EXCHANGE_REDUCER/ADD_BASE_CURRENCY';
const ADD_ACTUAL_RATES = 'C/SRC/REDUX/EXCHANGE_REDUCER/ADD_ACTUAL_RATES'

let initialState = {
    baseApp: 'USD',
    interests: ['EUR','USD','RUB'],
    actualRates: {},
    isFetching: false
}

const exchangeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BASE_CURRENCY: {
            return  {
                ...state,
                baseApp: action.baseApp
            }
        }
        case ADD_ACTUAL_RATES: {
            return  {
                ...state,
                actualRates: {...action.actualRates}
            }
        }
        default:
            return state;
    }
}

export const setBaseAC = (baseApp) => ({type: ADD_BASE_CURRENCY, baseApp});
export const getActualRatesAC = (actualRates) => ({type: ADD_ACTUAL_RATES, actualRates});


export const setActualRatesTC = (baseApp, interests) => {
    return (dispatch) => {
        dispatch(setBaseAC(baseApp))
        currencyAPI.getRates(baseApp, interests).then(response => {
            dispatch(getActualRatesAC(response.rates))
        })
    }
}


export default exchangeReducer;


