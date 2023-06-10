import { logo2 } from "../../assets";
import { Link } from 'react-router-dom';
import { FooterPosts, FooterProducts } from "../../components";
import { chairs, pills, stock, materials } from '../../assets';
import { GrFacebookOption } from 'react-icons/gr';
import { AiFillHeart } from 'react-icons/ai';
import { TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti';


const FooterTitle = ({ title }) => {
    return (
        <div>
            <h4 className="relative capitalize text-3xl  text-white before:absolute before:content-[''] before:w-20 before:h-1 before:left-0 before:top-12 before:bg-primary">{title}</h4>
        </div>
    );
};


const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer>

            <div className="bg-[#1D1F27] py-10 px-8 md:px-16 lg:px-32">
                <div className="flex flex-col gap-10 lg:flex-row lg:justify-between">
                    <div className="flex flex-1 flex-col gap-6 mt-16 lg:mt-0">
                        <Link to='/' className="block">
                            <img src={logo2} alt="logo" />
                        </Link>
                        <p className="text-white text-xl leading-relaxed lg:w-[30rem]">
                            Sed magna nulla, pulvinar vel ante vel, fringilla vulputate nibh. In placerat facilisis tincidunt. Integer quis erat dictum, placerat massa non, bibendum ante. Duis aliquet tellus magna, quis egestas enim vulputate sed. Phasellus in dui malesuada, lacinia urna sed.
                        </p>
                    </div>
                    <div className="flex flex-1 flex-col gap-12">
                        <FooterTitle
                            title='recent posts'
                        />
                        <FooterPosts
                            imgPost={stock}
                            datePost='october 18 , 2023'
                            titlePost='2023 Best CAMEROON Hospitals and Clinics'
                        />
                        <FooterPosts
                            imgPost={pills}
                            datePost='september 22 , 2023'
                            titlePost='Are drugs the best solution?'
                        />
                    </div>
                    <div className="flex flex-1 flex-col gap-12">
                        <FooterTitle
                            title='products'
                        />
                        <FooterProducts
                            productImg={chairs}
                            productTitle='Waiting Room Chairs'
                            productPrice='15.00'
                        />
                        <FooterProducts
                            productImg={materials}
                            productTitle='Special Weight scale'
                            productPrice='25.00'
                        />

                    </div>
                    <div className="flex flex-1 flex-col gap-12">
                        <FooterTitle
                            title='our services'
                        />
                        <div className=" footerServices text-white text-[1.22rem] -tracking-tight duration-500 transition-all grid grid-cols-1 gap-4">
                            <Link to='/'>Appointments</Link>
                            <Link to='/'>Working hours</Link>
                            <Link to='/'>Cost calculator</Link>
                            <Link to='/'>Procedures</Link>
                            <Link to='/'>Special offers</Link>
                            <Link to='/'>Testimanials</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-700 py-4 px-8 md:px-16 lg:px-32">
                <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between">
                    <div className="text-xl text-white flex items-center gap-3">
                        <span>Made by NjimsRane with </span>
                        <AiFillHeart className="text-[crimson]" /> <span>Copyright@ {year}.All rights reserved.</span>
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row-reverse">
                        <div className="flex justify-center gap-4 text-primary text-4xl">
                            <a href="https://www.facebook.com" aria-label='link to facebook page' rel='noopener noreferrer' target='_blank'>
                                <GrFacebookOption className='icons' />
                            </a>

                            <a href="https://www.twitter.com" aria-label='link to twitter page' rel='noopener noreferrer' target='_blank'>
                                <TiSocialTwitter className='icons' />
                            </a>

                            <a href="https://www.pinterest.com" aria-label='link to pinterest page' rel='noopener noreferrer' target='_blank'>
                                <TiSocialPinterest className='icons' />
                            </a>
                        </div>
                        <div className="footerServices text-white text-[1.22rem] -tracking-tight flex items-center gap-4 uppercase">
                            <Link to='/'>about us</Link>
                            <Link to='/'>services</Link>
                            <Link to='/'>contact us</Link>
                            <Link to='/'>working hours</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;