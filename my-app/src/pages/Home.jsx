import { useNavigate } from "react-router-dom";
export function Home() {
    const navigate = useNavigate();

    return (
        <div className="container mx-auto mt-16">
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
        </div>
    );
}
