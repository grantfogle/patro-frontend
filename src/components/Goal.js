import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Goal = ({goal}) => {
    let {name, timeFrame, id} = goal;

    return (
        <Link to={`/goal/${id}`} style={{ textDecoration: 'none' }}>
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
        </Link>
    );
}

export default Goal;