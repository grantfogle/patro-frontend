import React, { Component } from 'react';
import Goals from './Goals';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import '../App.css';

class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="dashboard">
                    <h1>Hey, Grant</h1>
                    <h4>September 5th, 2019</h4>
                    <p>You have _____ of goals. And are 40% to your goal of ...</p>
                    {/* <h5>Your current goals:</h5>
                    <ul>
                        <li>Lift weights till you get strong</li>
                        <li>Move out of the country</li>
                        <li>Lift weights till you get strong</li>
                    </ul> */}
                    <p> asdf</p>
                </div>
                <Goals></Goals>
            </>
        );
    }
}

export default Dashboard;