import { Link } from "react-router-dom";

const FooterPosts = ({ imgPost, datePost, titlePost }) => {
    return (
        <div className="flex gap-4">
            <Link to='/'>
                <img src={imgPost} alt="post pictures" className="w-40 h-fit" />
            </Link>
            <div className="flex flex-col gap-2 text-xl">
                <span className="text-[#ffffff8c] uppercase ">{datePost}</span>
                <Link to='/' className="w-[13rem] text-white font-semibold transition-all duration-500 hover:text-primary">
                    {titlePost}
                </Link>
            </div>
        </div>
    );
};

export default FooterPosts;