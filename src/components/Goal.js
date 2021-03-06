import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Goal extends Component {    
        constructor(props) {
            super(props);
            this.state = {
                displayGoal: false,
            };
        }

    toggleViewGoal = () => {
        this.setState({displayGoal: !this.state.displayGoal});
    }
    
    render(){
        const { goal: {name, timeFrame, id, description, displayGoal} } = this.props;
        return (
            <div className="goal">
                <div className="goal-header">
                    <div className="goal-priority">{id}</div>
                    <h3>{name}</h3>
                    <p>{timeFrame}</p>
                    <i className={!this.state.displayGoal ? 'fa fa-plus' : 'fa fa-minus' } onClick={this.toggleViewGoal}></i>
                </div>
                <div className="goal-body" style={ this.state.displayGoal ? { display:'block'} : {display : 'none'} }>
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
}

export default Goal;