import Button from "../UI/Button";

const Grow = (props: {handleOpen: Function}) => {

    return (
        <section className="grow">
            <div className="grow__content container">
                <div className="grow__column">
                    <h2 className="grow__heading t3">Let Your Business Grow</h2>
                    <Button handleOpen={props.handleOpen}/>
                </div>
            </div>
        </section>
    );
};

export default Grow;