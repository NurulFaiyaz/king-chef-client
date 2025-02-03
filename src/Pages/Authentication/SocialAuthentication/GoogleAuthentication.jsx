import { Link, useNavigate } from "react-router-dom";
import UseInfo from "../../../Hooks/UseInfo";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const GoogleAuthentication = ({ query, suggestion, text2, link }) => {
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || '/'

    const { googleSignIn } = UseInfo()


    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                toast.success("Welcome to King Chef")
                navigate(from, { replace: true })
            })
            .catch(err => {
                console.log(err?.message)
            })
    }

    return (
        <div>
            <div className='text-center space-y-4 mb-10'>
                <p>{query}? <Link to={`/${link}`}>{suggestion}</Link></p>
                <p>{text2}</p>
                <button onClick={handleGoogleSignIn} className='btn w-2/3 text-xl rounded-none'><FcGoogle />Google</button>
            </div>
        </div>
    );
};

export default GoogleAuthentication;