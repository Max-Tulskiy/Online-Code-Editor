import './input-data.css';
import { useState } from 'react';

export default function InputData ({onChange}) {

    const [inputPerems, setInputPerems] = useState("");

    const handleChangePerems = (event) => {
        const perems = event.target.value;
        setInputPerems(perems);
        onChange(perems);
    }
    

    return(
        <div className='input'>
            <div className='input-label'>
                input :
            </div>
            <div className='text-area'>
                <textarea
                value={inputPerems}
                onChange={handleChangePerems}
                className='input-area'  
                placeholder="..."
                />
            </div>
        </div>
    )
}