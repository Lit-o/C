import style from "../Exchange/Exchange.module.css";
import {useEffect} from "react";


const Exchange = (props) => {

    let userLang = navigator.language || navigator.userLanguage;
    userLang = userLang.slice(0, 2).toLowerCase();

    let baseApp
    switch (userLang) {
        case 'ru':
            baseApp = "RUB";
            break;

        case 'en':
            baseApp = "USD"
            break;

        case 'de':
        case 'cs':
        case 'fr':
        case 'it':
            baseApp = "EUR"
            break;
        default:
            baseApp = "USD"
    }

    let interests = props.exchange.interests.filter(el => el !== baseApp)
    console.log(interests);

    useEffect( () => {
        props.setActualRates(baseApp, interests);
    }, [])

    console.log(props);

    return (
        <div className={style.Main}>
            <h2 className="visuallyHidden">Exchange rates</h2>
            <div className={style.baseCurrency}>
                <p>Your base currency: {props.exchange.base}</p>
            </div>
            <table>
                <tr><th>From</th><th>To</th></tr>
                <tr><td>USD</td><td>31.002312</td></tr>
                <tr><td>EUR</td><td>28.005519</td></tr>
            </table>
        </div>
    )
}

export default Exchange;