import { NavBar } from "../../components";


const Header = () => {
    return (
        <header className="border-b shadow-sm fixed w-full top-0 bg-white z-[999] left-0 py-6 px-8 md:px-16 lg:px-32">
            <NavBar />

        </header>
    );
};

export default Header;