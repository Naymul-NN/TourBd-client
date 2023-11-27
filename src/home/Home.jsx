import Banner from "./Banner";
import Map from "./Map";
import Overview from "./Overview";
import Story from "./Story";
import ToutType from "./ToutType";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Overview></Overview>
            <ToutType></ToutType>
            <Story></Story>
            <Map></Map>
        </div>
    );
};

export default Home;