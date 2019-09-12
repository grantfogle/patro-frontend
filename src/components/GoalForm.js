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
            <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">Example label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Another label</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input" />
                </div>
                <button type="submit">Create Goal</button>
            </form>
        
    );
}

export default GoalForm;