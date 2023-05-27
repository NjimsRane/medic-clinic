import { HomeTitles, OurSpecialist } from "..";
import { dr1, dr2 } from '../../assets';


const OurSpecialists = () => {

    const ourSpecialistData = [
        {
            id: 1,
            img: dr1,
            name: 'njims rane',
            title: 'surgery'
        },
        {
            id: 2,
            img: dr2,
            name: 'john doe',
            title: 'anesthetic'
        },
        {
            id: 3,
            img: dr1,
            name: 'liza doe',
            title: 'orthopedic'
        },
        {
            id: 4,
            img: dr2,
            name: 'rane njims',
            title: 'cardiology'
        },

    ];

    return (
        <div>
            <HomeTitles
                title='our top specialists'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt molestiae alias aperiam ut.Commodi deserunt molestiae alias aperiam ut.'
            />
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4 px-8 md:px-24">
                {ourSpecialistData.map(specialist => (

                    <OurSpecialist
                        key={specialist.id}
                        img1={specialist.img}
                        name={specialist.name}
                        title={specialist.title}
                    />

                ))}
            </div>
        </div>
    );
};

export default OurSpecialists;