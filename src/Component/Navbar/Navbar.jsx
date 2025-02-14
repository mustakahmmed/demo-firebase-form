import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="flex justify-between">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/registration">Registartion</NavLink>
            </div>
        </div>
    );
};

export default Navbar;