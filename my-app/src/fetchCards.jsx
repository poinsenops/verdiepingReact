const fetchCardByName = async (name) => {
    const response = await fetch(`https://api.scryfall.com/cards/named?fuzzy=${encodeURIComponent(name)}`);
    if (!response.ok) {
        throw new Error('Card not found');
    }
    return response.json();
};
export default fetchCardByName;