
const Info = () => {
    const data = [
        {
            title: '15%',
            description: 'Increase in Purchase Amount'
        },
        {
            title: '30%',
            description: 'Growth in Annual Sales'
        },
        {
            title: '10%',
            description: 'Growth in New Customers'
        }
    ]

    return (
        <section className="info">
            <div className="info__content">
                <ul className="info__list">
                    {data.map(item => (
                        <li key={item.title}>
                            <h4 className="info__title t3">{item.title}</h4>
                            <p className="info__text s2">{item.description}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Info;