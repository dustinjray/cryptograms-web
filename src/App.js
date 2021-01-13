import './App.css';
import React, {Component} from 'react';
import Keyboard from './Components/Keyboard';
import Puzzle from './Components/Puzzle';
import quoteData from './Components/QuoteData';
import Title from './Components/Title';
import Rules from './Components/Rules';
import QuoteModal from './Components/QuoteModal';

class App extends Component {
    state = {
        book: "",
        character: "",
        quote: "",
        currentIndex: 0,
        guesses: {},
        selectionMode: false,
        selected: "",
        cipher: {},
        solved: false,
        show: true
    };

    constructor(props) {
        super(props);
        this.nextPuzzle();
    }

    data = quoteData;

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            const key = e.key.toString().toUpperCase();
            const letters = /[A-Z\s]/;
            if (letters.test(key)) {
                if (!this.state.selectionMode) {
                    this.setState({selectionMode: true, selection: key});
                } else {
                    this.setState(function (state) {
                        return {
                            guesses: {...state.guesses, [state.selection]: key},
                            selection: "",
                            selectionMode: false
                        }
                    });
                    this.setState((state) => {
                        return {solved: this.checkAnswer(state)}
                    });
                }
            }
        });
    }

    hideModal = () => {
        this.setState({show: false});
    }

    /*
    The first time a letter is selected, the LetterTile widgets with that letter on the bottom
    are highlighted, the second time a letter is selected, it assigns a key-value pair of
    first-letter : second-letter and that is added to the player's guess object.
     */

    handleKeyboard = (e) => {
        if (!this.state.selectionMode) {
            const selection = e.target.textContent;
            this.setState({selectionMode: true, selection: selection});
        } else {
            this.setState(function (state) {
                return {
                    guesses: {...state.guesses, [state.selection]: e.target.textContent},
                    selection: "",
                    selectionMode: false
                }
            });
            this.setState((state) => {
                return {solved: this.checkAnswer(state)}
            });
        }
    }

    checkAnswer = (state) => {
        for (const [key, value] of Object.entries(state.cipher)) {
            if (key !== state.guesses[value]) {
                return false;
            }
        }
        return true;
    }

    nextPuzzle = async () => {
        const quote = this.data[this.state.currentIndex]["quote"];
        const letters = await this.extractUniqueLetter(quote);
        const cipherObject = await this.makeCipher(letters);
        const characterName = this.data[this.state.currentIndex]["character"];
        const title = this.data[this.state.currentIndex]["book"];
        this.setState(function () {
            return {
                cipher: cipherObject,
                quote: quote,
                guesses: {},
                character: characterName,
                book: title,
                solved: false,
                selection: ""
            }
        });
    }

    clearGuesses = () => {
        this.setState({guesses: {}});
    }

    extractUniqueLetter = (quote) => {
        const unique = []
        const letters = /[a-zA-Z]/;
        const quoteArray = [...quote.toUpperCase()];
        for (let letter of quoteArray) {
            if (letters.test(letter)) {
                if (!unique.includes(letter)) {
                    unique.push(letter);
                }
            }
        }
        return unique;
    }

    handleNext = async () => {
        await this.incrementIndex();
        this.nextPuzzle();
    }

    /*
    If, in the player's guess object the property of value does not equal the cipher key, the
    letter is added to the array. A random member of the array is selected and then either filled
    in or corrected if the guess for that letter is incorrect.
     */

    giveHint = () => {
        const keys = [];
        const values = [];
        for (const [key, value] of Object.entries(this.state.cipher)) {
            if(this.state.guesses[value] !== undefined) {
                if (this.state.guesses[value].toString() !== [key].toString()) {
                    keys.push([key]);
                    values.push([value]);
                }
            } else {
                keys.push([key].toString());
                values.push([value].toString());
            }
        }
        if(keys.length > 0) {
            let index = Math.floor(Math.random() * Math.floor(keys.length));
                    const updatedGuesses = {...this.state.guesses, [values[index]]: keys[index]};
                    this.setState(() => {
                        return {guesses: updatedGuesses};
                    });
        }
        this.setState((state) => {
            return {solved: this.checkAnswer(state)}
        });
    }

    incrementIndex = () => {
        let newIndex = this.state.currentIndex;
        newIndex++;
        this.setState(() => {
            return {currentIndex: newIndex};
        });
    }

    handleSelectSpecific = async () => {
        const input = prompt("Enter the number of the puzzle you would like to go to: (1 - 229)");
        const index = parseInt(input);
        if (!isNaN(index)) {
            if (index > 0 && index < 230) {
                await this.setState(() => {
                    return {currentIndex: index - 1};
                });
                this.nextPuzzle();
            } else {
                alert("Invalid Selection. Choose a puzzle 1 - 229");
            }
        }
    }

    /*
    Creates a cipher in the following manner:
    OriginalLetter : EncryptedLetter
    the Guesses object is then created in the reverse
    EncryptedLetter : OriginalLetter
     */

    makeCipher = (letters) => {
        const alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
        const encryptedLetters = {};
        for (let letter of letters) {
            if (alphabet.length === 0) {
                continue;
            }
            let index = -1;
            do {
                index = Math.floor(Math.random() * Math.floor(alphabet.length));
            } while (alphabet[index] === letter);
            encryptedLetters[letter] = alphabet[index];
            alphabet.splice(index, 1);
        }
        return encryptedLetters;
    }

    render() {

        let puzzle = (<Puzzle quote={this.state.quote}
                              guess={this.state.guesses}
                              selection={this.state.selection}
                              cipher={this.state.cipher}/>);

        /*
        I should really move this to its own Component...
         */

        let buttonRow = (<div className="button-div">
            <button onClick={this.giveHint} className={"btn"}>
                <i className="fas fa-question"></i>
                <small>HINT</small>
            </button>
            <button onClick={this.clearGuesses} className={"btn"}>
                <i className="fas fa-eraser"></i>
                <small>CLEAR</small>
            </button>
            <button onClick={this.handleNext} className={"btn"}>
                <i className="fas fa-forward"></i>
                <small>NEXT</small>
            </button>
            <button onClick={this.handleSelectSpecific} className={"btn"}>
                <i className="fas fa-search"></i>
                <small>TO #</small>
            </button>
            <button className={this.state.solved === true ? "done btn" : "not btn"}>
                <i className={this.state.solved === true ? "fas fa-check" : "fas fa-times"}></i>
                <small>SOLVED</small>
            </button>
        </div>);

        return (
            <div className="App">
                <div className={this.state.show ? "game hide" : "game"}>
                    <div className={"title-div"}>
                        <Title title={this.state.book}
                               character={this.state.character}
                        puzzle={this.state.currentIndex + 1}/>
                    </div>
                    <div className={"puzzle-div"}>
                        {puzzle}
                    </div>
                    {buttonRow}
                    <div className={"keyboard-div"}>
                        <Keyboard click={this.handleKeyboard.bind(this)}/>
                    </div>
                </div>
                <Rules show={this.state.show} handleClose={this.hideModal}/>
                <QuoteModal show={this.state.solved}
                            handleClose={this.handleNext}
                            quote={this.state.quote}
                            title={this.state.book}
                            character={this.state.character}/>
            </div>
        );
    }
}

export default App;
