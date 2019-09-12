import React from 'react';
import Goal from './Goal';


function generateGoals(arr){
    return arr.map(goal => {
        return <Goal goal={goal} />
    })
}

let goals = [
    {id: 1, name: "Get that bread", timeFrame: "January 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", displayGoal: false},
    {id: 2, name: "Meet a nice lady", timeFrame: "January 2021", priority: "medium", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", displayGoal: false},
    {id: 3, name: "Get swole", timeFrame: "June 2022", priority: "low", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", displayGoal: false},
    {id: 4, name: "Travel More", timeFrame: "May 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", displayGoal: false},
    {id: 5, name: "Purple Belt BJJ", timeFrame: "May 2020", priority: "high", description: "asdfsdf asd asdf asdf asdf asdfasdfasdf", displayGoal: false},
]

const Goals = () => {
    return (
        <div className="goals">
            {generateGoals(goals)}
        </div>
    );
}

export default Goals;