import React from 'react';
import './AboutMe.css';
import StudentImage from '../../images/vitaliy.png'

export const AboutMe = () => {
    return (
        <div className='about'>
            <div className='about__content'>
                <h2 className='about__title'>Студент</h2>
                <hr/>
                <div className="about__student">
                    <div className="about__student-text-wrapper">
                        <div className="about__student-text">
                            <p className='about__student-name'></p>
                            <p className='about__student-work'></p>
                            <p className='about__student-info'></p>

                        </div>
                        <div className="about__student-link"></div>
                    </div>
                    <img src={StudentImage} className="about__student-image"  alt='Фотография студента' />
                </div>
            </div>
        </div>
    );
};

