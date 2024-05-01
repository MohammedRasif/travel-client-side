import Footer from "./Footer";
import Header from "./Header";
import Inpormation from "./Inpormation";
import Listed from "./Listed";
import Main from "./Main";
import TouristsSpot from "./TouristsSpot";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Main></Main>
            
            <TouristsSpot></TouristsSpot>
            <Inpormation></Inpormation>
            <Footer></Footer>
        </div>
    );
};

export default Home;