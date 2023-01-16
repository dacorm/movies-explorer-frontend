import React from 'react';
import { Header } from '../../components/Header/Header';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesCardList } from '../../components/MoviesCardList/MoviesCardList';
import { Footer } from '../../components/Footer/Footer';
import { movieData } from '../../utils/MainApi';

interface SavedMoviesProps {
    myMovies: movieData[];
    onDislike: (id: string) => Promise<string>;
}

export const SavedMovies: React.FC<SavedMoviesProps> = ({ myMovies, onDislike }) => (
    <>
        <Header />
        <SearchForm />
        <MoviesCardList movies={[]} myMovies={myMovies} onDislike={onDislike} />
        <Footer className="footer_movies" />
    </>
);
