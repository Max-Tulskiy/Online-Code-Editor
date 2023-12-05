import './outputBox.css';
import startButton from '../assets/images/start.png';
import clearButton from '../assets/images/clear.png';


function OutputBox(){
    return(
        <div className='center-container'>
            <div className="output-box">
            <InnerOutputBox></InnerOutputBox>

                <div>
                    <StartButton></StartButton>
                    <ClearButton></ClearButton>
                </div>

            </div>
        </div>
        
    )
}

const InnerOutputBox = () =>{
    return(
        <div className="inside-box"></div>
    )
}

const StartButton = () =>{
    return(
        <div className='start-button'>
            <button className='start-button-inner'> 
                <img src={startButton} alt="Start" />
            </button>
        </div>
    )
}


const ClearButton = () =>{
    return(
        <button className='clear-button-inner'> 
            <img src={clearButton} alt="Start" />
        </button>
    )
}

export default OutputBox;