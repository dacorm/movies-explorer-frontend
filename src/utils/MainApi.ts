import { makeRequest } from './makeRequest';

export interface userData {
    login: string;
    email: string;
    password: string;
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
        },
        body: JSON.stringify(data),
    });
}

export function auth() {
    return makeRequest('https://api.movies.dacorm.nomoredomains.club/users/me');
}
