import React from "react";
import { LoginForm } from "../components/LoginForm";
import loginImage from "../assets/loginImgae.png"

const LoginPage = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex font-poppin">
            {/* Page Content */}
            <div className="flex-1 flex items-center justify-center p-4 sm:p-6 lg:p-8">
                <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Illustration */}
                    <div className="hidden lg:flex justify-center">
                        <div className="relative w-full max-w-md">
                            <img
                                src={loginImage}
                                alt="Login illustration"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>

                    {/* Right Side - Login Form */}
                    <div className="w-full flex justify-center">
                        <div className="w-full max-w-md bg-white rounded-lg shadow-sm border p-2">
                            <LoginForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
