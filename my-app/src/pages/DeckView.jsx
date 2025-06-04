import React from "react";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import fetchCardByName from "../fetchCards";

const DeckView = () => {
    const params = useParams();
    const index = params.index || params.deckId;

    const decks = JSON.parse(localStorage.getItem("decks")) || [];
    const deck = decks[parseInt(index, 10)];

    const [commanderCard, setCommanderCard] = useState(null);
    useEffect(() => {
        let isMounted = true;
        const fetchCommanderCard = async () => {
            if (deck && deck.commander) {
                try {
                    const card = await fetchCardByName(deck.commander);
                    if (isMounted && card) {
                        setCommanderCard(card);
                    }
                } catch {
                    if (isMounted) setCommanderCard(null);
                }
            }
        };
        fetchCommanderCard();
        return () => { isMounted = false; };
    }, [deck]);

    if (!deck) {
        return <div className="container max-w-7/10 mx-auto mt-16">Deck not found.</div>;
    }

    return (
        <div className="container max-w-7/10 mx-auto mt-16">
            <form action="">
                <input type="text" name="addCard" id="addCard" className="w-9/10 pl-2 border h-10 dark:bg-gray-600 rounded-l" placeholder="add card like 'sol ring'" />
                <button
                    type="submit"
                    className="bg-green-500 text-white px-4 py-2 rounded-r hover:bg-green-600 mr-2"
                    onClick={(e) => {
                        e.preventDefault();
                        const input = document.getElementById("addCard");
                        const cardName = input.value.trim();
                        if (!cardName) return;

                        fetchCardByName(cardName).then((card) => {
                            if (!card) return;
                            const updatedDecks = [...decks];
                            if (!updatedDecks[index].cards) updatedDecks[index].cards = [];
                            // Check if card already exists (by name)
                            const existingCard = updatedDecks[index].cards.find(c => c.name === card.name);
                            if (existingCard) {
                                existingCard.amount = 1;
                            } else {
                                card.amount = 1;
                                updatedDecks[index].cards.push(card);
                            }
                            localStorage.setItem("decks", JSON.stringify(updatedDecks));
                            input.value = "";
                            if (!deck.cards) deck.cards = [];
                            const deckCard = deck.cards.find(c => c.name === card.name);
                            if (deckCard) {
                                deckCard.amount = 1;
                            } else {
                                card.amount = 1;
                                deck.cards.push(card);
                            }
                            setCommanderCard({ ...commanderCard });
                        });
                    }}
                >
                    Add Card
                </button>
            </form>
            {commanderCard && (
                <>
                    <div className="commander-card">
                        <h3>Commander:</h3>
                        <img src={commanderCard.image_uris?.normal} className="w-1/5 rounded-2xl" alt={commanderCard.name} />
                    </div>
                    <div className="deck-cards grid grid-cols-5 gap-4 mt-4">
                        {deck.cards && deck.cards.length > 0 ? (
                            deck.cards.map((card, idx) => (
                                <div key={idx} className="deck-card rounded-2xl w-full relative">
                                    <img src={card.image_uris?.normal} className="w-full rounded-2xl" alt={card.name} />
                                    <div className="flex justify-between items-center w-4/5 mx-auto mt-2">
                                        <div className="absolute top-[10%] right-0 flex flex-col gap-1">
                                            <button
                                                className="bg-[#FFFFFF20] text-white flex justify-center items-center aspect-square w-[2rem] rounded-l hover:bg-green-600 border border-r-0"
                                                onClick={() => {
                                                    const updatedDecks = [...decks];
                                                    updatedDecks[index].cards[idx].amount += 1;
                                                    localStorage.setItem("decks", JSON.stringify(updatedDecks));
                                                    if (deck.cards) {
                                                        deck.cards[idx].amount += 1;
                                                    }
                                                    setCommanderCard({ ...commanderCard });
                                                }}
                                            >
                                                <i class="fa-solid fa-plus"></i>
                                            </button>
                                            <button
                                                className="bg-[#FFFFFF20] border text-white flex justify-center items-center aspect-square w-[2rem] rounded-l hover:bg-red-600 border-r-0"
                                                onClick={() => {
                                                    const updatedDecks = [...decks];
                                                    if (updatedDecks[index].cards[idx].amount > 1) {
                                                        updatedDecks[index].cards[idx].amount -= 1;
                                                    } else {
                                                        updatedDecks[index].cards.splice(idx, 1);
                                                    }
                                                    localStorage.setItem("decks", JSON.stringify(updatedDecks));
                                                    if (deck.cards) {
                                                        if (deck.cards[idx].amount > 1) {
                                                            deck.cards[idx].amount -= 1;
                                                        } else {
                                                            deck.cards.splice(idx, 1);
                                                        }
                                                    }
                                                    setCommanderCard({ ...commanderCard });
                                                }}
                                            >
                                                <i class="fa-solid fa-minus"></i>
                                            </button>
                                            
                                        </div>
                                    </div>
                                    <p className="text-center truncate">{card.name}</p>
                                    <p className="text-center absolute top-0 left-0 bg-gray-700 aspect-square h-[1.5rem] rounded rounded-tl-2xl text-sm text-center">{card.amount}</p>
                                </div>
                            ))
                        ) : (
                            <p>No cards in this deck yet.</p>
                        )}
                    </div>
                </>
            )}
        </div>
    );
};

export { DeckView };