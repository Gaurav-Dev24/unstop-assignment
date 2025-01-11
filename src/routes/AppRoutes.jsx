import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import AuthModel from '../models/AuthModel'; // Assuming AuthModel is exported as default

const AppRoutes = () => {
    const isAuthenticated = !!AuthModel.getCurrentUser();

    return (
        <Router>
            <Routes>
                <Route
                    path="/login"
                    element={isAuthenticated ? <Navigate to="/" /> : <LoginPage />}
                />
                <Route
                    path="/"
                    element={isAuthenticated ? <MainPage /> : <Navigate to="/login" />}
                />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
