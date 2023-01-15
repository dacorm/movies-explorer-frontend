import React, { useContext } from 'react';
import './Profile.css';
import currentUserContext from '../../contexts/currentUserContext';

interface ProfileProps {
    onLogout: () => void;
}

export const Profile: React.FC<ProfileProps> = ({ onLogout }) => {
    const user = useContext(currentUserContext);

    return (
        <div className="profile">
            <h1 className="profile__title">
                Привет,&nbsp;
                {user?.name}
            </h1>
            <div className="profile__wrapper">
                <div className="profile__label">
                    <p className="profile__label-text">Имя</p>
                    <p className="profile__label-text">{user?.name}</p>
                </div>
                <div className="profile__label">
                    <p className="profile__label-text">E-mail</p>
                    <p className="profile__label-text">{user?.email}</p>
                </div>
                <div className="profile__links">
                    <button type="button" className="profile__link">Редактировать</button>
                    <button type="button" className="profile__link profile__link_exit" onClick={onLogout}>Выйти из аккаунта</button>
                </div>
            </div>
        </div>
    );
};
