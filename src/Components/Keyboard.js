import React from 'react';
import "./Keyboard.css"

const Keyboard = (props) => {

    const letters = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Z", "X", "C", "V", "B", "N", "M", " "];

    function makeRow(start, end) {
        let selection = letters.slice(start, end + 1);
        return (
            <div className="keyboard-row">
                {selection.map((letter, index) => (
                    <button className="letter-button"
                    onClick={props.click}
                    key={index}>{letter}</button>
                ))}
            </div>
        );
    }
    return (
        <div className="keyboard">
            {makeRow(0,9)}
            {makeRow(10,18)}
            {makeRow(19, 26)}
        </div>
    );
}

export default Keyboard;