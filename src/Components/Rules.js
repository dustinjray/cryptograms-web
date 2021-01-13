import './Rules.css';


const Rules = (props) => {

    const showHideClassName = props.show ? "rules display-block" : "rules display-none";

    return (
        <div className={showHideClassName}>
            <div className="rules-main">
            <h1>How to Play:</h1>
            <ul>
                <li>
                    <p>You will be presented with a quote from the Harry Potter books that has been run through a
                    letter-replacement encryption.</p>
                </li>
                <li>
                    <p>When you think you know which letter from the <b>original</b> quote the letter on the <i>bottom</i>
                     &nbsp;represents, use your keyboard or the on-screen keyboard to press that key</p>
                </li>
                <li>
                    <p>For example, if the letters on the bottom were <b>"ZLEEB"</b> and you thought the letter <b>"E"</b>
                        should really be the letter <b>"R"</b>, you would press the <b>"E"</b> key <b>first</b>, and press the <b>"R"</b> key <b>second</b>.</p>
                </li>
                <li>
                    <p>Your guess will appear in the puzzle. Continue in this manner until you solve the puzzle!</p>
                </li>
                <li>
                    <p>If you need a hint, press the hint button. This will fill in one of the letters randomly with
                    the correct answer. Please note, this may replace an incorrect guess that you have made.</p>
                </li>
                <li>
                    <p>If you want to clear <b>all</b> your guesses and start over, press the clear button. This will
                    also clear any hints you have been given.</p>
                </li>
                <li>
                    <p>Please note the number of the puzzle at the top of the screen. If you want to come back and continue
                    playing later, click the magnifying glass and enter the number of the puzzle you wish to go to.</p>
                </li>
                <li>
                    <p>A tip for solving the puzzles: look for common word endings like <b>"ing"</b> or common words
                        like <b>"and"</b> or <b>"the"</b>. Single-letter words are likely <b>"I"</b> or <b>"a"</b>.</p>
                </li>
                <li>
                    <p>Also for these puzzles, if you see the pattern <b>A-B-C-C-D</b> then <b>"Harry"</b> might be
                    a good guess. His name does come up quite often.</p>
                </li>
            </ul>
                <button onClick={props.handleClose} className={"close-button"}>
                    Close
                </button>
            </div>
        </div>
    );
}

export default Rules;