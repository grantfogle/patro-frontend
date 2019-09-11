import React, { Component } from 'react';
import Goals from './Goals';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import '../App.css';

class Dashboard extends Component {
    render() {
        return (
            <>
                <div className="dashboard">
                    <h1>The happiness of your life depends upon the quality of your thoughts.</h1>
                    <Goals></Goals>
                </div>
            </>
        );
    }
}

export default Dashboard;