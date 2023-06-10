


const FormInput = (props) => {
    const { id, label, onChange, errorMessage, ...othersInput } = props;
    return (
        <div>
            <label htmlFor={id} className="capitalize font-semibold text-[#636262]">{label}</label>
            <input type='text' id={id} onChange={onChange} className="border rounded focus:outline-none w-full p-2 invalid:border-red-600 peer" {...othersInput} />
            <small className="text-red-600 hidden peer-invalid:block">{errorMessage}</small>
        </div>
    );
};

export default FormInput;