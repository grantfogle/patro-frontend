import { combineReducers } from 'redux';

// initialState = stuff: []

let mockData = [{id: 1, name: "Get that bread", timeFrame: "January 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", attainability: 'Yea dude i got this', habits:'floss'},
        {id: 2, name: "Meet a nice lady", timeFrame: "January 2021", priority: "medium", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", attainability: 'Yea dude i got this', habits:'floss'},
        {id: 3, name: "Get swole", timeFrame: "June 2022", priority: "low", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", attainability: 'Yea dude i got this', habits:'floss'},
        {id: 4, name: "Travel More", timeFrame: "May 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", attainability: 'Yea dude i got this', habits:'floss'},
        {id: 5, name: "Purple Belt BJJ", timeFrame: "May 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", attainability: 'Yea dude i got this', habits:'floss'}];

function goals(state = [mockData], action) {
    switch (action.type) {
        case 'ADD_GOAL':
            return [...state, state.push(action.goal)];
        case 'GET_GOALS': 
            return action.goals;
        default:
            return state;
    }
}

export default combineReducers({
    goals,
})