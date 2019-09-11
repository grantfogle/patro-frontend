import React from 'react';
import Goal from './Goal';


function generateGoals(arr){
    return arr.map(goal => {
        return <Goal goal={goal} />
    })
}

let goals = [
    {id: 1, name: "Get that bread", timeFrame: "January 1, 2020"},
    {id: 2, name: "Meet a nice lady", timeFrame: "January 1, 2021"},
    {id: 3, name: "Get swole", timeFrame: "June 1, 2022"},
    {id: 4, name: "Travel More", timeFrame: "May 1, 2020"},
]

const Goals = () => {
    return (
        <div className="goals">
            
                {generateGoals(goals)}

            
        </div>
    );
}

export default Goals;