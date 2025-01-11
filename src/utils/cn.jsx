import clsx from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string.
 * Merges Tailwind classes intelligently to avoid conflicts.
 *
 * @param  {...(string|undefined|boolean|object)} inputs - List of class values
 * @returns {string} - Combined and merged class names
 */
export function cn(...inputs) {
    return twMerge(clsx(inputs));
}
