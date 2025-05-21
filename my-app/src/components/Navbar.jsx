import React from "react";
import { useState } from "react";


const Navbar = () => {
    const getPreferredDark = () => window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    const [darkMode, setDarkMode] = useState(getPreferredDark());

    React.useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode((prev) => !prev);
    };

    return (
        <>
            <div className="dark:bg-black bg-white dark:text-white py-4 fixed top-0 w-full shadow-md z-10">
                <div className="container mx-auto max-w-8/10 px-4 flex justify-between items-center">
                    <h1 className="text-lg font-bold">poinsenDecks</h1>
                    <div>
                        <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded">
                            {darkMode ? "Light Mode" : "Dark Mode"}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
export { Navbar };
