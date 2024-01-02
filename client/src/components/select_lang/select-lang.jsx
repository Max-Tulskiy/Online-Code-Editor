import './select-lang.css';
import { useState } from "react"
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
      onSelect(langId);
   }

    return(
       <div>
        <p>Выберите язык</p>
        <Select onChange={onChange} value={getValue()} options={languages}></Select>
       </div>
    )
}