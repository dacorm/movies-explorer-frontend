import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '../../utils/classnames';
import image from '../../images/exampleMovie.png';
import deleteImage from '../../images/delete.svg';
import './MoviesCard.css';
import { durationConverter } from '../../utils/durationConverter';

interface MoviesCardProps {
    className?: string;
    url: string;
    name: string;
    duration: number;
}
export const MoviesCard: React.FC<MoviesCardProps> = ({
    className, url, name, duration,
}) => {
    const [isLiked, setIsLiked] = useState(false);
    const location = useLocation().pathname;
    const isSavedMovies = location === '/saved-movies';

    const likeClickHandler = () => {
        setIsLiked((prev) => !prev);
    };

    return (
        <div className={classNames('card', {}, [className])}>
            <img src={`https://api.nomoreparties.co${url}`} alt="Обложка фильма" className="card__image" />
            <div className="card__bottom">
                <div className="card__bottom-wrapper">
                    <p className="card__bottom-text">{name}</p>
                    {!isSavedMovies && (
                        <button
                            type="button"
                            className={isLiked ? 'card__bottom-like' : 'card__bottom-like_inactive'}
                            onClick={likeClickHandler}
                        />
                    )}
                    {isSavedMovies && (
                        <img src={deleteImage} alt="Удалить" className="card__bottom-delete" />
                    )}
                </div>
                <p className="card__bottom-time">{durationConverter(duration)}</p>
            </div>
        </div>
    );
};
