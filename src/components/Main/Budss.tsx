import { useEffect, useState } from "react";

const Budss = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        function handleResize() {
            setIsMobile(window.innerWidth <= 503);
        }
    
        window.addEventListener('resize', handleResize);
        handleResize();
    
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const data = [
        {
            title: 'Turn your customers into loyal influencers',
            description: 'Budss helps businesses harness the exponential power of loyal customers for acquisition and retention.'
        },
        {
            title: 'Harness the power of buying in bulk',
            description: 'Get at least 2X more sales with Budss Buying  Groups.\
            Your customer base will grow exponentially as your customers add\
            their friends & family to your personalized group.'
        },
        {
            title: 'Supercharge Loyalty With Instant Cash Back',
            description: 'Budss allows for shoppers to earn immediate cash back at their favorite stores.'
        },
        {
            title: 'Seasoned with AI and Gamification',
            description: 'AI programming creates a personalized customer journey,\
            offering recommendations for their next purchase and optimizing rewards for after purchase.'
        },
    ]

    return (
        <section className="budss">
            <div className="budss__content">
                <div className="budss__column">
                    <h2 className="budss__heading t3">
                        Why Budss
                    </h2>
                    <p className="budss__text s1">
                        We Provide Advanced Payment Solutions {!isMobile ? <br/> : <></>}
                        <span className="selection-big"><span>To Grow Your Business</span></span>
                    </p>
                    <ul className="budss__list">
                        {data.map(item => (
                            <li key={item.title}>
                                <h3 className="budss__title t5">{item.title}</h3>
                                <p className="budss__description s6">{item.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Budss;