import tt from "../../assets/tt.svg";
import twitter from '../../assets/twitter.svg';
import fasebook from '../../assets/Facebook .svg';
import inst from '../../assets/inst.svg';

const Brend = () => {

    return (
        <section className="brend">
            <div className="brend__content">
                <div className="brend__row">
                    <div className="brend__column">
                        <h3 className="brend__heading t2">Your Brand Awareness Maters</h3>
                        <p className="brend__text s6">
                            Budss is a husle free solution to put your brand on any 
                            digital surface including Instagram, Facebook, Twitter and TikTok
                        </p>
                    </div>
                    <ul className="brend__list">
                        <li>
                            <img src={fasebook}/>
                        </li>
                        <li>
                            <img src={twitter}/>
                        </li>
                        <li>
                            <img src={inst}/>
                        </li>
                        <li>
                            <img src={tt}/>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}

export default Brend;