const HomeTitles = ({ title, desc }) => {
    return (
        <div className="mt-10 flex flex-col items-center gap-4 ">
            <h2 className="capitalize">{title}</h2>
            <p className="text-2xl text-center md:w-[50%] my-5 text-[#0c031b7a]">{desc}</p>
        </div>
    );
};

export default HomeTitles;

