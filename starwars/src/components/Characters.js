import React from 'react';

const Characters = props => {
    return (
        <div className="character-container">
            <div className="character-font">{props.starwarsChars[props.index].name}</div>
        </div>
    );
};

export default Characters;