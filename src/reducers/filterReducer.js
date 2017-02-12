//Should have SET_FILTER_GROUP, SET_FILTER_TEXT, SET_FILTER_RANGE
//For now use only have one range in visibilityRange

function filter(state = {range:[1, 700], text:""}, action) {
    switch (action.type) {
        case 'SET_FILTER_TEXT':
            return Object.assign({}, state, {text: action.text});
        case 'SET_FILTER_RANGE':
            return Object.assign({}, state, {range: action.range});
        // case 'SET_FILTER_THEME':
        //     return Object.assign({}, state, {range: action.theme});
        default:
            return state
    }
}


// State looks like:
// {
//     text: 'Огнетуш',
//     range: [26, 291],
//     theme: 'Средства тушения'
// }

export default filter