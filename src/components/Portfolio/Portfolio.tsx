import React from 'react';
import './Portfolio.css';
import link from '../../images/link.svg';

export const Portfolio = () => (
    <div className="portf">
        <h2 className="portf__title">Портфолио</h2>
        <ul className="portf__items">
            <li className="portf__item">
                <a href="https://github.com/dacorm/" className="portf__item-text">Статичный сайт</a>
                <img src={link} alt="Переход на страницу" className="portf__item-img" />
            </li>
            <li className="portf__item">
                <a href="https://github.com/dacorm/" className="portf__item-text">Адаптивный сайт</a>
                <img src={link} alt="Переход на страницу" className="portf__item-img" />
            </li>
            <li className="portf__item">
                <a href="https://github.com/dacorm/" className="portf__item-text">Одностраничное приложение</a>
                <img src={link} alt="Переход на страницу" className="portf__item-img" />
            </li>
        </ul>
    </div>
);
