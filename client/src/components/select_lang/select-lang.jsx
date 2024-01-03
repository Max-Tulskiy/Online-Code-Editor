import './select-lang.css';
import { useState, useEffect } from "react"
import Select from "react-select";
import { languages } from './allLangs.js';


export default function SelectLanguage({onSelect}) {
   
   const [currentLang, setCurrentLang] = useState("");
   const [langId, setLangId] = useState("");
   
   const getValue = () => {
     const answer =  currentLang ? languages.find(language => language.label === currentLang) : '';
      return answer;
   }

   const onChange = (newLang) => {
      setCurrentLang(newLang.label);
      setLangId(newLang.value);
   }

   useEffect(() => {
      onSelect(langId);
    }, [langId, onSelect]);

   const styles = {
      color: 'blue',
   }

    return(
       <div className='select-language'>
        <Select onChange={onChange} value={getValue()} options={languages} style={styles} placeholder='Choose lang'></Select>
       </div>
    )
}