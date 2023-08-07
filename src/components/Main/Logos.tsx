import l1 from '../../assets/l1.svg';
import l2 from '../../assets/l2.svg';
import l3 from '../../assets/l3.svg';
import l4 from '../../assets/l4.svg';
import l5 from '../../assets/l5.svg';

const Logos = () => {

    return (
        <section className="logos">
            <div className="logos__content">
                <ul className="logos__list">
                    <li>
                        <img src={l1}/>
                    </li>
                    <li>
                        <img src={l2}/>
                    </li>
                    <li>
                        <img src={l3}/>
                    </li>
                    <li>
                        <img src={l4}/>
                    </li>
                    <li>
                        <img src={l5}/>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Logos;