import React from 'react';

const Goal = ({goal}) => {
    let {name, timeFrame} = goal;
    
    return (
        <div className="goal">
            <h4>{name}</h4>
            <ul>
                <li>Dynamic sub goals</li>
                <li>Dynamic sub goals</li>
                <li>Dynamic sub goals</li>
            </ul>
            <p>{timeFrame}</p>
            <p>Habits/Actions</p>
        </div>
    );
}

export default Goal;