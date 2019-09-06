import React from 'react';
import Goal from './Goal';


function generateGoals(arr){
    return arr.map(goal => {
        return <Goal goal={goal} />
    })
}

let goals = [
    {id: 1, name: "goal1", timeFrame: "January 1, 2020"},
    {id: 2, name: "goal2", timeFrame: "January 1, 2021"},
    {id: 3, name: "goal3", timeFrame: "June 1, 2022"},
    {id: 4, name: "goal4", timeFrame: "May 1, 2020"},
]

const Goals = () => {
    return (
        <div className="goals">
            {generateGoals(goals)}
        </div>
    );
}

export default Goals;