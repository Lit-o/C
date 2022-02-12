import Converter from "./Converter";
import { connect } from "react-redux";
import { getConvertTC } from "../../redux/converterReducer";

const mapStateToProps = (state) => {
    return {
        converter: state.converterPage,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getConvert: (base, interest, value) => {
            dispatch(getConvertTC(base, interest, value))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Converter)
