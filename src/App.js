import './App.css';
import Currency from "./components/Currency/Currency";
import {Redirect, Route} from "react-router-dom";
import Header from "./components/Header/Header";
import ExchangeContainer from "./components/Exchange/ExchangeContainer";
import React from "react";

function App() {

    let Exchange = () => <ExchangeContainer/>

    return (
        <div className="App">
            <div className="appWrapper">
                <Header/>
                <Redirect from="/" to="/exchange" />
                <Route render={Exchange} exact path="/exchange"/>
                <Route render={Currency} exact path="/currency"/>
            </div>
        </div>
    );
}

export default App;
