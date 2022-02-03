import style from "./Converter.module.css";
import React, {useState} from "react";

// base, interest, value
const Converter = (props) => {

    const [value, setValue] = useState(false)

    const sendDataToConvert = (value) => {
        const base = value.slice(-10, -7).toUpperCase()
        const interest = value.slice(-3).toUpperCase()
        const requiredValue = parseFloat(value)
        props.getConvert(base, interest, requiredValue)
    }

    const onEnterPress = (event) => {
        if(event.key === 'Enter'){
            sendDataToConvert(value)
        }
    }

    const onValueChange = (e) => {
        setValue(e.currentTarget.value);
    }

    return (
        <div className={style.Main}>
            <h2 className="visuallyHidden">Currency converter</h2>
            <div className={style.inputSection}>
                <p>Enter data on field below in the required format and press enter
                    <br/>
                    Example: <strong>15 usd in rub</strong>
                </p>

                <div>
                    <input autoFocus={'true'}
                           onKeyPress={onEnterPress}
                           onChange={onValueChange}
                           type="text"/>
                </div>
            </div>

            <div className={style.outputSection}>
                <p>result</p>
                <output name="result">
                    {(props.converter.result === undefined || props.converter.result === null)
                        ? 'respect the format'
                        : props.converter.result.toFixed(3)
                    }
                </output>
            </div>
        </div>
    )
}

export default Converter;