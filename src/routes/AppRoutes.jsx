import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from '../pages/LoginPage';
import MainPage from '../pages/MainPage';
import AuthModel from '../models/AuthModel';

const AppRoutes = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!AuthModel.getCurrentUser());

    const handleLoginSuccess = (data) => {
        AuthModel.setCurrentUser(data);
        setIsAuthenticated(true);  
    };

    useEffect(() => {
        const checkAuthentication = () => {
            setIsAuthenticated(!!AuthModel.getCurrentUser());
        };

        window.addEventListener("storage", checkAuthentication);

        checkAuthentication();  

        return () => {
            window.removeEventListener("storage", checkAuthentication);
        };
    }, []);

    return (
        <Router>
            <Routes>
                {/* Login Route */}
                <Route
                    path="/login"
                    element={isAuthenticated ? <Navigate to="/dashboard" replace /> : <LoginPage onLoginSuccess={handleLoginSuccess} />}
                />

                {/* Dashboard Route */}
                <Route
                    path="/dashboard"
                    element={isAuthenticated ? <MainPage /> : <Navigate to="/login" replace />}
                />

                {/* Default Route */}
                <Route
                    path="*"
                    element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"} replace />}
                />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
