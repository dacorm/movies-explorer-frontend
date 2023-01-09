import { makeRequest } from './makeRequest';

export function register() {
    return makeRequest('https://api.nomoreparties.co/beatfilm-movies');
}
