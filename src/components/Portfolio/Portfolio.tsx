import React from 'react';
import './Portfolio.css';

export const Portfolio = () => (
    <div className="portf">
        <h2 className="portf__title">Портфолио</h2>
        <ul className="portf__items">
            <li className="portf__item">
                <a href="https://github.com/dacorm/" className="portf__item-text" target="_blank" rel="noreferrer">Статичный сайт</a>
            </li>
            <li className="portf__item">
                <a href="https://github.com/dacorm/" className="portf__item-text" target="_blank" rel="noreferrer">Адаптивный сайт</a>
            </li>
            <li className="portf__item">
                <a href="https://github.com/dacorm/" className="portf__item-text" target="_blank" rel="noreferrer">Одностраничное приложение</a>
            </li>
        </ul>
    </div>
);
