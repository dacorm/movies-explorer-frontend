import React, { useEffect } from 'react';
import './EnterForm.css';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../images/logo.svg';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { userData } from '../../utils/MainApi';

interface EnterFormProps {
    isRegister: boolean;
    onSubmit: (data: userData | Partial<userData>) => Promise<void>;
}

export const EnterForm: React.FC<EnterFormProps> = ({ isRegister, onSubmit }) => {
    const {
        values, handleChange, errors, isValid, setValues, resetForm,
    } = useFormAndValidation({
        name: '',
        email: '',
        password: '',
    });
    const navigate = useNavigate();

    const handleSubmit = (e: React.FormEvent) => {
        try {
            e.preventDefault();
            const userData = isRegister ? {
                name: values.name,
                email: values.email,
                password: values.password,
            } : {
                email: values.email,
                password: values.password,
            };
            onSubmit(userData).then(() => {
                navigate('/movies');
            });
        } catch (e) {
            console.warn(e);
        }
    };

    return (
        <div className="form-container">
            <img src={logo} alt="Логотип" className="form-container__logo" />
            <h1 className="form-container__title">{isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
            <form className="form" onSubmit={handleSubmit} noValidate>
                {isRegister
                    && (
                        <div className="form__input-container">
                            <label htmlFor="name" className="form__label">Имя</label>
                            <input
                                type="text"
                                className="form__input"
                                id="name"
                                name="name"
                                value={values.name || ''}
                                onChange={handleChange}
                                required
                            />
                            <span className="form__span">{errors.name}</span>
                        </div>
                    )}
                <div className="form__input-container">
                    <label htmlFor="email" className="form__label">E-mail</label>
                    <input
                        type="email"
                        className="form__input"
                        id="email"
                        name="email"
                        value={values.email || ''}
                        onChange={handleChange}
                        required
                    />
                    <span className="form__span">{errors.email}</span>
                </div>
                <div className="form__input-container">
                    <label htmlFor="password" className="form__label">Пароль</label>
                    <input
                        type="password"
                        className="form__input"
                        id="password"
                        name="password"
                        value={values.password || ''}
                        onChange={handleChange}
                        required
                    />
                    <span className="form__span">{errors.password}</span>
                </div>
                <div className="form__submit-button-container">
                    <button className="form__submit-button" type="submit" disabled={!isValid}>
                        {isRegister ? 'Зарегистрироваться' : 'Войти'}
                    </button>
                    <p className="form__submit-text">
                        {isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы?'}
                        <Link to={isRegister ? '/signin' : '/signup'} className="form__submit-span">{isRegister ? 'Войти' : 'Регистрация'}</Link>
                    </p>
                </div>
            </form>
        </div>
    );
};
