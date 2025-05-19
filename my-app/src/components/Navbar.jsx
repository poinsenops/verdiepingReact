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
            <div className="shadow-md fixed w-full top-0 z-10 dark:bg-black dark:text-white bg-white text-black bg-opacity-80 backdrop-blur-sm max-w-[80%">
                <div className="container mx-auto max-w-8/10 px-4 py-3 flex justify-between items-center">
                    <div className="text-lg font-bold">
                        <h1>poinsenDecks</h1>
                    </div>
                    <div className="flex items-center space-x-4">
                        <ul className="flex space-x-6">
                            <li>
                                <a href="#home" className="hover:text-gray-200">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#decks" className="hover:text-gray-200">
                                    Decks
                                </a>
                            </li>
                            <li>
                                <a href="#newDeck" className="hover:text-gray-200">
                                    Make a new deck
                                </a>
                            </li>
                        </ul>
                        <button
                            onClick={toggleDarkMode}
                            className="ml-4 px-4 py-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-md hover:bg-gray-300 dark:hover:bg-gray-700"
                        >
                            {darkMode ? (
                                <i role="img" aria-label="Light mode" className="fa-regular fa-sun fa-solid"></i>
                            ) : (
                                <i role="img" aria-label="Dark mode" className="fa-regular fa-moon fa-solid"></i>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
export { Navbar };
