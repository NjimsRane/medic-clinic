
import { MdOutlineWhatsapp } from 'react-icons/md';
import { AiOutlineInstagram } from 'react-icons/ai';
import { GrFacebookOption } from 'react-icons/gr';
import { TiSocialLinkedin, TiSocialPinterest, TiSocialTwitter } from 'react-icons/ti';

const OurSpecialist = ({ name, img1, title }) => {
    return (
        <div className="flex flex-col gap-2 rounded-2xl overflow-hidden shadow-2xl h-[48vh] md:h-[30vh] lg:h-[45vh] relative transition-all duration-500 hover:shadow-none specialistDiv">
            <div className="h-[80%] relative imageHover">
                <img src={img1} className="w-full h-full object-cover rounded-3xl" alt="specialist picture " />
            </div>
            <div className="flex flex-col gap-1 h-auto items-center">
                <h3 className="capitalize text-2xl font-bold text-[#0C031B]">DR. {name}</h3>
                <p className="text-xl capitalize font-semibold text-[#0c031b7a]">{title}</p>
            </div>
            <div className="absolute inset-0 specialistHover opacity-0 duration-500 transition hover:opacity-100">
                <div className='absolute top-4 right-4 flex flex-col gap-4 '>
                    <a href="https://www.facebook.com" aria-label='link to facebook page' rel='noopener noreferrer' target='_blank'>
                        <GrFacebookOption className='icons' />
                    </a>
                    <a href="https://www.instagram.com" aria-label='link to instagram page' rel='noopener noreferrer' target='_blank'>
                        <AiOutlineInstagram className='icons' />
                    </a>
                    <a href="https://www.twitter.com" aria-label='link to twitter page' rel='noopener noreferrer' target='_blank'>
                        <TiSocialTwitter className='icons' />
                    </a>
                    <a href="https://www.linkedin.com" aria-label='link to linkedin page' rel='noopener noreferrer' target='_blank'>
                        <TiSocialLinkedin className='icons' />
                    </a>
                    <a href="https://www.pinterest.com" aria-label='link to pinterest page' rel='noopener noreferrer' target='_blank'>
                        <TiSocialPinterest className='icons' />
                    </a>
                </div>
                <a href="https://api.whatsapp.com/send?phone=+237691417118" aria-label='link to whatsapp page' rel='noopener noreferrer' target='_blank' className='absolute bottom-32 left-[50%] translate-x-[-50%] '>
                    <MdOutlineWhatsapp className='text-6xl bg-white rounded-full text-[#54eb72] duration-300 transition-all hover:bg-[#54eb72] hover:text-white' />
                </a>
            </div>
        </div>
    );
};

export default OurSpecialist;