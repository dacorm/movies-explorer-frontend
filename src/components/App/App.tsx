import React from 'react';
import './App.css';
import {Promo} from "../Promo/Promo";
import {NavTab} from "../NavTab/NavTab";
import {AboutProject} from "../AboutProject/AboutProject";
import {Techs} from "../Techs/Techs";
import {AboutMe} from "../AboutMe/AboutMe";

function App() {
    return (
        <div className="App">
            <Promo/>
            <NavTab/>
            <AboutProject />
            <Techs />
            <AboutMe />
        </div>
    );
}

export default App;
