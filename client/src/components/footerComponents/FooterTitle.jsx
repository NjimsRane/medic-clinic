

const FooterTitle = ({ title }) => {
    return (
        <div>
            <h4 className="relative capitalize text-3xl  text-white before:absolute before:content-[''] before:w-20 before:h-1 before:left-0 before:top-12 before:bg-[#0CB8B6]">{title}</h4>
        </div>
    );
};

export default FooterTitle;