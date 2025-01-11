const AuthModel = {
    getCurrentUser: () => {
        const userStr = localStorage.getItem('user');
        return userStr ? JSON.parse(userStr) : null;
    },

    setCurrentUser: (user) => {
        localStorage.setItem('user', JSON.stringify(user));
    },

    clearCurrentUser: () => {
        localStorage.removeItem('user');
    },
};

export default AuthModel;
