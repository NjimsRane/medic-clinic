

const OurSpecialist = ({ name, img1, title }) => {
    return (
        <div className="flex flex-col gap-2 rounded-2xl overflow-hidden shadow-2xl h-[48vh] md:h-[30vh] lg:h-[45vh]">
            <div className="h-[80%]">
                <img src={img1} className="w-full h-full object-cover rounded-3xl" alt="specialist picture" />
            </div>
            <div className="flex flex-col gap-1 h-auto items-center">
                <h3 className="capitalize text-2xl font-bold text-[#0C031B]">DR. {name}</h3>
                <p className="text-xl capitalize font-semibold text-[#0c031b7a]">{title} specialist</p>
            </div>
        </div>
    );
};

export default OurSpecialist;