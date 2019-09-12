import React, { Component } from 'react';
import Goals from './Goals';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
// import '../App.css';

class GoalForm extends Component {    
        constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    
    render() {
        return (
            <div className="goal-form">
                <h1>Goal Setting</h1>
                <p></p>
                <form>
                    <div className="form-group">
                        <label for="formGroupExampleInput"><h3>What is the goal you are trying to achieve?</h3></label>
                        <input type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput2"><h3>Is your goal attainable within your time constraints?</h3></label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2"><h3>What specific behaviors/habits do you plan on changing to achieve your goal</h3></label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2"><h3>When do you hope to achieve this goal by?</h3></label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <button type="submit">Create Goal</button>
                </form>
            </div>
        
        );
    }
}

export default GoalForm;