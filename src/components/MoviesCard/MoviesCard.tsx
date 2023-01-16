import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { classNames } from '../../utils/classnames';
import deleteImage from '../../images/delete.svg';
import './MoviesCard.css';
import { durationConverter } from '../../utils/durationConverter';
import { Movies } from '../../types/moviesType';
import { movieData } from '../../utils/MainApi';

interface MoviesCardProps {
    className?: string;
    url: string;
    name: string;
    duration: number;
    item?: Movies;
    onLike?: (movieData: movieData) => Promise<string>;
    onDislike?: (id: string) => Promise<string>;
    isFilmLiked?: boolean
    filmId?: string | undefined;
}
export const MoviesCard: React.FC<MoviesCardProps> = ({
    className, url, name, duration, item, onLike, onDislike, isFilmLiked, filmId,
}) => {
    const [isLiked, setIsLiked] = useState(isFilmLiked || false);
    const location = useLocation().pathname;
    const isSavedMovies = location === '/saved-movies';

    const likeClickHandler = async () => {
        if (onLike && onDislike && item) {
            const response = isLiked
                ? await onDislike(filmId as string)
                : await onLike({
                    country: item?.country,
                    director: item.director,
                    duration: item.duration,
                    year: item.year,
                    description: item.description,
                    image: `https://api.nomoreparties.co${url}`,
                    trailerLink: item.trailerLink,
                    thumbnail: `https://api.nomoreparties.co${item.image.formats.thumbnail.url}`,
                    movieId: item.id,
                    nameRU: item.nameRU,
                    nameEN: item.nameEN,
                });
            setIsLiked((prev) => !prev);
        }
    };

    const deleteFromSaved = async () => {
        if (onDislike && filmId) {
            const response = await onDislike(filmId);
        }
    };

    return (
        <div className={classNames('card', {}, [className])}>
            <img src={isSavedMovies ? url : `https://api.nomoreparties.co${url}`} alt="Обложка фильма" className="card__image" />
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
                        <img
                            src={deleteImage}
                            alt="Удалить"
                            className="card__bottom-delete"
                            onClick={deleteFromSaved}
                        />
                    )}
                </div>
                <p className="card__bottom-time">{durationConverter(duration)}</p>
            </div>
        </div>
    );
};
