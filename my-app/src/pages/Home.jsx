import React from "react";
import { useNavigate } from "react-router-dom";
import { DeckCard } from "../components/deckCard.jsx";

function Home() {
    const navigate = useNavigate();

    // Retrieve decks from localStorage
    const decks = JSON.parse(localStorage.getItem("decks") || "[]");

    return (
        <div className="container max-w-7/10 mx-auto mt-16">
            <h1 className="text-2xl font-bold text-center mb-4">
                Welcome to poinsenDecks
            </h1>
            <p className="text-center mb-4">
                Your go-to place for creating and managing your mtg decks.
            </p>
            <div className="flex justify-center">
                <button
                    onClick={() => navigate("/newDeck")}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                >
                    Create a new deck
                </button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                {decks.length === 0 ? (
                    <div className="col-span-full text-center text-gray-500">
                        No decks built yet.
                    </div>
                ) : (
                    decks.map((deck, idx) => (
                        <DeckCard key={deck.id || idx} index={idx} />
                    ))
                )}
            </div>
        </div>
    );
}

export { Home };