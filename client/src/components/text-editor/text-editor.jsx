import './editor.css';
import nighModeButton from '../assets/images/night-mode.png';


function Editor(){
    return(
        <div className='center-container'>
            <div className="editor"></div>
            <NightModeButton></NightModeButton>
        </div>
        
    )
}

const NightModeButton = () => {
    return(
            <div className='button-container'>
                <button className='night-mode-button'>
                    <img src={nighModeButton} alt='Nigh-mode'></img>
                </button>
            </div>
            
      
    )
}

export default Editor;