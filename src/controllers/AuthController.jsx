import AuthModel from "../models/AuthModel";

const AuthController = {
    logout: () => {
        return new Promise((resolve) => {
            AuthModel.logout();
            resolve();
        });
    },
    login: async (username, password, email) => {
        try {
            const response = await fetch("https://dummyjson.com/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                    email,
                    expiresInMins: 30,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                AuthModel.setCurrentUser(data);

                return { success: true, data };
            } else {
                return { success: false, message: data.message || "Login failed" };
            }
        } catch (error) {
            console.error("Error during login:", error);
            return { success: false, message: "An error occurred. Please try again." };
        }
    },
};

export default AuthController;
