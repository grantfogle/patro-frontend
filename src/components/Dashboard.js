import React, { Component } from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import '../App.css';

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboard">
                <h1>Your Current Goals</h1>
                <h4>September 5th, 2019</h4>
                <p>You have _____ of goals. And are 40% to your goal of ...</p>
                <h5>Your current goals:</h5>
                <ul>
                    <li>Lift weights till you get strong</li>
                    <li>Move out of the country</li>
                    <li>Lift weights till you get strong</li>
                </ul>
            </div>

        );
    }
}

export default Dashboard;