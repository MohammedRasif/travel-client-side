import img1 from "../image/sydney-34.png"
import img2 from "../image/bus-driver-22.png"
import img3 from "../image/china-83.png"
import img4 from "../image/pilot-91.png"



const Main = () => {
    return (
        <div className=" grid lg:grid-cols-4  grid-cols-1 pt-96 ml-10">
            <div className="flex items-center">
                <img className="h-28 w-24" src={img4} alt="" />
                <div className="pl-5">
                    <h1 className="text-3xl text-red-600 font-bold">Explore Things</h1>
                    <h1 className="text-xl">Parturient Magna</h1>
                </div>
            </div>
            <div className="flex items-center">
                <img className="h-28 w-24" src={img3} alt="" />
                <div className="pl-5" >
                    <h1 className="text-3xl text-red-600 font-bold">Attraction Tickets</h1>
                    <h1 className="text-xl">Attraction Tickets</h1>
                </div>
            </div>
            <div className="flex items-center">
                <img className="h-28 w-24" src={img2} alt="" />
                <div className="pl-5">
                    <h1 className="text-3xl text-red-600 font-bold">Transportation</h1>
                    <h1 className="text-xl">Ligula Euism Pharet</h1>
                </div>
            </div>
            <div className="flex items-center">
                <img className="h-28 w-24" src={img1} alt="" />
                <div className="pl-5">
                    <h1 className="text-3xl text-red-600 font-bold">Museum </h1>
                    <h1 className="text-xl">Porta Ligula Justo</h1>
                </div>
            </div>
        </div>
    );
};

export default Main;