import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnterForm } from '../../components/EnterForm/EnterForm';
import { userData } from '../../utils/MainApi';

interface LoginPageProps {
    onSubmit: (data: Partial<userData>) => Promise<void>
    isLoggedIn: boolean;
}

export const Login: React.FC<LoginPageProps> = ({ onSubmit, isLoggedIn }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/movies');
        }
    }, [isLoggedIn]);

    return (<EnterForm isRegister={false} onSubmit={onSubmit} />);
};
