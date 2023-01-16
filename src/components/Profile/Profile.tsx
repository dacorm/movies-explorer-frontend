import React, { useContext, useState } from 'react';
import './Profile.css';
import currentUserContext from '../../contexts/currentUserContext';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { updateUser, userData } from '../../utils/MainApi';

interface ProfileProps {
    onLogout: () => void;
    onSubmit: (values: Partial<userData>) => Promise<userData>
}

export const Profile: React.FC<ProfileProps> = ({ onLogout, onSubmit }) => {
    const user = useContext(currentUserContext);
    const {
        values, handleChange, errors, isValid, setValues, resetForm,
    } = useFormAndValidation({
        name: user?.name || '',
        email: user?.email || '',
    });
    const [isEdit, setIsEdit] = useState(false);
    const enableButton = isEdit && isValid && JSON.stringify({
        name: user?.name,
        email: user?.email,
    }) !== JSON.stringify(values);

    const enterEditMode = () => {
        setIsEdit(true);
    };

    const handleSubmit = (e: React.FormEvent, values: Partial<userData>) => {
        e.preventDefault();
        onSubmit(values).then(() => {
            setIsEdit(false);
        });
    };

    return (
        <div className="profile">
            <h1 className="profile__title">
                Привет,&nbsp;
                {user?.name}
            </h1>
            <form
                className="profile__wrapper"
                onSubmit={(e) => {
                    handleSubmit(e, values);
                }}
            >
                <div className="profile__label">
                    <p className="profile__label-text">Имя</p>
                    {isEdit
                        ? (
                            <div className="profile__label-input-wrapper">
                                <input className="profile__label-text" type="text" name="name" value={values.name || ''} onChange={handleChange} required />
                                <span className="profile__label-span">{errors.name}</span>
                            </div>
                        )
                        : <p className="profile__label-text" onClick={enterEditMode}>{user?.name}</p>}
                </div>
                <div className="profile__label">
                    <p className="profile__label-text">E-mail</p>
                    {isEdit
                        ? (
                            <div className="profile__label-input-wrapper">
                                <input className="profile__label-text" type="email" name="email" value={values.email || ''} onChange={handleChange} required />
                                <span className="profile__label-span">{errors.email}</span>
                            </div>
                        )
                        : <p className="profile__label-text" onClick={enterEditMode}>{user?.email}</p>}
                </div>
                <div className="profile__links">
                    <button
                        type="submit"
                        className={`profile__link ${enableButton ? '' : 'profile__link_disabled'}`}
                        disabled={!enableButton}
                    >
                        Редактировать
                    </button>
                    <button type="button" className="profile__link profile__link_exit" onClick={onLogout}>Выйти из аккаунта</button>
                </div>
            </form>
        </div>
    );
};
