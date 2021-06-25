import React from 'react';

const Input = (props) => {
    return(
        <div>
            <div>
                <input value={props.name} onChange={e => props.setName(e.target.value)} type='text'/>
                <input value={props.age} onChange={e => props.setAge(e.target.value)} type='text'/>
                <input value={props.hobbies} onChange={e => props.setHobbies(e.target.value)} type='text'/>
            </div>
        </div>
    )
}

export default Input;