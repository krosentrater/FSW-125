import { useState } from 'react';


function RecycledItemForm({ add, name, desc, btnText, id }) {

    const initialInput = {name: name || '', desc: desc || ''};
    const [inputs, setInputs] = useState(initialInput);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }));
    };

    const handleSubmit = (e) => {   
        e.preventDefault();
        add(inputs, id);
        setInputs(initialInput);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type = 'text'
                name = 'name'
                value = {inputs.name}
                onChange = {handleChange}
                placeholder = 'Name' />
            <input 
                type = 'text'
                name = 'desc'
                value = {inputs.desc}
                onChange = {handleChange}
                placeholder = 'Description' />
                <button className = 'add'>{btnText}</button>
        </form>
    );
}

export default RecycledItemForm;