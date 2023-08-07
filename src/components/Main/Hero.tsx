import Button from "../UI/Button";

import mainVector from "../../assets/mainVector.png";
import mainImg from "../../assets/mainImg.png";

const Hero = (props: {handleOpen: Function}) => {

    return (
        <section className="hero">
            <div className="hero__content container">
                <div className="hero__column">
                    <h1 className="hero__heading t2">Everyone is an Influencer</h1>
                    <p className="hero__text s6">
                        Budss is a payments as a service and WOM engine dedicated 
                        to acquisition and retention of customers to your business.
                    </p>
                    <Button handleOpen={props.handleOpen}/>
                </div>
            </div>
            <div className="hero__bg">
                <picture>
                    <source type="image/webp" srcSet={mainVector}/>
                    <img className='hero__vector' src={mainVector}/>
                </picture>
                <picture>
                    <source type="image/webp" srcSet={mainImg}/>
                    <img className='hero__img' src={mainImg}/>
                </picture>
            </div>
        </section>
    );
};

export default Hero;