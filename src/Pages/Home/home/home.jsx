import Banner from "../Banner/Banner";
import Gallary from "../Gallary/Gallary";
import PopulerClasses from "../PopulerClasses/PopulerClasses";
import Reviews from "../Reviews/Reviews";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <PopulerClasses></PopulerClasses>
            <Gallary></Gallary>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;