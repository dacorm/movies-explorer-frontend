import React from 'react';
import './AboutMe.css';
import StudentImage from '../../images/vitaliy.png'

export const AboutMe = () => {
    return (
        <div className='about-student'>
            <div className='about-student__content'>
                <h2 className='about-student__title'>Студент</h2>
                <hr/>
                <div className='about-student__student'>
                    <div className='about-student__student-text-wrapper'>
                        <div className='about-student__student-text'>
                            <p className='about-student__student-name'>Виталий</p>
                            <p className='about-student__student-work'>Фронтенд-разработчик, 30 лет</p>
                            <p className='about-student__student-info'>Я родился и живу в Саратове, закончил факультет экономики
                                СГУ. У меня есть жена
                                и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года
                                работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал
                                заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                        </div>
                        <a href='#' target='_blank' className='about-student__student-link'>Github</a>
                    </div>
                    <img src={StudentImage} className='about-student__student-image' alt='Фотография студента'/>
                </div>
            </div>
        </div>
    );
};

