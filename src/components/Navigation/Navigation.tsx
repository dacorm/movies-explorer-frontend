import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';

interface NavigationProps {
    visible: boolean;
    onClose: () => void;
}
export const Navigation: React.FC<NavigationProps> = ({ visible, onClose }) => {
    const makeLinkActive = (navData: Record<string, boolean>) => (navData.isActive
        ? 'navigation__item navigation__item_active'
        : 'navigation__item');

    const handleOverlayClick = (e: React.MouseEvent) => {
        if ((e.target as HTMLElement).classList.contains('navigation_visible')) {
            onClose();
        }
    };

    return (
        <div className={`navigation ${visible && 'navigation_visible'}`} onClick={handleOverlayClick}>
            <nav className={`navigation__wrapper ${visible && 'navigation__wrapper_visible'}`}>
                <ul className="navigation__items">
                    <li className="navigation__item navigation__item_mobile">
                        <NavLink className={makeLinkActive} to="/" onClick={onClose}>
                            Главная
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink className={makeLinkActive} to="/movies" onClick={onClose}>
                            Фильмы
                        </NavLink>
                    </li>
                    <li className="navigation__item">
                        <NavLink className={makeLinkActive} to="/saved-movies" onClick={onClose}>
                            Сохраненные фильмы
                        </NavLink>
                    </li>
                </ul>
                <Link className="navigation__item navigation__item_icon" to="/profile" onClick={onClose}>
                    Аккаунт
                    <div className="navigation__item-icon navigation__item-icon_profile" />
                </Link>
            </nav>
        </div>
    );
};
