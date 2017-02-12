//Should have SET_ACTIVE_DECK, SET_RECTS


function planeData(state = {deck: 1}, action) {
    switch (action.type) {
        case 'SET_ACTIVE_DECK':
            return Object.assign({}, state, {deck: action.deck});
        case 'SET_RECTS':
            return Object.assign({}, state, {rects: action.rects});
        default:
            return state
    }
}


// State looks like:
// {
//     deck: 1,
//     rects: [{position: [28, 152], type: 1, size: 2}]
// }
// Если для данного типа (индекса) есть иконка, то она вставляется, иначе красный квадрат

export default planeData