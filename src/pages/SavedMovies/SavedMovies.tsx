import React from 'react';
import { Header } from '../../components/Header/Header';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesCardList } from '../../components/MoviesCardList/MoviesCardList';
import { Footer } from '../../components/Footer/Footer';

export const SavedMovies = () => (
    <>
        <Header />
        <SearchForm />
        <MoviesCardList movies={[]} />
        <Footer className="footer_movies" />
    </>
);
