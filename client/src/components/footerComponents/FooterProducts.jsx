import { Link } from "react-router-dom";
import { AiFillStar } from 'react-icons/ai';

const FooterProducts = ({ productTitle, productPrice, productImg }) => {
    return (
        <div className="flex gap-4">
            <Link to='/'>
                <img src={productImg} alt="post pictures" className="w-40 h-fit" />
            </Link>
            <div className="flex flex-col gap-2">
                <Link to='/' className=" text-white uppercase text-xl font-semibold transition-all duration-500 hover:text-[#0CB8B6]">{productTitle}</Link>
                <div className="flex items-center">
                    <AiFillStar className="text-[#0CB8B6]" />
                    <AiFillStar className="text-[#0CB8B6]" />
                    <AiFillStar className="text-[#0CB8B6]" />
                    <AiFillStar className="text-[#0CB8B6]" />
                    <AiFillStar className="text-[#0CB8B6]" />
                </div>
                <Link to='/' className="text-lg text-[#ffffff8c]">
                    {productPrice}$
                </Link>
            </div>
        </div>
    );
};

export default FooterProducts;