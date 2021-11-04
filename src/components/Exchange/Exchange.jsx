import style from "../Exchange/Exchange.module.css";


const Exchange = () => {
    return (
        <div className={style.Main}>
            <h2 className="visuallyHidden">Exchange rates</h2>
            <div className={style.baseCurrency}>
                <p>Your base currency: RUB</p>
            </div>
            <table>
                <tr><th>From</th><th>To</th></tr>
                <tr><td>1 USD</td><td>31.002312 RUB</td></tr>
                <tr><td>1 EUR</td><td>28 RUB</td></tr>
            </table>
        </div>
    )
}

export default Exchange;