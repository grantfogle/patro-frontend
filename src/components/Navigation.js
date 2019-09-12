import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Navigation = () => {
    return (
        <div className='navigation'>
            
            <p>Patro Logo</p>
            <ul>
                <Link to='/goals' style={{ textDecoration: 'none' }}>
                    <li>View Goals</li>
                </Link>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    <li>Track Progress</li>
                </Link>
                <li>Add a Goal</li>
            </ul>
            {/* how to write better goals: https://jamesclear.com/goal-setting */}
            {/* User  */}
            <p>User</p>
            
        </div>
    );
}

export default Navigation;