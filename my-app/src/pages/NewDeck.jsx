import React from "react";
import { useNavigate } from "react-router-dom";
import { DeckCard } from "../components/deckCard.jsx";
import { Footer } from "../components/Footer.jsx";

function NewDeck() {
    const navigate = useNavigate();

    // Retrieve decks from localStorage
    const decks = JSON.parse(localStorage.getItem("decks") || "[]");

    const [deckName, setDeckName] = React.useState("");
    const [commander, setCommander] = React.useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!deckName.trim()) return;

        const newDeck = {
            name: deckName,
            commander: commander,
            id: Date.now(),
        };

        const updatedDecks = [...decks, newDeck];
        localStorage.setItem("decks", JSON.stringify(updatedDecks));
        setDeckName("");
        setCommander("");
        navigate("/");
    };

    return (
        <div className="container max-w-7/10 mx-auto mt-16">
            <h1 className="text-2xl font-bold text-center mb-4">
                Create a New Deck
            </h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Deck Name"
                    className="border rounded p-2 mb-4 w-full"
                    value={deckName}
                    onChange={(e) => setDeckName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Commander"
                    className="border rounded p-2 mb-4 w-full"
                    value={commander}
                    onChange={(e) => setCommander(e.target.value)}
                />
                
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
                >
                    Save Deck
                </button>
            </form>
            <div className="flex justify-center mt-4">
                <button
                    onClick={() => navigate("/")}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Back to Home
                </button>
            </div>
        </div>
    );


}

export { NewDeck };