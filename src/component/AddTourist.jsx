import Swal from 'sweetalert2'


const AddTourist = () => {
    const handleAddTravel = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photo = form.photo.value;
        const touristSpotName = form.touristSpotName.value;
        const countryName = form.countryName.value;
        const location = form.location.value;
        const averageCost = form.averageCost.value;
        const description = form.description.value;
        const seasonality = form.seasonality.value;
        const totalVisitor = form.totalVisitor.value;
        const travelTime = form.travelTime.value;

        const newTravelCard = {email,name,photo,touristSpotName,countryName,location,averageCost,description,seasonality,totalVisitor,travelTime}
        console.log(newTravelCard);

        fetch('https://travel-server-sigma.vercel.app/travel',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newTravelCard)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'User Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
        })
        
    }
    return (
        <div>
        <h1 className="text-6xl text-amber-700 text-center">Add Tourist Spot</h1>
        <form onSubmit={handleAddTravel} >
            <div className="m-20 p-7 bg-gray-300 rounded-xl">
                
                    <div className="flex">
                    <div className="form-control p-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-green-600   text-2xl">User Email....</span>
                        </label>
                        <label >
                            <input type="text" placeholder="Enter User Email" name="email" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control p-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-green-600  text-2xl">User Name....</span>
                        </label>
                        <label >
                            <input type="text" name="name" id="" placeholder="Enter User Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                <div className="form-control p-2 ">
                        <label className="label">
                            <span className="label-text text-green-600  text-2xl">Photo Url....</span>
                        </label>
                        <label >
                            <input type="text" placeholder="Enter Photo Url" name="photo" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                <div className="flex">
                    <div className="form-control p-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-green-600  text-2xl">Tourists Spot Name....</span>
                        </label>
                        <label >
                            <input type="text" placeholder="Enter Spot Name" name="touristSpotName" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control p-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-green-600  text-2xl">Country Name....</span>
                        </label>
                        <label >
                            <input type="text" name="countryName" id="" placeholder="Enter Country Name" className="input input-bordered w-full" />
                        </label>
                    </div>
                </div>
                <div className="flex">
                    <div className="form-control p-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-green-600  text-2xl">Location....</span>
                        </label>
                        <label >
                            <input type="text" placeholder="Enter Location" name="location" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control p-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-green-600  text-2xl">Average cost....</span>
                        </label>
                        <label >
                            <input type="text" name="averageCost" id="" placeholder="Enter Amount" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                    <div className="form-control p-2 ">
                        <label className="label">
                            <span className="label-text text-green-600  text-2xl">Description....</span>
                        </label>
                        <textarea className="textarea textarea-accent" name="description" placeholder="Description"></textarea>
                    </div>
                <div className="flex">
                    <div className="form-control p-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-green-600  text-2xl">Seasonality....</span>
                        </label>
                        <label >
                            <input type="text" placeholder="Enter Season" name="seasonality" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control p-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-green-600  text-2xl">Total Visitors Per-Year....</span>
                        </label>
                        <label >
                            <input type="text" name="totalVisitor" id="" placeholder="Total Visitors Per-Year" className="input input-bordered w-full" />
                        </label>
                    </div>
                    <div className="form-control p-2 md:w-1/2">
                        <label className="label">
                            <span className="label-text text-green-600  text-2xl"> Travel Time....</span>
                        </label>
                        <label >
                            <input type="text" placeholder="Enter Travel time" name="travelTime" id="" className="input input-bordered w-full" />
                        </label>
                    </div>
                    
                </div>
                
                <button className=" bg-green-600 py-4 w-full  my-5 rounded-xl text-2xl ">Add Now</button>

            </div>
        </form>
    </div>
    );
};

export default AddTourist;