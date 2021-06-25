import React from 'react';

const View = (props) => {
    return (
        <div>
            <h3>{props.passedName}</h3>
            <h3>{props.age}</h3>
            <h3>{props.hobbies}</h3>
        </div>

    )
}

export default View