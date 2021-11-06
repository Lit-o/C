import Converter from "./Converter";
import {connect} from "react-redux";
import {getConvertTC} from "../../redux/converterReducer";

let mapStateToProps = (state) => {
    return {
        converter: state.converterPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        getConvert: (base, interest, value) => {
            dispatch(getConvertTC(base, interest, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Converter)
