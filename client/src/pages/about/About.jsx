import { Banner, SectionTitle } from "../../components";
import { FaHospital, FaHeartbeat } from 'react-icons/fa';
import { BsTelephoneFill } from 'react-icons/bs';
import { MdOutlineMedicalServices, MdOutlineWoman, MdOutlinePerson } from 'react-icons/md';
import { dw, bgAbout } from "../../assets";


const Values = ({ valueSubtitle, valueTitle }) => {
    return (
        <div>
            <h3 className="text-2xl text-[#0C031B] uppercase font-semibold">{valueTitle}</h3>
            <p className="md:w-[40ch] text-xl text-[#636262] mt-2">{valueSubtitle}</p>
        </div>
    );
};

const About = () => {
    return (
        <div className="py-20">
            <Banner title='about us' />
            <div className="px-8 md:px-16 lg:px-32">
                <SectionTitle subtitle='What we stand for' title='OUR VALUES' />
                <section className="flex flex-col  md:flex-row md:flex-wrap gap-8">
                    <div className="flex gap-8 items-center self-start flex-1">
                        <MdOutlinePerson className="text-6xl text-[#0cb8b6] transition-all duration-300 hover:text-[#636262] self-start" />
                        <Values
                            valueTitle='DOCTOR YOU CHOOSE'
                            valueSubtitle='Donec hendrerit rutrum nibh, id egestas magna sodales a. Fusce feugiat velit eu ante blandit facilisis.'
                        />
                    </div>
                    <div className="flex gap-8 items-center self-start flex-1">
                        <FaHeartbeat className="text-6xl text-[#0cb8b6] transition-all duration-300 hover:text-[#636262] self-start" />
                        <Values
                            valueTitle='YOUR HEALTHCARE'
                            valueSubtitle='Vestibulum imperdiet vestibulum laoreet. Integer elementum euismod ante sit amet elementum.'
                        />
                    </div>
                    <div className="flex gap-8 items-center self-start flex-1">
                        <BsTelephoneFill className="text-6xl text-[#0cb8b6] transition-all duration-300 hover:text-[#636262] self-start" />
                        <Values
                            valueTitle='ALWAYS THERE FOR YOU'
                            valueSubtitle='Mauris commodo lacinia nisi a fermentum. Donec risus magna, fringilla laoreet ullamcorper in, lobortis semper enim.'
                        />
                    </div>
                    <div className="flex gap-8 items-center self-start flex-1">
                        <MdOutlineWoman className="text-6xl text-[#0cb8b6] transition-all duration-300 hover:text-[#636262] self-start" />
                        <Values
                            valueTitle='NURSING STAFF'
                            valueSubtitle='Donec libero dui, dapibus non leo et, molestie faucibus risus. In fermentum tortor et posuere laoreet..'
                        />
                    </div>

                    <div className="flex gap-8 items-center self-start flex-1">
                        <MdOutlineMedicalServices className="text-6xl text-[#0cb8b6] transition-all duration-300 hover:text-[#636262] self-start" />
                        <Values
                            valueTitle='EMERGENCY SERVICES'
                            valueSubtitle='Pellentesque sagittis neque neque, ac ultrices neque tempor a. In . tellus sollicitudin eu.'
                        />
                    </div>
                    <div className="flex gap-8 items-center self-start flex-1">
                        <FaHospital className="text-6xl text-[#0cb8b6] transition-all duration-300 hover:text-[#636262] self-start" />
                        <Values
                            valueTitle='PREMIUM FACILITIES'
                            valueSubtitle='Donec hendrerit rutrum nibh, id egestas magna sodales a. Fusce feugiat velit eu ante blandit facilisis.'
                        />
                    </div>

                </section>
            </div>
            <div className="h-[85vh] my-16">
                <div className="h-full w-full bg-cover bg-center  relative "
                    style={{
                        backgroundImage: `url(${bgAbout})`
                    }}
                >
                    <img src={dw} alt="doctor" className="absolute left-[50%] translate-x-[-50%] lg:left-16 lg:translate-x-0 h-[90%] top-[10%]" />
                </div>

                {/* <div className="w-full h-full left-0 top-0 b-0  absolute">
                </div> */}
            </div>

        </div>
    );
};

export default About;