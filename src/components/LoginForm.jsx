import React, { useState } from "react";
import { InputField } from "./shared/InputField";
import { Button } from "./shared/Button";
import Google from "../assets/googleIcon.png";
import Facebook from "../assets/fbIcon.png";
import AuthController from "../controllers/AuthController";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const LoginForm = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (username !== "emilys") {
            setErrorMessage("Invalid username. The username must be 'emilys'.");
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage("Invalid email format. Please enter a valid email.");
            return;
        }

        if (password.length < 8) {
            setErrorMessage("Password must be at least 8 characters long.");
            return;
        }

        setIsLoading(true);

        const result = await AuthController.login(username, password, email);

        setIsLoading(false);

        if (result.success) {
            console.log("Login successful:", result.data);
            alert("Login successful!")
            toast.success("Login successful!");
            onLoginSuccess(result.data);
            navigate("/dashboard");
        } else {
            toast.error(result.message || "Login failed. Please try again.");
            setErrorMessage(result.message);
        }
    };

    return (
        <div className="w-full max-w-md space-y-6 p-6">
            <ToastContainer />
            
            <div className="text-left space-y-2">
                <h1 className="text-2xl font-semibold">Welcome to</h1>
                <h2 className="text-2xl font-bold text-[#6358DC]">Unstop</h2>
            </div>

            <div className="space-y-4">
                <Button
                    variant="outline"
                    fullWidth
                    icon={
                        <img
                            src={Google}
                            alt="Google"
                            width={20}
                            height={20}
                            className="inline-block"
                        />
                    }
                >
                    Login with Google
                </Button>

                <Button
                    variant="outline"
                    fullWidth
                    icon={
                        <img
                            src={Facebook}
                            alt="Facebook"
                            width={20}
                            height={20}
                            className="inline-block"
                        />
                    }
                >
                    Login with Facebook
                </Button>
            </div>

            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
            </div>

            <form className="space-y-4" onSubmit={handleLogin}>
                <InputField
                    label="User name"
                    placeholder="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />

                <InputField
                    label="Email"
                    placeholder="username@gmail.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <InputField
                    label="Password"
                    placeholder="••••••••••"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    showPassword={showPassword}
                    onTogglePassword={() => setShowPassword(!showPassword)}
                />

                <div className="flex items-center justify-between">
                    <label className="flex items-center gap-2">
                        <input
                            type="checkbox"
                            className="rounded border-gray-300 text-[#6B4EFF] focus:ring-[#6B4EFF]"
                        />
                        <span className="text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-[#6B4EFF] hover:underline">
                        Forgot Password?
                    </a>
                </div>

                {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}

                <Button fullWidth type="submit" disabled={isLoading}>
                    {isLoading ? "Logging in..." : "Login"}
                </Button>

                <div className="flex items-center justify-center p-2">
                    <p>
                        Don&#39;t have an account?
                        <span className="text-blue-600 cursor-pointer"> Register</span>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
