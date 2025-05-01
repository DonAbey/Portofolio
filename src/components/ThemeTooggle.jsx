import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    //to save states of dark and light mode
    const [isDarkMode, setIsDarkMode] = useState(false);

    //useEffect to get the theme preference from local storage
    useEffect(() => {
        const storedTheme = localStorage.getItem("theme")
        if (storedTheme === "dark"){
            setIsDarkMode(true)
            document.documentElement.classList.add("dark");
        }else{
            localStorage.setItem("theme","light")
            setIsDarkMode(false)
        }
    }, []);

    //function to toggle dark and night mode
    const toggleTheme = () => {
        if(isDarkMode){
            //refers to the root element of html
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
            localStorage.setItem("theme", "light");
        }else{
            //basically adds a class to html: <html class="dark">
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark")
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme}
        className={cn(
            "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outlin-hidden"
        )}
        > 
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />
                ) : (
                <Moon className="h-9 w-9 text-blue-900"/>
                )}
         </button> 
    ); 
}
