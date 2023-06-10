

const SectionTitle = ({ title, subtitle }) => {
    return (

        <div>
            <p className="relative text-3xl text-[#022625] before:absolute before:content-[''] before:w-20 before:h-1 before:left-0 before:top-12 before:bg-primary">{subtitle}</p>
            <h2 className="my-16 text-4xl md:5xl">{title}</h2>
        </div>

    );
};

export default SectionTitle;