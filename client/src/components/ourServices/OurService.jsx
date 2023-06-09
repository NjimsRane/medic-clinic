

const OurService = ({ title, img1, desc }) => {
    return (
        <div className="ourService flex items-start gap-6 bg-gradient-to-r from-[#0CB8B6] to-blue-900 h-fit py-6 px-8 rounded-2xl md:py-8">
            <div className="bg-white p-3 flex justify-center items-center rounded-full">
                <img src={img1} className="w-24" alt="illustration picture" />
            </div>
            <div className="flex flex-col gap-4 text-white">
                <h3 className="capitalize text-xl font-bold">{title}</h3>
                <p className="text-lg">{desc}</p>
            </div>
        </div>
    );
};

export default OurService;
