import React from 'react';

const Characters = props => {
    return (
        <div className="character-container">
            <div className="character-font">{props.starwarsChars[props.index].name}</div>
            <div className="character-font2">Height: {props.starwarsChars[props.index].height}</div>
            <div className="character-font2">Mass: {props.starwarsChars[props.index].mass}</div>
        </div>
    );
};

export default Characters;