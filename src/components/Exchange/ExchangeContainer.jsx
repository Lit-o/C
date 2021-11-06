import Exchange from "./Exchange";
import {connect} from "react-redux";
import {setActualRatesTC} from "../../redux/exchangeReducer";

let mapStateToProps = (state) => {
    return {
        exchange: state.exchangePage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        setActualRates: (interests, baseApp) => {
            dispatch(setActualRatesTC(interests, baseApp))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exchange)
