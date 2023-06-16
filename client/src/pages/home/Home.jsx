import { Hero, OurServices, OurSpecialists } from '../../components';
import { useEffect } from 'react';


const Home = () => {

    useEffect(() => {
        document.title = 'Home - Medicare';
    }, []);

    return (
        <div className="flex flex-col gap-8 px-8 md:px-16 lg:px-32">
            <Hero />
            <OurServices />
            <OurSpecialists />
        </div>
    );
};

export default Home;