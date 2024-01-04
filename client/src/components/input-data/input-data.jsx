import './input-data.css';

export default function InputData ({onChange, children}) {

    const handleChangePerems = (event) => {
        const variables = event.target.value;
        onChange(variables);
    }

    return(
        <div className='input'>
            <div className='input-label'>
                input :
            </div>
            <div className='text-area'>
                <textarea
                value={children}
                onChange={handleChangePerems}
                className='input-area'  
                />
            </div>
        </div>
    )
}