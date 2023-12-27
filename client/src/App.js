import './App.css';
import CodeMirror from "@uiw/react-codemirror";
import Editor from './components/text-editor/text-editor';
import OutputBox from './components/output-box/OutputBox';
import SendButton from './components/sendButton/sendButton';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { useState } from 'react';
import { useCallback } from 'react';



function App() {

  const [inputValue, setInputValue] = useState("hhh"); 

  const onChange = useCallback((val) => {
    setInputValue(val);
  }, []);

  function handleClick () {
    console.log({inputValue});
  }

  return (
    <div className='appa'>
      <div>
        <CodeMirror 
          width='1920px'
          height='400px'
          value={inputValue}
          onChange={onChange}
          theme={okaidia}/>
      </div>
    
     <div>

      <SendButton onClick={handleClick}>Run</SendButton>
     
     </div>
    
    </div>
  );
}

export default App;
