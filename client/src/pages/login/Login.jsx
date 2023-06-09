import { Link } from "react-router-dom";
import { dr1 } from "../../assets";
import { Footer } from "../../layouts";
import { useState } from "react";
import { FormInput } from "../../components";


const Login = () => {

    const [values, setValues] = useState({
        username: '',
        password: ''
    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username...',
            label: 'username',
            errorMessage: "Invalid user",
            required: true
        },
        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password...',
            label: 'password',
            errorMessage: "Incorrect password",
            required: true
        },
    ];

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <>
            <div className="min-h-screen flex items-center justify-center px-2">
                <div className="w-[32rem] h-fit">
                    <img src={dr1} alt="" className="w-full h-[40%] object-cover" />
                    <div className="shadow bg-white px-10 py-5 rounded-b" >
                        <h2 className="text-[#0cb8b6] text-3xl mb-4">login</h2>
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
                                <a href="#" className="capitalize transition-all duration-500 hover:text-[#0cb9b6]">forgot password ?</a>
                                <input type="submit" value="login" className="capitalize bg-[#0cb9b6] w-[6rem] py-1.5 text-2xl text-white font-semibold cursor-pointer rounded" />
                            </div>
                            <div className="flex gap-2">
                                <span>Don`t have an account ? </span>
                                <Link to='/signUp' className="capitalize text-[#0cb9b6]">register</Link>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <Footer />
        </>

    );
};

export default Login;