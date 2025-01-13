class AuthModel {
    static getCurrentUser() {
        const user = localStorage.getItem("user");
        return user ? JSON.parse(user) : null;
    }

    static setCurrentUser(user) {
        if (user && typeof user === "object") {
            localStorage.setItem("user", JSON.stringify(user));
        } else {
            throw new Error("Invalid user object");
        }
    }

    static logout() {
        localStorage.removeItem("user");
    }

    static isAuthenticated() {
        return !!this.getCurrentUser();
    }
}

export default AuthModel;
