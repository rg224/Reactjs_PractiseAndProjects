import React from 'react';
import Radium from 'radium';

import './Person.css';

const person = (props) => {
    // in case of key-frames or media queries, it is important to wrap your application with StyleRoot component in this case Component: person in App component
    const style = {
        '@media (min-width: 500px)': {
                width: '450px'
        }
    };

    return (
        <div className="Person" style={style}>
            <p onClick={props.click} >
                I'm {props.name} and I am {props.age} years old!
            </p>
            <p>
                {props.children}
            </p>
            <input type="text" onChange={props.changed} value={props.name} />
        </div>
    )
}

export default Radium(person);