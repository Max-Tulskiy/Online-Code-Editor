import './input-data.css';

export default function InputData ({inputPerems, handleInputChange}) {


    return(
        <div className='input'>
            <div className='input-label'>
                input :
            </div>
            <div className='text-area'>
                <textarea
                value={inputPerems}
                onChange={handleInputChange}
                className='input-area'  
                placeholder="..."
                />
            </div>
        </div>
    )
}