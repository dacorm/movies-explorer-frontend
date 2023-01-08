import { makeRequest } from './makeRequest';

export function getMovies() {
    return makeRequest('https://api.nomoreparties.co/beatfilm-movies');
}
