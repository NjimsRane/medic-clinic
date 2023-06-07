import { useState } from "react";
import { logo1 } from "../../assets";

import { Link, NavLink } from 'react-router-dom';
import { MdMenu, MdClose } from 'react-icons/md';

const Menu = () => {
    return (
        <>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#0CB8B6]' : 'text-[gray]'}>home</NavLink>
            <NavLink to={'/about'} className={(isActive) => isActive ? 'text-[#0CB8B6]' : 'text-[gray]'}>about us</NavLink>
            <NavLink to={'/appointment'} className={({ isActive }) => isActive ? 'text-[#0CB8B6]' : 'text-[gray]'}>appointment</NavLink>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#0CB8B6]' : 'text-[gray]'}>blog</NavLink>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'text-[#0CB8B6]' : 'text-[gray]'}>shop</NavLink>
        </>
    );
};

const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    const hangleToggle = () => {
        setToggle(!toggle);
    };

    return (
        <nav >
            <div className="flex justify-between items-center">
                <Link to='/'>
                    <img src={logo1} alt="logo" className="w-48" />
                </Link>
                <div className="items-center gap-8 capitalize text-2xl tracking-wide hidden lg:flex">
                    <Menu />
                </div>
                <div className="cursor-pointer lg:hidden">
                    {
                        toggle ? <MdClose className="text-5xl text-[#0CB8B6]" onClick={hangleToggle} /> : <MdMenu className="text-5xl text-[#0CB8B6]" onClick={hangleToggle} />
                    }
                </div>

                {
                    toggle
                        ? <div className="absolute flex flex-col items-center gap-8 capitalize text-2xl top-[6.2rem] bg-white w-[calc(100%-4rem)] md:w-[calc(100%-8rem)] py-8 shadow transition-all duration-500 lg:hidden">
                            <Menu />
                        </div>
                        : <div className="absolute flex flex-col items-center gap-8 capitalize text-2xl top-[6.2rem] bg-white w-[calc(100%-4rem)] md:w-[calc(100%-8rem)] py-8 shadow transition-all duration-500 translate-x-[200%] lg:hidden">
                            <Menu />
                        </div>
                }
            </div>
        </nav>
    );
};

export default NavBar;