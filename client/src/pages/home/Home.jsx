import { OurServices, OurSpecialists } from '../../components';


const Home = () => {
    return (
        <div className="container flex flex-col gap-8">
            <OurServices />
            <OurSpecialists />
        </div>
    );
};

export default Home;