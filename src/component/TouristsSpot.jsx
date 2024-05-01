
import img1 from "../image/beautiful-picture-male-silhouette-standing-wooden-stilts-water.jpg"
import img2 from "../image/coral-station-is-a-restaurant.jpg"
import img3 from "../image/cris-tagupa-lT7zmkth3o8-unsplash.jpg"
import img5 from "../image/kurt-cotoaga-FicJW813UHM-unsplash.jpg"
import img6 from "../image/Things-to-do-in-Coxs-Bazar00003.jpg"
import img7 from "../image/palm-trees-sky.jpg"
import img8 from "../image/sailboat-bow-on-water.jpg"

import { LuCircleDollarSign } from "react-icons/lu";
import { FaEye } from "react-icons/fa";
import { MdTimer } from "react-icons/md";
import { TiWeatherCloudy } from "react-icons/ti";
import { Link } from "react-router-dom"





const TouristsSpot = () => {

    return (

        <div className="mx-10 my-20">
            <h1 className="text-7xl text-center font-bold text-green-600 py-6">Tourists Spot</h1>
            <div className="hero  bg-base-200 mt-10 ">
                <div className="hero-content flex-col lg:flex-row mr-24">
                    <img src={img1} className="max-w-lg rounded-lg shadow-2xl mr-36" />
                    <div>
                    <h1 className="text-6xl font-bold text-amber-700 pb-20">Silhouette</h1>
                    <div className="flex items-center p-1 pr-40">
                        <LuCircleDollarSign className="text-xl text-amber-700"></LuCircleDollarSign>
                        <h1 className="text-xl text-gray-500">Average cost:- 3000</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <FaEye className="text-xl text-amber-700"></FaEye>
                        <h1 className="text-xl text-gray-500">Total Visitors Per-Year:- 80,000</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <MdTimer className="text-xl text-amber-700"></MdTimer>
                        <h1 className="text-xl text-gray-500">Travel Time:- Morning:-6:00 to Evening:6:00</h1>
                    </div>
                   
                    <div className="flex items-center p-1">
                        <TiWeatherCloudy className="text-xl text-amber-700"></TiWeatherCloudy>
                        <h1 className="text-xl text-gray-500">Seasonality:- Summer,Winter</h1>
                    </div>
                    

                    <Link ><button className="btn btn-primary m-2 bg-amber-700">See More....</button></Link>
                    </div>
                </div>
            </div>

            <div className="hero  bg-base-200 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse mr-24">
                    <img src={img2} className="max-w-lg rounded-lg shadow-2xl ml-36" />
                    <div>
                    <h1 className="text-6xl font-bold text-amber-700 pb-20">Coral restaurant</h1>
                    <div className="flex items-center p-1 pr-40">
                        <LuCircleDollarSign className="text-xl text-amber-700"></LuCircleDollarSign>
                        <h1 className="text-xl text-gray-500">Average cost:- 650</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <FaEye className="text-xl text-amber-700"></FaEye>
                        <h1 className="text-xl text-gray-500">Tota Visitors Per-Year:- 1500</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <MdTimer className="text-xl text-amber-700"></MdTimer>
                        <h1 className="text-xl text-gray-500">Open Time:- 24Hours </h1>
                    </div>
                   
                    <div className="flex items-center p-1">
                        <TiWeatherCloudy className="text-xl text-amber-700"></TiWeatherCloudy>
                        <h1 className="text-xl text-gray-500">Seasonality:- All Season</h1>
                    </div>
                    

                    <button className="btn btn-primary m-2 bg-amber-700">See More....</button>
                    </div>
                </div>
            </div>

            <div className="hero  bg-base-200 mt-10 ">
                <div className="hero-content flex-col lg:flex-row mr-24">
                    <img src={img3} className="max-w-lg rounded-lg shadow-2xl mr-36" />
                    <div>
                    <h1 className="text-6xl font-bold text-amber-700 pb-20">Cris tagupa</h1>
                    <div className="flex items-center p-1 pr-40">
                        <LuCircleDollarSign className="text-xl text-amber-700"></LuCircleDollarSign>
                        <h1 className="text-xl text-gray-500">Average cost:- 1000</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <FaEye className="text-xl text-amber-700"></FaEye>
                        <h1 className="text-xl text-gray-500">Tota Visitors Per-Year:- 10,000</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <MdTimer className="text-xl text-amber-700"></MdTimer>
                        <h1 className="text-xl text-gray-500">Travel_Time:- Morning:-6:00 to Night:-10:00</h1>
                    </div>
                   
                    <div className="flex items-center p-1">
                        <TiWeatherCloudy className="text-xl text-amber-700"></TiWeatherCloudy>
                        <h1 className="text-xl text-gray-500">Seasonality:- Summer,Winter</h1>
                    </div>
                    

                    <button className="btn btn-primary m-2 bg-amber-700">See More....</button>
                    </div>
                </div>
            </div>

            <div className="hero  bg-base-200 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse mr-24">
                    <img src={img6} className="max-w-lg rounded-lg shadow-2xl ml-60" />
                    <div>
                    <h1 className="text-6xl font-bold text-amber-700 pb-20">Dusa restaurant</h1>
                    <div className="flex items-center p-1 pr-40">
                        <LuCircleDollarSign className="text-xl text-amber-700"></LuCircleDollarSign>
                        <h1 className="text-xl text-gray-500">Average cost:- 700</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <FaEye className="text-xl text-amber-700"></FaEye>
                        <h1 className="text-xl text-gray-500">Tota Visitors Per-Year:- 70,000</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <MdTimer className="text-xl text-amber-700"></MdTimer>
                        <h1 className="text-xl text-gray-500">Travel Time:- 24Hours </h1>
                    </div>
                   
                    <div className="flex items-center p-1">
                        <TiWeatherCloudy className="text-xl text-amber-700"></TiWeatherCloudy>
                        <h1 className="text-xl text-gray-500">Seasonality:- All Season</h1>
                    </div>
                    

                    <button className="btn btn-primary m-2 bg-amber-700">See More....</button>
                    </div>
                </div>
            </div>

            <div className="hero  bg-base-200 mt-10 ">
                <div className="hero-content flex-col lg:flex-row mr-24">
                    <img src={img7} className="max-w-lg rounded-lg shadow-2xl mr-36" />
                    <div>
                    <h1 className="text-6xl font-bold text-amber-700 pb-20">Palm trees</h1>
                    <div className="flex items-center p-1 pr-40">
                        <LuCircleDollarSign className="text-xl text-amber-700"></LuCircleDollarSign>
                        <h1 className="text-xl text-gray-500">Average cost:-500</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <FaEye className="text-xl text-amber-700"></FaEye>
                        <h1 className="text-xl text-gray-500">Tota Visitors Per-Year:- 5,000</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <MdTimer className="text-xl text-amber-700"></MdTimer>
                        <h1 className="text-xl text-gray-500">Travel_Time:- Morning:-6:00 to Night:-10:00</h1>
                    </div>
                   
                    <div className="flex items-center p-1">
                        <TiWeatherCloudy className="text-xl text-amber-700"></TiWeatherCloudy>
                        <h1 className="text-xl text-gray-500">Seasonality:- All Season</h1>
                    </div>
                    

                    <button className="btn btn-primary m-2 bg-amber-700">See More....</button>
                    </div>
                </div>
            </div>

            <div className="hero  bg-base-200 mt-10">
                <div className="hero-content flex-col lg:flex-row-reverse mr-24">
                    <img src={img8} className="max-w-lg rounded-lg shadow-2xl ml-60" />
                    <div>
                    <h1 className="text-6xl font-bold text-amber-700 pb-20">Sailboat</h1>
                    <div className="flex items-center p-1 pr-40">
                        <LuCircleDollarSign className="text-xl text-amber-700"></LuCircleDollarSign>
                        <h1 className="text-xl text-gray-500">Average cost:- 2500</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <FaEye className="text-xl text-amber-700"></FaEye>
                        <h1 className="text-xl text-gray-500">Tota Visitors Per-Year:- 60,000</h1>
                    </div>
                    <div className="flex items-center p-1">
                        <MdTimer className="text-xl text-amber-700"></MdTimer>
                        <h1 className="text-xl text-gray-500">Travel Time:- Morning:-6:00 to Night:-10:00 </h1>
                    </div>
                   
                    <div className="flex items-center p-1">
                        <TiWeatherCloudy className="text-xl text-amber-700"></TiWeatherCloudy>
                        <h1 className="text-xl text-gray-500">Seasonality:- All Season</h1>
                    </div>
                    

                    <button className="btn btn-primary m-2 bg-amber-700">See More....</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default TouristsSpot;