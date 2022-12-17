import React from 'react';
import './EnterForm.css';

interface EnterFormProps {
    isRegister: boolean;
}

export const EnterForm: React.FC<EnterFormProps> = ({ isRegister }) => (
    <div className="form-container">
        <h1 className="form-container__title">{isRegister ? 'Добро пожаловать!' : 'Рады видеть!'}</h1>
        <form className="form">
            {isRegister
                    && (
                        <div className="form__input-container">
                            <label htmlFor="name" className="form__label">Имя</label>
                            <input type="text" className="form__input" id="name" placeholder="Виталий" />
                            <span className="form__span" />
                        </div>
                    )}
            <div className="form__input-container">
                <label htmlFor="name" className="form__label">E-mail</label>
                <input type="email" className="form__input" id="email" placeholder="pochta@yandex.ru|" />
                <span className="form__span" />
            </div>
            <div className="form__input-container">
                <label htmlFor="name" className="form__label">Пароль</label>
                <input type="password" className="form__input" id="password" placeholder="••••••••••••••" />
                <span className="form__span">Что-то пошло не так...</span>
            </div>
            <div className="form__submit-button-container">
                <button className="form__submit-button" type="submit">
                    {isRegister ? 'Зарегистрироваться' : 'Войти'}
                </button>
                <p className="form__submit-text">
                    {isRegister ? 'Уже зарегистрированы?' : 'Еще не зарегистрированы?'}
                    <span>{isRegister ? 'Войти' : 'Регистрация'}</span>
                </p>
            </div>
        </form>
    </div>
);
