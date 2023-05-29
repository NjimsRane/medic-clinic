import { Hero, OurServices, OurSpecialists } from '../../components';


const Home = () => {
    return (
        <div className="container flex flex-col gap-8">
            <Hero />
            <OurServices />
            <OurSpecialists />
        </div>
    );
};

export default Home;