import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.exchangerate.host/latest'
})

export const currencyAPI = {
    getRates(base, symbols) {
        return instance.get("?base=" + base + "&symbols=" + symbols)
            .then(response => {
                return response.data
            })
    },

    getArrRates(baseArr, symbols) {
        return axios.all(baseArr.map(result => {
            return instance.get("?base=" + result + "&symbols=" + symbols)
                .then(response => {
                    return response.data
                })
        }))
    }
}


























