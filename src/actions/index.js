export const ADD_GOAL = 'ADD_GOAL';
export function addGoal(id, name, timeFrame, description, attainability, habits, ) {
    return ({
        type: ADD_GOAL,
        id: id,
        name: name,
        goal: {
            timeFrame: timeFrame,
            description: description,
            attainability: attainability,
            habits: habits,
            complete: false,
        }
    })
}

export const GET_GOALS = 'GET_GOALS';
export function getGoals() {
    const mockGoals = [
        {id: 1, name: "Get that bread", timeFrame: "January 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", displayGoal: false},
        {id: 2, name: "Meet a nice lady", timeFrame: "January 2021", priority: "medium", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", displayGoal: false},
        {id: 3, name: "Get swole", timeFrame: "June 2022", priority: "low", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", displayGoal: false},
        {id: 4, name: "Travel More", timeFrame: "May 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", displayGoal: false},
        {id: 5, name: "Purple Belt BJJ", timeFrame: "May 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", displayGoal: false},
    ]
    return ({
        type: GET_GOALS,
        goals: mockGoals,
    })
}