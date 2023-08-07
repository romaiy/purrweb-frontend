import Button from "../UI/Button";

import goog from "../../assets/googleplay.png";
import app from "../../assets/appstore.png";
import logo from '../../assets/logo.svg';
import { useEffect, useState } from "react";

const Footer = (props: {handleOpen: Function}) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 399);
        }
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <footer className="footer">
            <div className="footer__content">
                <div className="footer__column">
                    <div className="footer__row-top">
                        <div className="footer__row">
                            <div className="footer__logo">
                                <img src={logo} alt="log"/>
                            </div>
                            {!isMobile ? 
                            <nav className="footer__nav">
                                <div className="s5">For Business</div>
                                <div className="s5">For Customers</div>
                            </nav> :
                            <nav className="footer__nav">
                                <div className="s5">For Business</div>
                                <div className="s5">For Customers</div>
                                <div className="s5">Privacy Policy</div>
                                <div className="s5">Terms Of Use - Seller</div>
                                <div className="s5">Terms of Use - Sellers & Customers</div>        
                            </nav>}
                        </div>
                        <div className="footer__row">
                            <Button handleOpen={props.handleOpen}/>
                            <div className="footer__download">
                                <img src={app} alt="appstore"/>
                                <img src={goog} alt="googleplay"/>
                            </div>
                        </div>
                    </div>
                    <div className="footer__line"></div>
                    <div className="footer__row-bottom">
                        <div className="footer__copy b5">
                            © Copyright 2023, All Rights Reserved by Budss
                        </div>
                        <ul className="footer__row" style={isMobile ? {display: 'none'} : {}}>
                            <li className="b6">Privacy Policy</li>
                            <li className="b6">Terms Of Use - Seller</li>
                            <li className="b6">Terms of Use - Sellers & Customers</li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;