import React, { useEffect, useState } from 'react';
import './MoviesCardList.css';
import { useLocation } from 'react-router-dom';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { Movies } from '../../types/moviesType';
import { movieData } from '../../utils/MainApi';
import { debounce } from '../../utils/debounce';

export interface MoviesCardListProps {
    movies: Movies[];
    onLike?: (movieData: movieData) => Promise<string>;
    onDislike?: (id: string) => Promise<string>;
    myMovies: movieData[];
}
export const MoviesCardList: React.FC<MoviesCardListProps> = ({
    movies, onLike, onDislike, myMovies,
}) => {
    const [slicedMovies, setSlicedMovies] = useState<Movies[]>([]);
    const [cardsCount, setCardsCount] = useState<number>();
    const location = useLocation().pathname;
    const isSavedMovies = location === '/saved-movies';
    const [count, setCount] = useState(slicedMovies.length || 0);

    const calculateCardsCount = () => {
        const pageWidth = document.documentElement.clientWidth;
        if (pageWidth >= 1280) {
            setCardsCount(12);
            return;
        }
        if (pageWidth >= 768) {
            setCardsCount(8);
            return;
        }
        setCardsCount(5);
    };

    const debouncedCalculator = debounce(calculateCardsCount, 200);

    useEffect(() => {
        calculateCardsCount();
        setSlicedMovies(movies.slice(0, cardsCount));

        window.addEventListener('resize', debouncedCalculator);

        return () => {
            window.removeEventListener('resize', debouncedCalculator);
        };
    }, []);

    useEffect(() => {
        if (cardsCount) {
            calculateCardsCount();
            setSlicedMovies(movies.slice(0, cardsCount + count));
        }
    }, [movies]);

    useEffect(() => {
        if (cardsCount) {
            setSlicedMovies(movies.slice(0, cardsCount + count));
        }
    }, [cardsCount, count]);

    const calculateCardsToAdd = () => {
        const pageWidth = document.documentElement.clientWidth;

        if (pageWidth >= 1280) {
            return 3;
        }
        return 2;
    };

    const handleClick = () => {
        const number = calculateCardsToAdd();
        setCount((prev) => prev + number);
    };

    return (
        <div className="list">
            {movies.length > 0 && !isSavedMovies ? slicedMovies.map((item: Movies) => {
                const arr = myMovies && myMovies.filter((movie) => movie.nameRU === item.nameRU);
                const id = arr.length > 0 ? arr[0]._id : undefined;
                return (
                    <MoviesCard
                        name={item.nameRU}
                        url={item.image.formats.thumbnail.url}
                        duration={item.duration}
                        key={item.id}
                        item={item}
                        onDislike={onDislike}
                        onLike={onLike}
                        isFilmLiked={arr.length > 0}
                        filmId={id}
                    />
                );
            }) : null}
            {isSavedMovies && (
                myMovies.map((item) => (
                    <MoviesCard
                        name={item.nameRU}
                        url={item.image}
                        duration={item.duration}
                        key={item._id}
                        onDislike={onDislike}
                        onLike={onLike}
                        filmId={item._id}
                    />
                ))
            )}
            {(count + slicedMovies.length) < 100 && <button type="button" onClick={handleClick} className="list__button">Ещё</button>}
        </div>
    );
};
