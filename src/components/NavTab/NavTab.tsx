import React from 'react';
import './NavTab.css';

export const NavTab = () => (
    <div className="nav">
        <nav className="nav__items">
            <a href="src/components/NavTab#project" className="nav__item">О проекте</a>
            <a href="src/components/NavTab#techs" className="nav__item">Технологии</a>
            <a href="src/components/NavTab#student" className="nav__item">Студент</a>
        </nav>
    </div>
);
