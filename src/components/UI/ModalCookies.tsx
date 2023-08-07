import close from '../../assets/close.svg'

const ModalCookies = (props: {handleClose: Function}) => {

    return (
        <div className="modal-cook">
            <div className="modal-cook__content">
                <img className='modal-cook__close' src={close} onClick={() => props.handleClose()}/>
                <div className="modal-cook__row">
                    <p className="modal-cook__text s7">
                        This website uses cookies to ensure you get the best experience on our website. 
                        They also allow us to analyze user behavior in order to constantly improve the website for you.
                    </p>
                    <div className="modal-cook__btn-row">
                        <button className="button" onClick={() => props.handleClose()}>Accept</button>
                        <button className="button v2" onClick={() => props.handleClose()}>Decline</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalCookies;