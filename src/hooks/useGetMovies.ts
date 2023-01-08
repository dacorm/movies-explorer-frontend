import { useEffect, useState } from 'react';
import { getMovies } from '../utils/MoviesApi';

export function useGetMovies(flag: boolean) {
    const [movies, setMovies] = useState();
    const [error, setError] = useState('');
    const [needPreloader, setNeedPreloader] = useState(false);

    const fetchMovies = async () => {
        try {
            setNeedPreloader(true);
            const moviesList = await getMovies();
            setMovies(moviesList);
            setNeedPreloader(false);
        } catch (e) {
            setError(e as string);
        }
    };

    useEffect(() => {
        if (flag) {
            fetchMovies();
        }
    }, [flag]);

    return { movies, error, needPreloader };
}
