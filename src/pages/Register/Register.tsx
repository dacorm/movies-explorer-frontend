import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { EnterForm } from '../../components/EnterForm/EnterForm';
import { userData } from '../../utils/MainApi';

interface RegisterPageProps {
    onSubmit: (data: userData | Partial<userData>) => Promise<void>;
    isLoggedIn: boolean;
}

export const Register: React.FC<RegisterPageProps> = ({ onSubmit, isLoggedIn }) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            navigate('/movies');
        }
    }, [isLoggedIn]);

    return (<EnterForm isRegister onSubmit={onSubmit} />);
};
