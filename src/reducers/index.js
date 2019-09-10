import { combineReducers } from 'redux';

// initialState = stuff: []

function goals(state = [], action) {
    switch (action.type) {
        case 'ADD_GOAL':
            return {
                id: action.id,
                name: action.name,
                timeFrame: action.timeFrame,
                complete: false
            }
        default:
            return state;
    }
}

export default combineReducers({
    goals,
})