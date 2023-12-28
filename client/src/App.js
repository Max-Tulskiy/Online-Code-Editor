import './App.css';
import CodeMirror from "@uiw/react-codemirror";
import Editor from './components/text-editor/text-editor';
import OutputBox from './components/output-box/OutputBox';
import SendButton from './components/sendButton/sendButton';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { useState } from 'react';
import { useCallback } from 'react';



function App() {

  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState("") 

  const onChange = useCallback((val) => {
    setInputValue(val);
  }, []);
  

  const handleClick = async (e) => {
    
    e.preventDefault();

    
    let codeResponse = {};
    codeResponse["code"] = inputValue.toString();

    try{
      const response = await fetch('http://localhost:8000/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(codeResponse),
      
      });

      if (response.ok){
        const answer = await response.json();
        setResponseData(answer);
      }
    
    
    } catch (error){
      console.log("Error");
    }

    
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

     <div>
      Результат: 
      <pre>{JSON.stringify(responseData.answer, null, 2)}</pre>
     </div>
    
    </div>
  );
}

export default App;
