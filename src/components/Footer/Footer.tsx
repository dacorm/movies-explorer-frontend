import React from 'react';
import './Footer.css';
import { classNames } from '../../utils/classnames';

interface FooterProps {
    className?: string;
}
export const Footer: React.FC<FooterProps> = ({ className }) => (
    <div className={classNames('footer', {}, [className])}>
        <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
        <div className="footer__bottom">
            <p className="footer__text">&copy; 2022</p>
            <ul className="footer__links">
                <li className="footer__link-wrapper">
                    <a href="https://github.com/dacorm/" className="footer__link">Яндекс.Практикум</a>
                </li>
                <li className="footer__link-wrapper">
                    <a href="https://github.com/dacorm/" className="footer__link">Github</a>
                </li>
            </ul>
        </div>
    </div>
);
