export const ADD_GOAL = 'ADD_GOAL';
export function addGoal(id, name, timeFrame) {
    return ({
        type: ADD_GOAL,
        id: id,
        name: name,
        timeFrame: timeFrame,
    })
}