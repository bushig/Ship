const setPlaneRects = (rects) => {
    return {
        type: "SET_RECTS",
        rects: rects
    }
};

const setActiveDeck = (deck) => {
    return {
        type: "SET_ACTIVE_DECK",
        deck: deck
    }
};
export {setPlaneRects, setActiveDeck};