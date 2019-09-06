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
                    <li>Progress</li>
                </Link>
                <li>Add Goal</li>
            </ul>
            {/* User  */}
            <p>User</p>
        </div>
    );
}

export default Navigation;