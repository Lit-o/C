import React from "react";
import './App.css';
import {Redirect, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import ExchangeContainer from "./components/Exchange/ExchangeContainer";
import ConverterContainer from "./components/Converter/ConverterContainer";

function App() {

    const Exchange = () => <ExchangeContainer/>
    const Converter = () => <ConverterContainer/>

    return (
        <div className="App">
            <div className="appWrapper">
                <Header/>
                <Redirect from="/" to="/exchange" />
                <Route render={Exchange} exact path="/exchange"/>
                <Route render={Converter} exact path="/converter"/>
            </div>
        </div>
    );
}

export default App;
