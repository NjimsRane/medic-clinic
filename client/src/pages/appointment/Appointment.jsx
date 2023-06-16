import { AiFillCaretDown } from 'react-icons/ai';
import { Banner, SectionTitle } from '../../components';
import { useEffect } from 'react';

const Appointment = () => {

    useEffect(() => {
        document.title = 'Appointment - Medicare';
    }, []);

    return (
        <div className="py-20">
            <Banner title='Appointments' />
            <div className="px-8 md:px-16 lg:px-32">
                <SectionTitle subtitle='Book a visit with a doctor' title='make an appointment now' />

                <div className="w-full">
                    <form action="#" className="w-full">
                        <div className="appointmentForm flex flex-col space-y-8">
                            <div>
                                <label htmlFor="name">your name (required)</label>
                                <input type="text" id='name' />
                            </div>
                            <div>
                                <label htmlFor="email">your email (required)</label>
                                <input type="email" id='email' />
                            </div>
                        </div>
                        <div className="selectContainer">
                            <h3>our doctors</h3>

                            <div className="selectBox flex flex-col w-full">

                                <div className="optionContainer active bg-[#ebebeb] text-[#0e0e0e] w-full transition-all duration-500 overflow-hidden order-1">


                                    <div className="option">
                                        <input type="radio" className="radio" id="cardiologist" name="doctors" />
                                        <label htmlFor="cardiologist">cardiologist</label>
                                    </div>
                                    <div className="option">
                                        <input type="radio" className="radio" id="kinesisth" name="doctors" />
                                        <label htmlFor="kinesisth">kinesisth</label>
                                    </div>
                                    <div className="option">
                                        <input type="radio" className="radio" id="terapist" name="doctors" />
                                        <label htmlFor="terapist">terapist</label>
                                    </div>
                                    <div className="option">
                                        <input type="radio" className="radio" id="surgeon" name="doctors" />
                                        <label htmlFor="surgeon">surgeon</label>
                                    </div>
                                    <div className="option">
                                        <input type="radio" className="radio" id="radiologist" name="doctors" />
                                        <label htmlFor="radiologist">radiologist</label>
                                    </div>
                                    <div className="option">
                                        <input type="radio" className="radio" id="dermatologist" name="doctors" />
                                        <label htmlFor="dermatologist">dermatologist</label>
                                    </div>
                                </div>
                                <div className="selected bg-[#ebebeb] mb-2 h-[4rem] flex items-center justify-between rounded  w-full relative order-first">
                                    <span className="text-[#0e0e0e]">Select your doctor</span>
                                    <span className='transition-all duration-500'>
                                        <AiFillCaretDown />
                                    </span>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Appointment;