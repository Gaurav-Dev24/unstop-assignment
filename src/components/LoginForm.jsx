import React, { useState } from "react";
import { InputField } from "./shared/InputField";
import { Button } from "./shared/Button";
import Google from "../assets/googleIcon.png"
import Facebook from "../assets/fbIcon.png"

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="w-full max-w-md space-y-6 p-6">
            {/* Header Section */}
            <div className="text-left space-y-2">
                <h1 className="text-2xl font-semibold">Welcome to</h1>
                <h2 className="text-2xl font-bold text-[#6358DC]">Unstop</h2>
            </div>

            {/* Social Login Buttons */}
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

            {/* Divider */}
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">OR</span>
                </div>
            </div>

            {/* Login Form */}
            <form className="space-y-4">
                {/* Username Field */}
                <InputField label="User name" placeholder="username" type="text" />

                {/* Email Field */}
                <InputField label="Email" placeholder="username@gmail.com" type="email" />

                {/* Password Field */}
                <InputField
                    label="Password"
                    placeholder="••••••••••"
                    type="password"
                    showPassword={showPassword}
                    onTogglePassword={() => setShowPassword(!showPassword)}
                />

                {/* Remember Me and Forgot Password */}
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

                {/* Login Button */}
                <Button fullWidth>Login</Button>

                {/* Captcha */}
                <div className="flex items-center justify-center p-2">
                    <p>Don&#39;t have an account?<span className="text-blue-600"> Register</span></p>
                </div>
            </form>
        </div>
    );
};

export default LoginForm;
