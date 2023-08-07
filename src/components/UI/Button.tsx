
const Button = (props: {handleOpen: Function}) => {

    return (
        <button onClick={() => props.handleOpen()} className="button s4">Contact sales</button>
    );
};

export default Button;