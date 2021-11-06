import * as axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.exchangerate.host/latest'
})

export const currencyAPI = {
    getArrRates(baseArr, symbols) {
        return axios.all(baseArr.map(result => {
            return instance.get("?base=" + result + "&symbols=" + symbols)
                .then(response => {
                    return response.data
                })
        }))
    },

    convert(base, interest, value) {
        return instance.get("?base=" + base + "&symbols=" + interest + "&amount=" + value)
            .then(response => {
                console.log(response.data.rates[interest])
                return response.data.rates[interest]
            })
    }
}


























