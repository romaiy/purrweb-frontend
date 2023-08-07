import { useState } from "react";
import close from "../../assets/close.svg";
import ModalSubmit from "../ModalSubmit";
import InputMask from "react-input-mask";

import usa from '../../assets/usa.png';
import ru from '../../assets/ru.png';

const Modal = (props: {handleClose: Function}) => {
    const [name, setName] = useState<string>('');
    const [nameInvalid, setNameInvalid] = useState<boolean>(false);

    const [email, setEmail] = useState<string>('');
    const [emailInvalid, setEmailInvalid] = useState<boolean>(false);

    const [number, setNumber] = useState<string>('');
    const [numberInvalid, setNumberInvalid] = useState<boolean>(false);

    const [company, setCompany] = useState<string>('');
    const [website, setWebsite] = useState<string>('');

    const [submit, setSubmit] = useState<boolean>(false);

    const handleSubmit = (event: any) => {
        event.preventDefault();
        setSubmit(true);
    }
    
    return (
        <div className="modal">
            <div className="modal__content">
                <img className='modal__close' src={close} onClick={() => props.handleClose()}/>
                {submit ? <ModalSubmit handleCLose={props.handleClose}/> : 
                <form className="modal__form" onSubmit={handleSubmit}>
                    <div className="modal__input">
                        <label className="label b3" htmlFor="name">Name <span style={{color: '#EC1211'}}>*</span></label>
                        <input
                            placeholder="Enter name"
                            type="text"
                            id="name"
                            name="name"
                            className="input"
                            required
                            style={nameInvalid ? {border: '1px solid #EC1211'} : {}}
                            onInvalid={() => setNameInvalid(true)}
                            onChange={event => setName(event.target.value)}
                            onInput={() => setNameInvalid(false)}
                            value={name}
                        />
                        <div 
                            style={nameInvalid ? {display: 'flex', color: '#EC1211'} 
                            : {display: 'none'}} 
                            className="modal__error b7"
                        >
                                This field is required.
                        </div>
                    </div>
                    <div className="modal__input">
                        <label className="label b3" htmlFor="email">Email <span style={{color: '#EC1211'}}>*</span></label>
                        <input
                            placeholder="Enter email"
                            type="email"
                            id="email"
                            name="email"
                            className="input"
                            style={emailInvalid ? {border: '1px solid #EC1211'} : {}}
                            required
                            onInvalid={() => setEmailInvalid(true)}
                            onChange={event => setEmail(event.target.value)}
                            onInput={() => setEmailInvalid(false)}
                            value={email}
                        />
                        <div 
                            style={emailInvalid ? {display: 'flex', color: '#EC1211'} 
                            : {display: 'none'}} 
                            className="modal__error b7"
                        >
                                This field is required.
                        </div>
                    </div>
                    <div className="modal__input">
                        <label className="label b3" htmlFor="number">Phone number <span style={{color: '#EC1211'}}>*</span></label>

                        <InputMask
                            mask="+7 999 999 99 99"
                            className="input"
                            placeholder="+ 1 900 000 00 00 "
                            type="tel"
                            id="number"
                            name="number"
                            required
                            style={numberInvalid ? {border: '1px solid #EC1211',
                            backgroundImage: `url(${(number.length < 1) ? usa : ru})`, 
                            backgroundRepeat: 'no-repeat', backgroundPosition: 'center left', paddingLeft: '48px'
                            } : 
                            {backgroundImage: `url(${(number.length < 1) ? usa : ru})`, 
                            backgroundRepeat: 'no-repeat', backgroundPosition: 'center left', paddingLeft: '48px'}}
                            onInvalid={() => setNumberInvalid(true)}
                            onChange={event => setNumber(event.target.value)}
                            onInput={() => setNumberInvalid(false)}
                            value={number}
                        />
                        <div 
                            style={numberInvalid ? {display: 'flex', color: '#EC1211'} 
                            : {display: 'none'}} 
                            className="modal__error b7"
                        >
                                This field is required.
                        </div>
                    </div>
                    <div className="modal__input">
                        <label className="label b3" htmlFor="company">Company</label>
                        <input
                            placeholder="Enter company"
                            type="text"
                            id="company"
                            name="company"
                            className="input"
                            onChange={event => setCompany(event.target.value)}
                            value={company}
                        />
                    </div>
                    <div className="modal__input">
                        <label className="label b3" htmlFor="website">Website/Store URL</label>
                        <input
                            placeholder="Enter Website/Store URL"
                            type="text"
                            id="website"
                            name="website"
                            className="input"
                            onChange={event => setWebsite(event.target.value)}
                            value={website}
                        />
                    </div>
                    {(nameInvalid || numberInvalid || emailInvalid) ? 
                        <div className="modal__error-big">Please fill in all required fields</div> : <></>
                    }
                    <p className="modal__text b5">
                        By submitting this form you are agreeing to Budss’s 
                        <span style={{color: "#954CED"}} className="b6"> Privacy Policy</span> and 
                        <span style={{color: "#954CED"}} className="b6"> Terms of Use</span>
                    </p>
                    <button 
                        className="button s4"
                        onClick={() => console.log(1)} 
                        disabled={(nameInvalid || numberInvalid || emailInvalid) ||
                        (!name || !email || !number) || (number[number.length - 1] === '_')}
                    >
                        Contact sales
                    </button>
                </form>}
            </div>
            <div onClick={() => props.handleClose()} className="modal__owerlay"></div>
        </div>
    );
};

export default Modal;