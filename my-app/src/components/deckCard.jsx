import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchCardByName from "../fetchCards";

const DeckCard = ({ index }) => {
    const navigate = useNavigate();
    const [colorIdentity, setColorIdentity] = useState("");
    const handleClick = () => {
        navigate(`/deck/${index}`);
    };

    // Retrieve decks from localStorage
    const decks = JSON.parse(localStorage.getItem("decks") || "[]");
    const deck = decks[index];
    useEffect(() => {
        let isMounted = true;
        const fetchColorIdentity = async () => {
            if (deck && deck.commander) {
                try {
                    const card = await fetchCardByName(deck.commander);
                    if (isMounted && card && card.color_identity) {
                        setColorIdentity(card.color_identity.join(", "));
                    }
                } catch {
                    if (isMounted) setColorIdentity("Unknown");
                }
            }
        };
        fetchColorIdentity();
        return () => { isMounted = false; };
    }, [deck]);

    if (!deck) {
        return <div className="text-center text-gray-500">Deck not found</div>;
    }

    const handleDelete = () => {
        const updatedDecks = [...decks];
        updatedDecks.splice(index, 1);
        localStorage.setItem("decks", JSON.stringify(updatedDecks));
        window.location.reload(); // Optionally, you can use a state update or navigation instead of reload
    };

    return (
        <>
            <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 m-4">
                <h2 className="text-lg font-bold text-gray-800 dark:text-white">{deck.name}</h2>
                <p className="text-gray-600 dark:text-gray-400">{deck.commander}</p>
                <p className="text-gray-600 dark:text-gray-400">Cards: {deck.cards.length + 1}</p>
                <p className="text-gray-600 dark:text-gray-400">{colorIdentity}</p>
                <div className="flex gap-2 flex-wrap mt-4">
                    <button className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600" onClick={handleClick}>
                        View Deck
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={() => navigate(`/deck/${index}/edit`)}>
                        Edit Deck
                    </button>
                    <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleDelete}>
                        Delete Deck
                    </button>
                </div>
            </div>
        </>
    )
}

export { DeckCard };
