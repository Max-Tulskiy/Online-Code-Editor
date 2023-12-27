import './sendButton.css';

export default function SendButton({children , onClick}) {

    return(
        <button className="button active" onClick={onClick}>{children}</button>
    )
}