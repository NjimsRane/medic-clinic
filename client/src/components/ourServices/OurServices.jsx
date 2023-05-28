import { HomeTitles, OurService } from "../../components";
import { cared, service, team, emergency, booking, support } from '../../assets';


const OurServices = () => {

    const ourServiceData = [
        {
            id: 1,
            img: booking,
            title: 'online booking',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt molestiae alias aperiam ut atque, harum necessitatibus? Magnam, tempore veritatis.'
        },
        {
            id: 2,
            img: team,
            title: 'qualified doctors',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt molestiae alias aperiam ut atque, harum necessitatibus? Magnam, tempore veritatis.'
        },
        {
            id: 3,
            img: service,
            title: 'private support',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt molestiae alias aperiam ut atque, harum necessitatibus? Magnam, tempore veritatis.'
        },
        {
            id: 4,
            img: cared,
            title: 'well cared',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt molestiae alias aperiam ut atque, harum necessitatibus? Magnam, tempore veritatis.'
        },
        {
            id: 5,
            img: emergency,
            title: 'need emergency',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt molestiae alias aperiam ut atque, harum necessitatibus? Magnam, tempore veritatis.'
        },
        {
            id: 6,
            img: support,
            title: '24 service',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt molestiae alias aperiam ut atque, harum necessitatibus? Magnam, tempore veritatis.'
        }
    ];

    return (
        <div>
            <HomeTitles
                title='our services'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi deserunt molestiae alias aperiam ut.Commodi deserunt molestiae alias aperiam ut.'
            />
            <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
                {ourServiceData.map(service => (

                    <OurService
                        key={service.id}
                        img1={service.img}
                        title={service.title}
                        desc={service.desc}
                    />

                ))}
            </div>
        </div>
    );
};

export default OurServices;