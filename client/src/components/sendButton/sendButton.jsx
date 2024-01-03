import './sendButton.css';
import startButton from '../assets/images/start.png'

export default function SendButton({onClick}) {

    return(
        <div>
            <button className="button active" onClick={onClick}><img src={startButton} alt="Run" style={{ width: '100%', height: 'auto', alignItems: 'center' }}/></button>
        </div>
    )
}