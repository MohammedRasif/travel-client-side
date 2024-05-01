import { FaGoogle } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
const SocialLoginBtn = () => {
    const handleGoogleSignIn= () =>{
        signInWithGoogle()
        .then(result => {
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div className="flex justify-center m-3 text-2xl">
                <button onClick={handleGoogleSignIn} className="pr-3"><FaGoogle></FaGoogle></button>
                <button className="pr-3"><FaFacebook></FaFacebook></button>
                <button><FaGithub></FaGithub></button>
        </div>
    );
};

export default SocialLoginBtn;