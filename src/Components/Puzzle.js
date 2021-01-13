import LetterTile from './LetterTile';
import './Puzzle.css';

const Puzzle = (props) => {
    const alphabet = /[A-Z]/;
    const sentence = props.quote.toUpperCase().split(" ");
    const words = sentence.map(word => word.split(''));
    const letters = words.map((word, i) => (
        <div className="word-wrapper">
            {word.map((letter, i) => (
                <LetterTile
                    key={i}
                    topLetter={!alphabet.test(letter) ? letter : props.guess[props.cipher[letter]] === undefined ? " " : props.guess[props.cipher[letter]]}
                    bottomLetter={alphabet.test(letter) ? props.cipher[letter] : letter}
                    selected={props.selection}
                />
            ))}
        </div>
    ));
    return (
        <div className={"puzzle"}>{letters}</div>
    );
}

export default Puzzle;