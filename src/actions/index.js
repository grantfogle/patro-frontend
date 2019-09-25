export const ADD_GOAL = 'ADD_GOAL';
export function addGoal({id, name, timeFrame, attainability, habits, priority, description}) {
    return ({
        type: ADD_GOAL,
        goal: {
            id: id,
            name: name,
            timeFrame: timeFrame,
            priority: priority,
            description: description,
            attainability: attainability,
            habits: habits,
        }
    })
}

export const GET_GOALS = 'GET_GOALS';
export function getGoals() {
    const mockGoals = [
        {id: 1, name: "Get that bread", timeFrame: "January 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", attainability: "possible", habits: "brush teeth"},
        {id: 2, name: "Meet a nice lady", timeFrame: "January 2021", priority: "medium", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", attainability: "possible", habits: "brush teeth"},
        {id: 3, name: "Get swole", timeFrame: "June 2022", priority: "low", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", attainability: "possible", habits: "brush teeth"},
        {id: 4, name: "Travel More", timeFrame: "May 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", attainability: "possible", habits: "brush teeth"},
        {id: 5, name: "Purple Belt BJJ", timeFrame: "May 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", attainability: "possible", habits: "brush teeth"},
    ]
    return ({
        type: GET_GOALS,
        goals: mockGoals,
    })
}