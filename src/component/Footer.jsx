import img from "../image/Group 40071 (2).png"
const Footer = () => {
    return (
        <div>
             <footer className="footer p-10 bg-gray-800 text-white">
                <aside>
                    <img className="pl-32" src={img} alt="" />
                <h1 className='text-3xl font-bold text-white  text-center py-2  '>The <span className="text-5xl text-green-500">Nature</span> of Travel</h1>
                    <p>Providing reliable tech since 1992</p>
                </aside> 
                 
                <nav>
                    <h6 className="footer-title">CALL US</h6> 
                    <a className="link link-hover">+7(111)123456789</a>
                    <a className="link link-hover">+1(999)987654321</a>
                    <a className="link link-hover">+9(555)6541123987</a>
                </nav> 
                <nav>
                    <h6 className="footer-title">WRITE</h6> 
                    <a className="link link-hover">contact@rasif.com</a>
                    <a className="link link-hover">username@website.com</a>
                    <a className="link link-hover">rasif@gmail.com</a>
                </nav>
                <nav>
                    <h6 className="footer-title">VISIT</h6> 
                    <a className="link link-hover">1873 CUFL Road</a>
                    <a className="link link-hover">Bairag,Anowara,SentMartin</a>
                    <a className="link link-hover">BD</a>
                </nav>
                </footer>
        </div>
    );
};

export default Footer;