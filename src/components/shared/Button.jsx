import React from "react";
import PropTypes from "prop-types";
import { cn } from "../../utils/cn";

const Button = ({
    children,
    className,
    variant = "default",
    fullWidth = false,
    icon,
    ...props
}) => {
    return (
        <button
            className={cn(
                "flex items-center justify-center gap-2 px-4 py-2 rounded-md text-sm font-medium transition-colors",
                variant === "default" && "bg-[#6358DC] text-white hover:bg-[#6B4EFF]/90",
                variant === "outline" && "border border-gray-300 bg-white hover:bg-gray-50",
                fullWidth && "w-full",
                className
            )}
            {...props}
        >
            {icon && <span className="w-5 h-5">{icon}</span>}
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
    variant: PropTypes.oneOf(["default", "outline"]),
    fullWidth: PropTypes.bool,
    icon: PropTypes.node,
};

export { Button };
