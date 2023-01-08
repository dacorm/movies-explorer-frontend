import React from 'react';
import './Profile.css';

export const Profile = () => (
    <div className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__wrapper">
            <div className="profile__label">
                <p className="profile__label-text">Имя</p>
                <p className="profile__label-text">Виталий</p>
            </div>
            <div className="profile__label">
                <p className="profile__label-text">E-mail</p>
                <p className="profile__label-text">pochta@yandex.ru</p>
            </div>
            <div className="profile__links">
                <p className="profile__link">Редактировать</p>
                <p className="profile__link profile__link_exit">Выйти из аккаунта</p>
            </div>
        </div>
    </div>
);
