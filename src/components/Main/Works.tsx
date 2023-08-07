import phone from '../../assets/phone.png';

const Works = () => {

    const data = [
        ['How Budss Works', 'How Budss Works', 'How Budss Works', 'How Budss Works'],
        ['How Budss Works', 'How Budss Works', 'How Budss Works', 'How Budss Works'],
        ['How Budss Works', 'How Budss Works', 'How Budss Works', 'How Budss Works'],
    ]

    return (
        <section className="works">
            <div className="works__content">
                <div className="works__row">
                {data.map((array, index) => (
                    <ul key={index} className="works__list">
                    {array.map((item, index) => (
                        <li key={index} className="works__block t1">{item}</li>
                    ))}
                    </ul>
                ))}
                </div>
                <picture>
                    <source type="image/webp" srcSet={phone}/>
                    <img className='works__picture' src={phone}/>
                </picture>
            </div>
        </section>
    );
};

export default Works;