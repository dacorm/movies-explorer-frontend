import React from 'react';
import { Header } from '../../components/Header/Header';
import { Profile } from '../../components/Profile/Profile';

export interface ProfilePageProps {
    onLogout: () => void;
}

export const ProfileEdit: React.FC<ProfilePageProps> = ({ onLogout }) => (
    <>
        <Header />
        <Profile onLogout={onLogout} />
    </>
);
