import { Link } from "react-router-dom";
import { dr2 } from "../../assets";
import { Footer } from "../../layouts";
import { useState, useEffect } from "react";
import { FormInput } from "../../components";

const SignUp = () => {
    const [values, setValues] = useState({
        fullname: '',
        username: '',
        email: '',
        password: ''
    });

    useEffect(() => {
        document.title = 'SignUp - Medicare';
    }, []);

    const inputs = [
        {
            id: 1,
            name: 'fullname',
            type: 'text',
            placeholder: 'fullname',
            errorMessage: 'njimoke',
            label: 'fullname',
            required: true

        },
        {
            id: 2,
            name: 'username',
            type: 'text',
            placeholder: 'username',
            errorMessage: 'njimoke',
            label: 'username',
            required: true

        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'email',
            errorMessage: 'njimoke',
            label: 'email',
            required: true

        },
        {
            id: 4,
            name: 'password',
            type: 'password',
            placeholder: 'password',
            errorMessage: 'njimoke',
            label: 'password',
            required: true

        },
    ];



    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);
    return (
        <div>
            <div className="h-screen flex justify-center mt-16 px-2">
                <div className="w-[32rem] h-fit">
                    <img src={dr2} alt="" className="w-full h-[40%] object-cover" />
                    <div className="shadow bg-white px-10 py-5 rounded-b" >
                        <h2 className="text-primary text-3xl mb-4">signUp</h2>
                        <form action="#" className="flex flex-col gap-4">
                            {
                                inputs.map(input => (
                                    <FormInput
                                        key={input.id}
                                        {...input}
                                        value={values[input.name]}
                                        onChange={handleChange}
                                    />
                                ))
                            }
                            <div className="flex items-center justify-between">
                                <input type="submit" value="register" className="capitalize bg-primary w-[7rem] py-1.5 text-2xl text-white font-semibold cursor-pointer rounded" />
                                <div className="flex gap-2">
                                    <span>Already have an account ? </span>
                                    <Link to='/login' className="capitalize text-primary">login</Link>
                                </div>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUp;