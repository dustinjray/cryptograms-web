import React from 'react';
import './Title.css';

const Title = (props) => {

    const titleArray = props.title.split(" ");

    const harryPotter = titleArray.slice(0, 2).join(" ");

    const andThe = titleArray.slice(2).join(" ");

    let character = "- ";

    if (props.character === "") {
        character += "No Speaker";
    } else {
        character += props.character;
    }

    return (
        <div className="title-wrapper">
            <h2 className="harry-potter">{harryPotter}</h2>
            <h3 className={"subtitle"}>{andThe}</h3>
            <p className={"character"}>{character}</p>
            <p>{props.puzzle} / 229</p>
        </div>
    );
}

export default Title;