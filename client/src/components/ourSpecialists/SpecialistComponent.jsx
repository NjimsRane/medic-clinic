import { OtherSpecialists } from "../../components";
import { child, heart2, chiropractor } from '../../assets';
import { FaTooth, FaHeartbeat } from 'react-icons/fa';
import { TbMassage } from 'react-icons/tb';

const schedules = [
    {
        day: 'monday',
        hours: '8:00 AM - 2: 30 PM'

    },
    {
        day: 'tuesday',
        hours: '8:00 AM - 2: 30 PM'
    },
    {
        day: 'wenesday',
        hours: '8:00 AM - 7: 00 PM'
    },
    {
        day: 'thursday',
        hours: '8:00 AM - 7:00 PM'
    },
    {
        day: 'friday',
        hours: '8:00 AM - 7: 00 PM'
    },
    {
        day: 'saturday',
        hours: 'closed'
    },
    {
        day: 'sunday',
        hours: 'closed'
    }
];

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
                    {
                        schedules.map((schedule, index) => (
                            <li key={index}>
                                <p className="capitalize">{schedule.day}</p>
                                <span>{schedule.hours}</span>
                            </li>
                        ))
                    }
                </ul>
            </div>


        </div>
    );
};

export default SpecialistComponent;