import './App.css';
import Editor from './components/text-editor/text-editor';
import OutputBox from './components/output-box/OutputBox';


function App() {
  return (
    <div className='appa'>
      <Editor></Editor>
      <OutputBox></OutputBox>
    </div>

  );
}

export default App;
