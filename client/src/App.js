import './App.css';
import CodeMirror from "@uiw/react-codemirror";
import SendButton from './components/sendButton/sendButton';
import InputData from './components/input-data/input-data';
import { okaidia } from '@uiw/codemirror-theme-okaidia';
import { useState } from 'react';
import { useCallback } from 'react';



function App() {

  const [inputValue, setInputValue] = useState("");
  const [responseData, setResponseData] = useState("") 

  //--------------------------------------------------------
  const [inputPerems, setInputPerems] = useState('');

  const onChangePerems = useCallback((Perems) => {
    setInputPerems(Perems);
  }, []);

  //-----------------------------------------

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
    <div className='container'>
      
      <div>
        <CodeMirror 
          className='code-editor'
          height='50vh'
          value={inputValue}
          onChange={onChange}
          theme={okaidia}/>
      </div>

      <div className='wrapper'>

        <InputData 
          value = {inputPerems}
          onChange={onChangePerems}>
        </InputData>
     
        <div className='output'>
          <div className='output-label'>
            Output:
          </div> 
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
