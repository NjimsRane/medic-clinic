import { useState } from "react";



const FormInput = (props) => {
    const { id, label, onChange, errorMessage, ...othersInput } = props;
    const [focused, setFocused] = useState(false);

    const handlefocused = (e) => {
        setFocused(true);
    };

    return (

        <div className="formInput">
            <label htmlFor={id} className="capitalize font-semibold text-[#636262]">{label}</label>
            <input type='text' id={id} onChange={onChange} className="border rounded focus:outline-none w-full p-2" {...othersInput} onBlur={handlefocused} focused={focused.toString()} />
            <small className="text-red-600 hidden">{errorMessage}</small>
        </div>
    );
};

export default FormInput;