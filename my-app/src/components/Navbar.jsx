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
                <div className="container mx-auto max-w-7/10 px-4 flex justify-between items-center">
                    <h1 className="text-lg font-bold">poinsenDecks</h1>
                    <div className="flex items-center gap-3">
                        <ul>
                            <li className="inline-block mr-4">
                                <a href="/" className="text-gray-800 dark:text-gray-200 hover:underline">Home</a>
                            </li>
                            <li className="inline-block mr-4">
                                <a href="/decks" className="text-gray-800 dark:text-gray-200 hover:underline">Decks</a>
                            </li>
                        </ul>
                        <button onClick={toggleDarkMode} className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 aspect-square h-[2.2rem] rounded-full">
                            {darkMode ?  <i class="fa-regular fa-sun fa-xl"></i> : <i className="fa-regular fa-moon fa-xl"></i>}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export { Navbar };
