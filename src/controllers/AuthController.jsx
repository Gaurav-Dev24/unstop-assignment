import React from 'react';

const AuthController = {
    logout: () => {
        return new Promise((resolve) => {
            // Add logout logic here (e.g., clear tokens, session, etc.)
            localStorage.removeItem('user');
            resolve();
        });
    },
};

export default AuthController;
