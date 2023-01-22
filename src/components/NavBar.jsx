import { Navbar, Button } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import UserServices from '../services/userServices.js'
import { useContext } from "react";
import { UserContext } from "../context/UserContext.jsx";

export default function NavBar() {
    const navigate = useNavigate();
    const { setUnloggedUser } = useContext(UserContext);

    const onclickLogin = () => {
        navigate('/login');
    }
    
    const onclickLogout = async () => {
        const result = UserServices.logoutUser();
        setUnloggedUser();
        navigate('/', {replace: true});
    }

    const onclickRegister = () => {
        navigate('/register');
    }

    return (
        <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 mb-4">
            <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
                <Link to="/">Jason Web Token</Link>
                
                <div >
                    <Button variant="gradient" size="sm" className="mx-2" onClick={onclickLogin}>
                        Login
                    </Button>
                    <Button variant="gradient" size="sm" className="mx-2" onClick={onclickLogout}>
                        Logout
                    </Button>
                    <Button variant="gradient" size="sm" className="mx-2" onClick={onclickRegister}>
                        Register
                    </Button>
                </div>
            </div>
        </Navbar>
    );
}