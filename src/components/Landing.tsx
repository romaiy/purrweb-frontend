import { useEffect, useState } from 'react';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import About from './Main/About';
import Brend from './Main/Brend';
import Budss from './Main/Budss';
import Grow from './Main/Grow';
import Hero from './Main/Hero';
import Info from './Main/Info';
import Logos from './Main/Logos';
import Works from './Main/Works';
import '../style/style.css';
import ModalCookies from './UI/ModalCookies';
import Modal from './UI/Modal';

const Landing = () => {

    const [cookies, setCookies] = useState<boolean>(false);
    const [open, setOpen] = useState<boolean>(false);

    useEffect (() => {
        setCookies(true);
    }, []);

    const handleCookiesClose = () => {
        setCookies(false);
    };

    const handleModalOpen = () => {
        setOpen(true)
    };

    const handleModalClose = () => {
        setOpen(false);
    };

    return (
        <div className='wrapper'>
            {(cookies && !open) && <ModalCookies handleClose={handleCookiesClose}/>}
            {open && <Modal handleClose={handleModalClose}/> }
            <Header handleOpen={handleModalOpen}/>
            <main className='main'>
                <Hero handleOpen={handleModalOpen}/>
                <About/>
                <Works/>
                <Info/>
                <Budss/>
                <Grow handleOpen={handleModalOpen}/>
                <Brend/>
                <Logos/>
            </main>
            <Footer handleOpen={handleModalOpen}/>*/
        </div>
    );
};

export default Landing;