import submit from '../assets/submit.png';

const ModalSubmit = (props: {handleCLose: Function}) => {

    return (
        <div className="modal__submit">
            <img className='modal__img' src={submit}/>
            <h3 className="modal__heading s1">Thank you!</h3>
            <p className="modal__submit-text s3">
                Thank you, we have received 
                your application and will contact you soon!
            </p>
            <button onClick={() => props.handleCLose()} className="button button-submit">Super!</button>
        </div>
    );
};

export default ModalSubmit;