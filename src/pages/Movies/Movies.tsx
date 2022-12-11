import React from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesCard } from '../../components/MoviesCard/MoviesCard';

export const Movies = () => (
    <>
        <Header />
        <SearchForm />
        <MoviesCard />
        <Footer />
    </>
);
