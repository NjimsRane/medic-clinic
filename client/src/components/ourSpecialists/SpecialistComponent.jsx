import { OtherSpecialists } from "../../components";
import { child, heart2, chiropractor } from '../../assets';
import { FaTooth, FaHeartbeat } from 'react-icons/fa';
import { TbMassage } from 'react-icons/tb';


const SpecialistComponent = () => {
    return (
        <div className="py-20 flex flex-col gap-8 lg:flex-row">
            <OtherSpecialists
                imgs={child}
                subtitle='For your child whitest teeths'
                title='DENTIST'
                desc='Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et dis parturient.'
                illustration={<FaTooth />}

            />
            <OtherSpecialists
                imgs={heart2}
                subtitle='Got a broken heart?'
                title='CARDIOLOGIST'
                desc='Nullam eleifend lectus a tortor interdum, non sodales ante vehicula. Proin consequat, at commodo.'
                illustration={<FaHeartbeat />}
            />
            <OtherSpecialists
                imgs={chiropractor}
                subtitle='Neck or back pain?'
                title='CHIROPRACTOR'
                desc='Duis scelerisque faucibus nisi sed lacinia. Curabitur ipsum elit, cursus id dui quis, dictum laoreet neque.'
                illustration={<TbMassage />}

            />
            <div className="bg-[lightgrey] p-8 flex flex-1 flex-col rounded gap-4">
                <h4 className="text-center uppercase text-3xl font-semibold">working hours</h4>
                <p className="text-center text-lg text-[#444] w-[50%] mx-auto">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim, consequatur!</p>
                <ul className="flex flex-col gap-4 workingHours">
                    <li>
                        <p>monday</p>
                        <span>8:00 AM - 2:30 PM</span>
                    </li>
                    <li>
                        <p>tuesday</p>
                        <span>8:00 AM - 2:30 PM</span>
                    </li>
                    <li>
                        <p>wednesday</p>
                        <span>8:00 AM - 7:00 PM</span>
                    </li>
                    <li>
                        <p>thursday</p>
                        <span>8:00 AM - 7:00 PM</span>
                    </li>
                    <li>
                        <p>friday</p>
                        <span>8:00 AM - 7:00 PM</span>
                    </li>
                    <li>
                        <p>saturday</p>
                        <span>closed</span>
                    </li>
                    <li>
                        <p>sunday</p>
                        <span>closed</span>
                    </li>
                </ul>
            </div>


        </div>
    );
};

export default SpecialistComponent;