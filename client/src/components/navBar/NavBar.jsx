import { logo1 } from "../../assets";
import { Link } from 'react-router-dom';
import { MdMenu } from 'react-icons/md';

const NavBar = () => {
    return (
        <nav className="border-b shadow-sm fixed w-full top-0 bg-white z-[999] left-0">
            <div className="container flex justify-between items-center">
                <Link to='/'>
                    <img src={logo1} alt="logo" className="w-40" />
                </Link>
                <div className="cursor-pointer">
                    <MdMenu className="text-5xl" />
                </div>
            </div>
        </nav>
    );
};

export default NavBar;