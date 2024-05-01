import { IoLocationOutline } from "react-icons/io5";
import { LuCircleDollarSign } from "react-icons/lu";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaEye } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";

import { CgNametag } from "react-icons/cg";
import { FaGoogle } from "react-icons/fa6";
import { FaStreetView } from "react-icons/fa";
import { MdAccessTime } from "react-icons/md";





const ListItem = ({travel}) => {
    const {email,name,photo,touristSpotName,countryName,location,averageCost,description,seasonality,totalVisitor,travelTime} = travel
    return (
        
    //     <div className="hero  bg-base-200 mt-10 ">
    //     <div className="hero-content flex-col lg:flex-row mr-24">
    //         <img src={photo} className="max-w-lg rounded-lg shadow-2xl mr-36" />
    //         <div>
    //         <h1 className="text-6xl font-bold text-amber-700 pb-20">{touristSpotName}</h1>
    //         <div className="flex items-center p-1 pr-40">
    //             <LuCircleDollarSign className="text-xl text-amber-700"></LuCircleDollarSign>
    //             <h1 className="text-xl text-gray-500">Average cost: {averageCost}</h1>
    //         </div>
    //         <div className="flex items-center p-1">
    //             <FaEye className="text-xl text-amber-700"></FaEye>
    //             <h1 className="text-xl text-gray-500">Total Visitors Per-Year: {totalVisitor}</h1>
    //         </div>
    //         <div className="flex items-center p-1">
    //             <IoMdTime className="text-xl text-amber-700"></IoMdTime>
    //             <h1 className="text-xl text-gray-500">Travel Time: {travelTime}</h1>
    //         </div>
           
    //         <div className="flex items-center p-1">
    //             <TiWeatherCloudy className="text-xl text-amber-700"></TiWeatherCloudy>
    //             <h1 className="text-xl text-gray-500">Seasonality: {seasonality}</h1>
    //         </div>
            

    //         <button className="btn btn-primary m-2 bg-amber-700">See More....</button>
    //         </div>
    //     </div>
    // </div>   


    <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src={photo} alt="Shoes" /></figure>
    <div className="card-body">
        <h2 className="card-title">{touristSpotName}</h2>
        <p>{description}</p>
            <div className="flex items-center">
                <CgNametag></CgNametag>
                <h1 className="font-bold px-3">{name}</h1>
            </div>
            <div className="flex items-center">
                <FaGoogle></FaGoogle>
                <h1 className="font-bold px-3">{email}</h1>
            </div>
            <div className="flex items-center">
                <IoLocationOutline></IoLocationOutline>
                <h1 className="font-bold px-3"> {location}</h1>
            </div>
            <div className="flex items-center">
                <LuCircleDollarSign></LuCircleDollarSign>
                <h1 className="font-bold px-3"> {averageCost}</h1>
            </div>
            <div className="flex items-center">
                <TiWeatherCloudy></TiWeatherCloudy>
                <h1 className="font-bold px-3"> {seasonality}</h1>
            </div>
            <div className="flex items-center">
                <FaStreetView></FaStreetView>
                <h1 className="font-bold px-3"> {totalVisitor}</h1>
            </div>
            <div className="flex items-center">
                <MdAccessTime></MdAccessTime>
                <h1 className="font-bold px-3"> {travelTime}</h1>
            </div>
            <div>

            </div>
        <div className="card-actions flex justify-between">
        <button className="btn btn-primary text-lg bg-amber-700">Delete....</button>
        <button className="btn btn-primary text-lg bg-amber-700">Update....</button>

        </div>
    </div>
</div>
    );
};

export default ListItem;