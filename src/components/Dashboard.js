import React, { Component } from 'react';
import Goals from './Goals';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import '../App.css';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }

    render() {
        return (
            <div className="dashboard">
                <div class="dashboard-quote">
                    <h1 className="text-center"><i className="fa fa-quote-left"></i><i>The happiness of your life depends upon the quality of your thoughts.</i> <i className="fa fa-quote-right"></i></h1>
                    <h4 className="text-right">Marcus Aureileus</h4>

                </div>
                <Goals></Goals>
            </div>
        );
    }
}

export default Dashboard;