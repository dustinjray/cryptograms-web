import './QuoteModal.css';

const QuoteModal = (props) => {

    const showHideClassName = props.show ? "quote display-block" : "quote display-none";

    const titleArray = props.title.split(" ");

    const harryPotter = titleArray.slice(0, 2).join(" ");

    const andThe = titleArray.slice(2).join(" ");

    let character = "- ";

    if (props.character === "") {
        character = "";
    } else {
        character += props.character;
    }


    return (
        <div className={showHideClassName}>
            <div className="quote-main">
                <h1 className={"harryPotter"}>{harryPotter}</h1>
                <h2 className={"and-the"}>{andThe}</h2>
                <p className="quote-text"><i>{props.quote}</i></p>
                <p className={"speaker"}>{character}</p>
                <button onClick={props.handleClose} className={"next-button"}>Next</button>
            </div>
        </div>
    )

}

export default QuoteModal;