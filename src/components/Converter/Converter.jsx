import style from "./Converter.module.css";
import React, { useState, useEffect, useMemo } from "react";

// base, interest, value
const Converter = (props) => {
    console.log('Render Converter')
    const [value, setValue] = useState(false)
    const [hello, setHello] = useState('Hello, write and send request')
    const isFetching = props.converter.isFetching

    useEffect(() => {
        setHello('Hello, write and send request')
    }, [])

    const sendDataToConvert = (value) => {
        const base = value.slice(-10, -7).toUpperCase()
        const interest = value.slice(-3).toUpperCase()
        const requiredValue = parseFloat(value)
        props.getConvert(base, interest, requiredValue)
    }

    const onEnterPress = (event) => {
        if (event.key === 'Enter') {
            setHello('')
            sendDataToConvert(value)
        }
    }

    const onValueChange = (e) => {
        setValue(e.currentTarget.value);
    }

    const fetchingMessage = isFetching && 'loading, please wait'
    const somethingWrongMessage = (props.converter.result === undefined || props.converter.result === null) && 'Error, respect the format'
    let outputValue = !!(props.converter.result) && props.converter.result.toFixed(3)
    
    return (
        <div className={style.Main}>
            <h2 className="visuallyHidden">Currency converter</h2>
            <div className={style.inputSection}>
                <p>Enter data on field below in the required format and press <strong>Enter</strong>
                    <br />
                    Example: <strong>15 usd in rub</strong>
                </p>
                <div>
                    <input autoFocus={true}
                        onKeyPress={onEnterPress}
                        onChange={onValueChange}
                        type="text" />
                </div>
            </div>

            <div className={style.outputSection}>
                <p>result</p>
                <output name="result">
                    {!(fetchingMessage || somethingWrongMessage || outputValue) && hello}
                    {fetchingMessage}
                    {!fetchingMessage && somethingWrongMessage}
                    {!(fetchingMessage || somethingWrongMessage) && outputValue}
                </output>
            </div>
        </div>
    )
}

export default Converter;