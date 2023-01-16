import React from 'react';
import { Header } from '../../components/Header/Header';
import { Profile } from '../../components/Profile/Profile';
import { userData } from '../../utils/MainApi';

export interface ProfilePageProps {
    onLogout: () => void;
    onSubmit: (values: Partial<userData>) => Promise<userData>
}

export const ProfileEdit: React.FC<ProfilePageProps> = ({ onLogout, onSubmit }) => (
    <>
        <Header />
        <Profile onLogout={onLogout} onSubmit={onSubmit} />
    </>
);
