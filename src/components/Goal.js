import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Goal = ({goal}) => {
    let {name, timeFrame, id} = goal;

    return (
        <Link to={`/goal/${id}`} style={{ textDecoration: 'none' }}>
            <div className="goal">
                <div className="goal-header">
                    <h3>{name}</h3>
                    {/* show more content icon, date */}
                </div>
                {/* <div>
                    hidden content, sub goals, smart measurements, complete goal and edit goal, so when you open the goal a
                    a hover edit button will shop up

                    <td>
                    <ul>
                        <li>Dynamic sub goals</li>
                        <li>Dynamic sub goals</li>
                        <li>Dynamic sub goals</li>
                    </ul>
                </td>
                <p>{timeFrame}</p>
                <p>Habits/Actions</p> */}
                
                
            </div>
        </Link>
    );
}

export default Goal;