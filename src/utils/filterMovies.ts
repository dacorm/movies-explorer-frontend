import { Movies } from '../types/moviesType';

export const filterMovies = (movies: Movies[], queryText: string, isShortFilmToggle: boolean) => movies.filter(({ nameRU, nameEN, duration }) => {
    const textToMatch = (nameRU + nameEN).toLowerCase();
    const normalizedQuery = queryText.toLowerCase();

    const toggle = isShortFilmToggle ? duration <= 40 : true;
    return toggle && textToMatch.includes(normalizedQuery);
});
