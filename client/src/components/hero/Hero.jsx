import { Link } from "react-router-dom";
import { child, hero } from "../../assets";

const Hero = () => {
    return (
        < div className="hero mt-24">
            <div className="container flex flex-col gap-6 md:flex-row lg:h-[80vh]  md:items-center">
                <div className="flex flex-col items-center gap-6 flex-1 lg:gap-10 md:items-start" >
                    <h1 className="text-5xl text-center capitalize text-[#0CB8B6] font-semibold leading-tight md:text-start">
                        complete health care <br /> solutions for everyone
                    </h1>
                    <p className="text-2xl md:w-[95%]">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur tempore accusamus tempora alias, illo quae, voluptates deleniti ratione harum magni maiores eveniet doloribus accusantium placeat pariatur. Magnam vel iusto quam eaque doloribus reiciendis harum? Nostrum ab obcaecati hic veniam officiis?
                    </p>
                    <Link to='/'>
                        <button type="button" className="bg-[#0CB8B6] px-4 py-3 text-2xl capitalize text-white rounded">make appointment</button>
                    </Link>
                </div>
                <div className="flex-1">
                    <img src={hero} alt="child" className="rounded h-[50vh] md:h-[35vh] lg:h-[70vh] object-cover w-full block" />
                </div>
            </div>

        </div>
    );
};

export default Hero;