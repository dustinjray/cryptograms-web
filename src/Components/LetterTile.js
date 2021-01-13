import React from 'react';
import './LetterTile.css';

const LetterTile = (props) => {

    const alphabet = /[A-Z\s]/;

    return(
        <div className={props.selected === props.bottomLetter ? "letter-tile selected" : "letter-tile"}>
            <div className={alphabet.test(props.topLetter) ? "letter-div upper" : "letter-div"}>
                <p className={"letter-upper"}>{props.topLetter}</p>
            </div>
            <div className={"letter-div"}>
                <p className={"letter-lower"}>{props.bottomLetter}</p>
            </div>
        </div>
    );
}

export default LetterTile;