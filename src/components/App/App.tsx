import React from 'react';
import './App.css';
import {Promo} from "../Promo/Promo";
import {NavTab} from "../NavTab/NavTab";
import AboutProject from "../AboutProject/AboutProject";

function App() {
    return (
        <div className="App">
            <Promo/>
            <NavTab/>
            <AboutProject />
        </div>
    );
}

export default App;
