import React from 'react';

const ShowGoal = ({goal}) => {
    let {name, timeFrame, id} = goal;
    return (
        <h1>{name}</h1>
    );

}

export default ShowGoal;