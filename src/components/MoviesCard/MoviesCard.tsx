import React from 'react';
import { classNames } from '../../utils/classnames';
import image from '../../images/exampleMovie.png';
import './MoviesCard.css';

interface MoviesCardProps {
    className?: string;
}
export const MoviesCard: React.FC<MoviesCardProps> = ({ className }) => (
    <div className={classNames('card', {}, [className])}>
        <img src={image} alt="Обложка фильма" className="card__image" />
        <div className="card__bottom">
            <div className="card__bottom-wrapper">
                <p className="card__bottom-text">33 слова о дизайне</p>
                <button type="button" className="card__bottom-like" />
            </div>
            <p className="card__bottom-time">1ч 47м</p>
        </div>
    </div>
);
