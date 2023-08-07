import Button from "../UI/Button";
import logo from '../../assets/logo.svg';
import { useEffect, useState } from "react";
import burger from '../../assets/Burger.svg';

const Header = (props: {handleOpen: Function}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 500);
        }
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header className="header">
            <div className="header__content container">
                <div className="header__row">
                    <img className="header__logo" src={logo}/>
                    {isMobile ? <img src={burger}/> : <Button handleOpen={props.handleOpen}/>}
                </div>
            </div>
        </header>
    );
};

export default Header;