import React from 'react';

const Characters = props => {
    return (
        <div className="">
            <div>{props.starwarsChars[props.index].name}</div>
        </div>
    );
};

export default Characters;