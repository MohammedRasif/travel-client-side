

const Header = () => {
    return (
        <div className=' max-h-80'>
            <div className='bg-no-repeat bg-center bg-cover pb-20  ' style={{backgroundImage:`url("https://i.ibb.co/GQY1sJ2/photo.jpg")`}}>
              
                <h1 className='text-6xl font-bold text-white  text-center py-2 pt-36 '>The <span className="text-8xl text-green-500">Nature</span> of Travel</h1>
                <p className='py-2 text-white text-center '>Escape to a paradise of sun-kissed beaches and azure waters. Embark on an island  adventure where palm-fringed  shores beckon and <br /> tranquility reigns. Discover hidden  coves, vibrant coral reefs teeming with life, and lush tropical forests alive with <br /> exotic fauna. Indulge in thrilling water sports or unwind with a leisurely stroll along pristine sands. <br /> Whether seeking adventure or serenity, this island sanctuary promises an unforgettable retreat.</p>
                <div className='py-2 pb-40 text-center'>
                    <button className='p-3  btn btn-success  text-lg'>Explore Now</button>
                </div>
            </div>
        </div>

    );
};

export default Header;