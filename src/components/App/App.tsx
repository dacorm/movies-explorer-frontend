import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from '../../pages/Landing';

const MoviesPage = React.lazy(() => import('../../pages/Movies'));
const ProfilePage = React.lazy(() => import('../../pages/ProfileEdit'));

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="movies"
                    element={(
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <MoviesPage />
                        </Suspense>
                    )}
                />
                <Route
                    path="profile"
                    element={(
                        <Suspense fallback={<div>Идёт загрузка...</div>}>
                            <ProfilePage />
                        </Suspense>
                    )}
                />
            </Routes>
        </div>
    );
}

export default App;
