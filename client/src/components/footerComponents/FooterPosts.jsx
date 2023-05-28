import { Link } from "react-router-dom";

const FooterPosts = ({ imgPost, datePost, titlePost }) => {
    return (
        <div className="flex gap-4">
            <Link to='/'>
                <img src={imgPost} alt="post pictures" className="w-40 h-fit" />
            </Link>
            <div className="flex flex-col gap-1">
                <p className="text-[#ffffff8c] uppercase text-xl">{datePost}</p>
                <Link to='/' className="text-xl text-white font-semibold transition-all duration-500 hover:text-[#0CB8B6]">
                    {titlePost}
                </Link>
            </div>
        </div>
    );
};

export default FooterPosts;