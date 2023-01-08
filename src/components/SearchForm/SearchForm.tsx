import React, { ChangeEvent, FormEvent } from 'react';
import './SearchForm.css';

export interface SearchFormProps {
    handleSubmit?: (e: FormEvent) => void;
    onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    value?: string;
    isValid?: boolean;
    error?: string;
    onCheckBoxChange?: (e: any) => void;
    checked?: boolean;
}

export const SearchForm: React.FC<SearchFormProps> = ({
    onCheckBoxChange, onChange, error, isValid, value, handleSubmit, checked,
}) => (
    <div className="search">
        <form className="search__input-container" onSubmit={handleSubmit} noValidate>
            <input className="search__input" placeholder="Фильм" onChange={onChange} value={value} required name="search" />
            <span className={`search__input-error ${isValid ? '' : 'search__input-error_active'}`}>{error}</span>
            <button className="search__button" type="submit">Поиск</button>
        </form>
        <div className="search__checkbox-container">
            <label className="search__checkbox">
                <input type="checkbox" name="checkbox" onChange={onCheckBoxChange} checked={checked} />
                <span className="search__checkbox-switcher" />
            </label>
            <p className="search__checkbox-text">Короткометражки</p>
        </div>
    </div>
);
