import React, { memo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import './Header.css';

export const Header = memo(() => {
    const location = useLocation().pathname;
    const isLanding = location === '/';

    const [isOpened, setOpened] = useState(false);

    const togglePopup = () => {
        setOpened((state) => !state);
        if (isOpened) {
            document.body.style.overflow = 'auto';
        } else {
            document.body.style.overflow = 'hidden';
        }
    };

    const closePopup = () => {
        setOpened(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <header className={`header ${isLanding ? 'header_landing' : ''}`}>
            <Link className="header__logo" to="/" title="На главную" />
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
            {!isLanding
                && (
                    <div className="burger" onClick={togglePopup}>
                        <span
                            className={`burger__line burger__line_first ${isOpened ? 'burger__line_first_opened' : ''}`}
                        />
                        <span
                            className={`burger__line burger__line_second ${isOpened ? 'burger__line_second_opened' : ''}`}
                        />
                        <span
                            className={`burger__line burger__line_third ${isOpened ? 'burger__line_third_opened' : ''}`}
                        />
                    </div>
                )}
        </header>
    );
});
