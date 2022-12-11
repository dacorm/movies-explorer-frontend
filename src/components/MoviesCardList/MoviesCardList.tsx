import React from 'react';
import './MoviesCardList.css';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export const MoviesCardList = () => (
    <div className="list">
        {[...Array(8).keys()].map((item) => <MoviesCard key={item} />)}
        <button type="button" className="list__button">Ещё</button>
    </div>
);
