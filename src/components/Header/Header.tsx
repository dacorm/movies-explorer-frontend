import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import './Header.css';

export const Header = () => {
    const location = useLocation().pathname;
    const isLanding = location === '/';

    const [isOpened, setOpened] = useState(false);

    const openPopup = () => {
        setOpened((state) => !state);
    };

    const closePopup = () => {
        setOpened(false);
    };

    return (
        <header className={`header ${isLanding && 'header_landing'}`}>
            <Link className="header__logo" to="/" title="На главную" />
            {!isLanding
                && (
                    <div
                        className={`header__burger ${isOpened ? 'header__burger_opened' : ''}`}
                        onClick={openPopup}
                    />
                )}
            {
                !isLanding
                    ? <Navigation visible={isOpened} onClose={closePopup} />
                    : (
                        <nav className="header__auth">
                            <ul className="header__auth-items">
                                <li>
                                    <Link
                                        className="header__auth-item"
                                        to="/signup"
                                    >
                                        Регистрация
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        className="header__auth-item header__auth-item_highlighted"
                                        to="/signin"
                                    >
                                        Войти
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    )
            }
        </header>
    );
};
