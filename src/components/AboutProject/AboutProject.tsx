import React from 'react';
import './AboutProject.css';

export const AboutProject = () => (
    <div className="about">
        <div className="about__content">
            <h2 className="about__title">О проекте</h2>
            <hr />
            <ul className="about__items">
                <li className="about__item">
                    <h3 className="about__item-title">Дипломный проект включал 5 этапов</h3>
                    <p className="about__item-text">
                        Составление плана, работу над бэкендом, вёрстку, добавление
                        функциональности и финальные доработки.
                    </p>
                </li>
                <li className="about__item">
                    <h3 className="about__item-title">На выполнение диплома ушло 5 недель</h3>
                    <p className="about__item-text">
                        У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
                        соблюдать, чтобы успешно защититься.
                    </p>
                </li>
            </ul>
            <ul className="about__steps">
                <li className="about__step about__step_first">
                    <h4 className="about__step-title about__step-title_first">1 неделя</h4>
                    <p className="about__step-description">Back-end</p>
                </li>
                <li className="about__step">
                    <h4 className="about__step-title">4 недели</h4>
                    <p className="about__step-description">Front-end</p>
                </li>
            </ul>
        </div>
    </div>
);
