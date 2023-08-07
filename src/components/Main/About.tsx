import { useEffect, useState } from 'react';
import ab1 from '../../assets/about1.svg';
import ab2 from '../../assets/about2.svg';
import ab3 from '../../assets/about3.svg';
import ab4 from '../../assets/about4.svg';

import pic from '../../assets/aboutpic.png';

const About = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 990);
        }
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    const data = [
        {
            image: ab1,
            title: 'Contactless',
            text: 'Budss uses near field communication (NFC) for making contactless payments.',
            width: '321px'
        },
        {
            image: ab2,
            title: 'Increased Buying Power',
            text: 'Returning customers spend up to 3X more.',
            width: '301px'
        },
        {
            image: ab3,
            title: 'Analytics & Insights',
            text: 'Gain a holistic view into your customers’ buying behavior & purchasing patterns.',
            width: '306px'
        },
        {
            image: ab4,
            title: 'Fraud Protection',
            text: 'Budss handles all payments with a fraud prevention algorithm to flag high risk purchases & a user set PIN code to keep payment info secure.',
            width: '336.01px'
        },
    ]

    return (
        <section className="about">
            <div className="about__content container">
                <h2 className="about__heading t2">About Budss</h2>
                <div className="about__row">
                    <p className="about__text s1">
                        Payment as a service, powered 
                        seamlessly by our <span className='selection'><span>network of shoppers</span></span>
                    </p>

                    <ul className="about__list">
                        {data.map(item => (
                            <li style={{width: item.width}} key={item.title} className="about__block">
                            <img className="about__image" src={item.image}/>
                            <h3 className="about__tag t4">{item.title}</h3>
                            <p className="about__description s3">
                                {item.text}
                            </p>
                        </li>
                        ))}
                    </ul>
                    
                </div>
            </div>
            {isMobile ? <></> : 
            <picture>
                <source type="image/webp" srcSet={pic}/>
                <img className='about__picture' src={pic}/>
            </picture>}
        </section>
    );
};

export default About;