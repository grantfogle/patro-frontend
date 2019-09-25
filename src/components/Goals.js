import React from 'react';
import { connect } from 'react-redux'
import Goal from './Goal';


function generateGoals(arr){
    return arr.map(goal => {
        return <Goal goal={goal} />
    })
}

const Goals = ({goals}) => {
    return (
        <div className="goals">
            {generateGoals(goals[0])}
        </div>
    );
}

function mapStateToProps(state) {
  return {
    goals: state.goals,
  }
}

export default connect(mapStateToProps)(Goals)