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
                <p>Goal setting is the process of designing your goals in a way in which you can better achieve them and measure your progress in them.</p>
                <p>This specific guid deals with setting SMART Goals, Smart goals are:</p>
                <ul>
                    <li><b>Specific.</b> What will be accomplished? What actions will you take?</li>
                    <li><b>Measureable.</b> What data will measure the goal? (How much? How well?)</li>
                    <li><b>Attainable.</b> Is the goal doable? Do you have the necessary skills and resources?</li>
                    <li><b>Relevant.</b> How does the goal align with broader goals? Why is the result important?</li>
                    <li><b>Time Based.</b> What is the time frame for accomplishing the goal?</li>
                </ul>
                <p>For more information on goal setting practices, <a href="#">James Clear offers a great guide</a></p>
                <form>
                    <div className="form-group">
                        <label for="formGroupExampleInput"><h4>What is the goal you are trying to achieve?</h4></label>
                        <textarea type="text" className="form-control" id="formGroupExampleInput" placeholder="Example input" />
                    </div>

                    <div className="form-group">
                        <label for="formGroupExampleInput2"><h4>Is your goal attainable within your time constraints?</h4></label>
                        <textarea type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2"><h4>What specific behaviors/habits do you plan on changing to achieve your goal</h4></label>
                        <textarea type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2"><h4>When do you hope to achieve this goal by?</h4></label>
                        <input type="text" className="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                    </div>
                    <button type="submit" className="btn btn-primary">Create Goal</button>
                </form>
            </div>
        
        );
    }
}

export default GoalForm;