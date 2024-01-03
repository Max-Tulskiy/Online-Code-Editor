import './App.css';
import CodeMirror from "@uiw/react-codemirror";
import SendButton from './components/sendButton/sendButton';
import InputData from './components/input-data/input-data';
import HeaderLabel from './components/headerLabel/headerLabel';
import {basicDark} from '@uiw/codemirror-theme-basic';
import { useState } from 'react';
import { useCallback } from 'react';
import { langs } from '@uiw/codemirror-extensions-langs';


function App() {

  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState(""); 
  const [inputVariables, setInputVariables] = useState("");
  const [loading, setLoading] = useState(false);
  const [langId, setLangId] = useState(null);


  const api_server = 'http://localhost:8000/';
  
  const onChange = useCallback((val) => {
    setInputValue(val);
  }, []);

  const handleChangeVariables = (vars) => {
    setInputVariables(vars);
  };
  

  const handleClick = async (e) => {
    
    setLoading(true);

    e.preventDefault();
    
    let codeResponse = {};
    codeResponse["code"] = inputValue.toString();
    codeResponse["variables"] = inputVariables.toString();
    codeResponse["language_id"] = langId.toString();
    
    try{
      const response = await fetch(api_server, {
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
    setLoading(false);
  }

  const handleLangId = (id) => {
    setLangId(id);
    console.log('id', id);
    console.log('langId', langId);
  };


  return (
    <div className='container'>
      
      <HeaderLabel onSelect={handleLangId}></HeaderLabel>

      <div className='input-code'>
        <CodeMirror 
          className='code-editor'
          height='60vh'
          value={inputValue}
          onChange={onChange}
          extensions={[langs.python()]}
          theme={basicDark}/>
      </div>

      <div className='wrapper'>

        <InputData onChange={handleChangeVariables}/>

        <div className='output'>
          <div className='output-label'>
            Output:
          </div> 
          
          {loading && <p>loading...</p>}

          <pre>{JSON.stringify(responseData.answer, null, 2)}</pre>
        </div>

        <div className='setup'>
          <SendButton onClick={handleClick}>Run</SendButton>         
        </div>
      </div>
        
    </div>
  );
}

export default App;
