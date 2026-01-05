import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils.js";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");

        // Default to DARK if nothing is stored yet
        const theme = storedTheme ?? "dark";

        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            // eslint-disable-next-line react-hooks/set-state-in-effect
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }

        // Save the default so next visits are consistent
        if (!storedTheme) {
            localStorage.setItem("theme", "dark");
        }
    }, []);


    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme} 
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
        >
            {isDarkMode ? ( 
                <Sun className="h-6 w-6 text-yellow-300"/> 
            ) : (
                <Moon className="h-6 w-6 text-blue-900"/>
            )}
        </button>
    );
}