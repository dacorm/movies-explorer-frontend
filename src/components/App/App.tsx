import React from 'react';
import './App.css';
import {Promo} from "../Promo/Promo";
import {NavTab} from "../NavTab/NavTab";
import {AboutProject} from "../AboutProject/AboutProject";
import {Techs} from "../Techs/Techs";

function App() {
    return (
        <div className="App">
            <Promo/>
            <NavTab/>
            <AboutProject />
            <Techs />
        </div>
    );
}

export default App;
