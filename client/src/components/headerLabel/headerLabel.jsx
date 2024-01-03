import './headerLabel.css';
import SelectLanguage from '../select_lang/select-lang';
import { useState, useEffect } from 'react';

export default function HeaderLabel({onSelect}) {

    const [langId, setLangId] = useState();

    const handleLangId = (id) => {
      setLangId(id);
    };
  
    useEffect(() => {
      onSelect(langId);
    }, [langId, onSelect]);
  

    return(
        <header className='label-header'>
            <SelectLanguage onSelect={handleLangId}></SelectLanguage>
            <div className='label-text'>Code editor</div> 
            <div className='label-account'>
             
            </div>
        </header>
    )
}