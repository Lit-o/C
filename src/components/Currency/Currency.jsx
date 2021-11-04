import style from "../Currency/Currency.module.css";


const Currency = () => {
    return (
        <div className={style.Main}>
            <h2 className="visuallyHidden">Currency converter</h2>
            <div className={style.inputSection}>
                <p>Enter data on field below in the required format and press enter
                    <br/>

                    Example: <strong>15 usd in rub</strong>
                </p>

                <div>
                    <input type="text"/>
                </div>
            </div>

            <div className={style.outputSection}>
                <p>result</p>
                <output name="result">0</output>
            </div>
        </div>
    )
}

export default Currency;