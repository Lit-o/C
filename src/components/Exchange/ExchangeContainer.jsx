import Exchange from "./Exchange";
import {connect} from "react-redux";
import {setActualRatesTC, setBaseAC} from "../../redux/exchangeReducer";

let mapStateToProps = (state) => {
    return {
        exchange: state.exchangePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setBase: (base) => {
            dispatch(setBaseAC(base))
        },
        setActualRates: (base) => {
            dispatch(setActualRatesTC(base))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)
