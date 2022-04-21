import React, { lazy, Suspense } from "react";
import './App.css';
import { Redirect, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import ExchangeContainer from "./components/Exchange/ExchangeContainer";
import Loader from "./components/Loader/Loader";


function App() {

    const Exchange = () => <ExchangeContainer />
    const Converter = lazy(() => import('./components/Converter/ConverterContainer'))

    return (
        <div className="App">
            <div className="appWrapper">
                <Header />
                <Redirect from="/" to="/exchange" />
                <Route render={Exchange} exact path="/exchange" />
                <Route exact path="/converter">
                    <Suspense fallback={<Loader/>}>
                        <Converter />
                    </Suspense>
                </Route>
                
            </div>
        </div>
    );
}

export default App;
