import React from 'react';
import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';
import { Movies } from '../../types/moviesType';

export interface MoviesCardListProps {
    movies: Movies[];
}
export const MoviesCardList: React.FC<MoviesCardListProps> = ({ movies }) => (
    <div className="list">
        {movies.length > 0 ? movies.map((item: Movies) => (
            <MoviesCard
                name={item.nameRU}
                url={item.image.formats.thumbnail.url}
                duration={item.duration}
                key={item.id}
            />
        )) : 'Ничего не найдено'}
        <button type="button" className="list__button">Ещё</button>
    </div>
);
