import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesCardList } from '../../components/MoviesCardList/MoviesCardList';
import './Movies.css';

export const Movies = () => (
    <>
        <Header />
        <SearchForm />
        <MoviesCardList />
        <Footer className="footer_movies" />
    </>
);
