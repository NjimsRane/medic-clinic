

const Banner = ({ title }) => {
    return (
        <div className="banner bg-[#0CB8B6] h-[20vh] md:h-[15vh] lg:h-[20vh] mb-8">
            <div className="flex flex-col justify-center h-full px-8 md:px-16 lg:px-32">
                <h1 className="text-white text-6xl font-semibold capitalize">{title}</h1>
            </div>
        </div>
    );
};

export default Banner;