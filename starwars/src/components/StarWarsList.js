import React from 'react';

import Characters from './Characters';

const StarWarsList = props => {
    return (
        <ul className="list-container">
            {props.starwarsChars.map((char, i) => {
                return (
                    <li>
                        <Characters starwarsChars={props.starwarsChars} index={i} />
                    </li>
                );
            })}
        </ul>
    );
};

export default StarWarsList;