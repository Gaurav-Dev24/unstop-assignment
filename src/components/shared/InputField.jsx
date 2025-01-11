import React, { forwardRef } from "react";
import PropTypes from "prop-types"; 
import { cn } from "../../utils/cn"; 
import { Eye, EyeOff } from "lucide-react"; 
import userIcon from "../../assets/userIcon.png"
import mailIcon from "../../assets/mailIcon.png"
import keyIcon from "../../assets/keyIcon.png"

const InputField = forwardRef(
    ({ label, error, className, type, showPassword, onTogglePassword, ...props }, ref) => {
        const isPassword = type === "password";

        return (
            <div className="space-y-0">
                <div className="relative flex items-center bg-gray-50 rounded-lg">
                    {/* Icon based on input type */}
                    <div className="absolute left-3">
                        {type === "text" && <img src={userIcon} alt="user" /> }
                        {type === "email" && <img src={mailIcon} alt="user" />}
                        {type === "password" && <img src={keyIcon} alt="user" />}
                    </div>

                    {/* Label and Input field */}
                    <div className="flex flex-col w-full">
                        <label className="text-xs text-left text-gray-500 pt-2 px-10">{label}</label>
                        <input
                            ref={ref}
                            type={showPassword ? "text" : type}
                            className={cn(
                                "w-full bg-transparent pl-10 pr-3 pb-2 text-sm text-black-600 font-bold",
                                "focus:outline-none focus:ring-2 focus:ring-gray-50 rounded-sm",
                                error ? "ring-2 ring-red-500" : "",
                                className
                            )}
                            {...props}
                        />
                    </div>

                    {/* Password visibility toggle */}
                    {isPassword && (
                        <button
                            type="button"
                            onClick={onTogglePassword}
                            className="absolute right-3 text-black-600 hover:text-gray-600"
                        >
                            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                        </button>
                    )}
                </div>

                {/* Error message */}
                {error && <p className="text-xs text-red-500">{error}</p>}
            </div>
        );
    }
);

// Set display name for the InputField component
InputField.displayName = "InputField";

// PropTypes validation for the props
InputField.propTypes = {
    label: PropTypes.string.isRequired,
    error: PropTypes.string,
    className: PropTypes.string,
    type: PropTypes.oneOf(["text", "email", "password"]).isRequired,
    showPassword: PropTypes.bool,
    onTogglePassword: PropTypes.func,
};

export  {InputField};


