import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Goal = ({goal}) => {
    let {name, timeFrame, id, description} = goal;
    let open = false;
    return (
        // <Link to={`/goal/${id}`} style={{ textDecoration: 'none' }}>
            <div className="goal">
                <div className="goal-header">
                    <div className="goal-priority">{id}</div>
                    <h3>{name}</h3>
                    <p>{timeFrame}</p>
                    <i className="fa fa-plus"></i>
                    {/* show more content icon, date */}

                </div>
                <div className="goal-body" style={ open ? { display:'block'} : {display : 'none'} }>
                    <p>{description}</p>
                    
                    <p>{timeFrame}</p>
                </div>

                {/* <div className="goal-body">
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
        
    );
}

export default Goal;