import { NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="wrapper">
            <nav className="navbar" id="nav">
                <div className="navbar__content">
                    <NavLink to={"/"}>
                        <div className="navbar__link b1">
                            Landing Page
                        </div>
                    </NavLink>

                    <NavLink to={"/slider"}>
                        <div className="navbar__link b1">
                            Slider
                        </div>
                    </NavLink>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;