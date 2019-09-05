import React from 'react';
import Goal from './Goal';


function generateGoals(arr){
    return arr.map(goal => {
        return <Goal goal={goal} />
    })
}

let goals = [
    {name: "goal1", timeFrame: "January 1, 2020"},
    {name: "goal2", timeFrame: "January 1, 2021"},
    {name: "goal3", timeFrame: "June 1, 2022"},
    {name: "goal4", timeFrame: "May 1, 2020"},
]

const Goals = () => {
    return (
        <div className="goals">
            {generateGoals(goals)}
        </div>
    );
}

export default Goals;