import React, { FormEvent, useEffect, useState } from 'react';
import { Header } from '../../components/Header/Header';
import { Footer } from '../../components/Footer/Footer';
import { Movies as MoviesType } from '../../types/moviesType';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { MoviesCardList } from '../../components/MoviesCardList/MoviesCardList';
import './Movies.css';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { useGetStorageData } from '../../hooks/useGetStorageData';
import { useGetMovies } from '../../hooks/useGetMovies';
import { filterMovies } from '../../utils/filterMovies';
import { movieData } from '../../utils/MainApi';

interface MoviesProps {
    onLike: (movieData: movieData) => Promise<string>;
    onDislike: (id: string) => Promise<string>;
    myMovies: movieData[];
}

export const Movies: React.FC<MoviesProps> = ({ onLike, onDislike, myMovies }) => {
    const {
        values, handleChange, errors, isValid, setValues, resetForm,
    } = useFormAndValidation({
        search: '',
    });
    const [checkbox, setCheckbox] = useState(false);
    const [searchParam, setSearchParam] = useGetStorageData('search', values.search);
    const [flag, setFlag] = useState(false);
    const [checkBox, setCheckBox] = useGetStorageData('checkbox', checkbox);
    const [filteredMovies, setFilteredMovies] = useState<MoviesType[]>();
    const [storedFilteredMovies, setStoredFilteredMovies] = useGetStorageData('filteredMovies', filteredMovies);
    const { movies } = useGetMovies(flag);
    const [findedMovies, setFindedMovies] = useGetStorageData('movies', movies ?? '');

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setFlag(true);
        setSearchParam(values.search);
        setCheckBox(checkbox);
        setFilteredMovies(filterMovies(findedMovies, values.search, checkbox));
        setStoredFilteredMovies(filteredMovies);
    };

    const handleCheckboxChange = (e: any) => {
        setCheckbox((prev) => !prev);
    };

    useEffect(() => {
        if (searchParam) {
            setValues({
                search: searchParam,
            });
        }
        if (checkBox) {
            setCheckbox(checkBox);
        }
    }, []);

    useEffect(() => {
        if (movies) setFindedMovies(movies);
        if (!filteredMovies && findedMovies) setFilteredMovies(filterMovies(findedMovies, searchParam, checkBox));
    }, [movies]);

    useEffect(() => {
        if (filteredMovies) {
            setStoredFilteredMovies(filteredMovies);
        }
    }, [filteredMovies]);

    return (
        <>
            <Header />
            <SearchForm
                onChange={handleChange}
                value={values.search || ''}
                handleSubmit={handleSubmit}
                isValid={isValid}
                error={errors.search}
                onCheckBoxChange={handleCheckboxChange}
                checked={checkbox}
            />
            <MoviesCardList movies={filteredMovies || []} onLike={onLike} onDislike={onDislike} myMovies={myMovies} />
            <Footer className="footer_movies" />
        </>
    );
};
