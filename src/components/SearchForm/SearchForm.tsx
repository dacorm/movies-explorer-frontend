import React from 'react';
import './SearchForm.css';

export const SearchForm = () => (
    <div className="search">
        <div className="search__input-container">
            <input className="search__input" placeholder="Фильм" />
            <button className="search__button" type="submit">Поиск</button>
        </div>
        <div className="search__checkbox-container">
            <label className="search__checkbox">
                <input type="checkbox" />
                <span className="search__checkbox-switcher" />
            </label>
            <p className="search__checkbox-text">Короткометражки</p>
        </div>
    </div>
);
