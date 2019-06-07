import React from 'react';

const Characters = props => {
    return (
        <div className="">
            <div>{props.starWarsChars[props.index].name}</div>
        </div>
    );
};