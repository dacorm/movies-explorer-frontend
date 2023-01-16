import { makeRequest } from './makeRequest';

export interface userData {
    name: string;
    email: string;
    password: string;
}

export interface movieData {
    country: string;
    director: string;
    duration: number;
    year: string;
    description: string;
    image: string;
    trailerLink: string;
    thumbnail: string;
    movieId: number;
    nameRU: string;
    nameEN: string;
    _id?: string;
}

export function register(data: userData) {
    return makeRequest('https://api.movies.dacorm.nomoredomains.club/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export function login(data: Partial<userData>) {
    return makeRequest('https://api.movies.dacorm.nomoredomains.club/signin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });
}

export function updateUser(data: Partial<userData>) {
    return makeRequest('https://api.movies.dacorm.nomoredomains.club/users/me', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
    });
}

export function saveMovie(data: movieData) {
    return makeRequest('https://api.movies.dacorm.nomoredomains.club/movies', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(data),
    });
}

export function deleteMovie(id: string) {
    return makeRequest(`https://api.movies.dacorm.nomoredomains.club/movies/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
}

export function getMovies() {
    return makeRequest('https://api.movies.dacorm.nomoredomains.club/movies', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
    });
}

export function auth(token: string) {
    return makeRequest('https://api.movies.dacorm.nomoredomains.club/users/me', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });
}
