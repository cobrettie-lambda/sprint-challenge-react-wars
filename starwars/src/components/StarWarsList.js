import React from 'react';

import Characters from './Characters';

const StarWarsList = props => {
    return (
        <ul className="list-container">
            {props.starwarsChars.map((char, i) => {
                return (
                    <Characters starwarsChars={props.starwarsChars} index={i} />
                );
            })}
        </ul>
    );
};

export default StarWarsList;