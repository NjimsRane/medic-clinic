

const OtherSpecialists = ({ imgs, subtitle, title, desc, illustration }) => {
    return (
        <div className="flex flex-col gap-20 flex-1">

            <div className="relative w-full h-[60vh] ">
                <img src={imgs} alt="patient" className="w-full h-full object-cover" />
                <div className="absolute  cursor-pointer flex items-center justify-center before:absolute before:content-[''] before:border-2  before:border-primary before:bg-primary before:w-[80%] before:h-[80%] before:rounded-full  w-32 h-32 top-[90%] md:top-[95%] lg:top-[90%] rounded-full bg-[#fff] left-[50%] translate-x-[-50%] hover:bg-primary before:hover:bg-white transition-all duration-500 group">
                    <span className="absolute z-1 text-5xl text-white duration-500 transition-all group-hover:text-primary">{illustration}</span>
                </div>
            </div>

            <div className="flex flex-col gap-4 justify-center text-center">
                <span className="text-[#000] text-2xl" >{subtitle}</span>
                <h4 className="text-[#222] text-4xl font-bold">{title}</h4>
                <p className="text-[#2d2d2d] text-xl leading-normal w-[50%] mx-auto">{desc}</p>
            </div>

        </div>
    );
};

export default OtherSpecialists;