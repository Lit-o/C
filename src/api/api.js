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

    arrMethod(baseArr, symbols) {

    }
}
































// var requestURL = 'https://api.exchangerate.host/latest';
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
//
// request.onload = function() {
//     var response = request.response;
//     console.log(response);
// }

var userLang = navigator.language || navigator.userLanguage;
console.log(userLang);

// if(navigator.language === 'ru' || navigator.language === 'ru-RU')

var language = window.navigator ? (window.navigator.language ||
    window.navigator.systemLanguage ||
    window.navigator.userLanguage) : "ru";
language = language.substr(0, 2).toLowerCase();