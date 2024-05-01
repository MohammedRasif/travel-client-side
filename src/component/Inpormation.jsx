import img1 from "../image/gggggg.png"
import { SlLike } from "react-icons/sl";
import { LuCircleDollarSign } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa6";
import { LuHeartHandshake } from "react-icons/lu";

const Inpormation = () => {
    return (
        <div className="flex items-center mx-20 mt-20">
            <div className="text-xl">
                <h1 className="text-green-600 font-bold text-6xl">Why Booking With Us...?</h1>
                <h1 className="text-gray-700 py-10">Praesent commodo cursus magna, vel scelerisque nisl <br /> consectetur et. Aenean eu leo quam. Pellentesque ornare sem <br /> lacinia.</h1>
                <div className="flex items-center py-2">
                    <SlLike className="text-green-600 font-bold text-2xl"></SlLike>
                    <h1 className="pl-4">All placges and activiates are carefully picked by us.</h1>
                </div>
                <div className="flex items-center py-2">
                    <LuCircleDollarSign className="text-green-600 font-bold text-2xl"></LuCircleDollarSign>
                    <h1 className="pl-4">Best price guaranteee & Hassle free!</h1>
                </div>
                <div className="flex items-center py-2">
                    <FaRegStar className="text-green-600 font-bold text-2xl"></FaRegStar>
                    <h1 className="pl-4">We are an award winning agency.</h1>
                </div>
                <div className="flex items-center py-2">
                    <LuHeartHandshake className="text-green-600 font-bold text-2xl"></LuHeartHandshake>
                    <h1 className="pl-4">Trusted by more than 80,000 customers.</h1>
                </div>
                <button className="bg-green-500 my-10 px-10 py-4">Find Out Morw..</button>
            </div>
            <div>
                <img className="ml-20" src={img1} alt="" />
            </div>
        </div>
    );
};

export default Inpormation;