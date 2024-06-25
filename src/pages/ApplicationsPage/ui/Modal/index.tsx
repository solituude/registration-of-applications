import React from "react";

import s from './modal.module.scss';
import {useNavigate} from "react-router-dom";

const Modal: React.FC = () => {
    const navigate = useNavigate();
    const onCloseButtonClick = () => {
        navigate('/statement');
    }

    return (
        <div className={s.modal_wrapper}>
            <div className={s.modal}>
                <div className={s.body}>
                    Click on the close button to close the modal.
                </div>
                <div className={s.footer}>
                    <button onClick={() => onCloseButtonClick()}>Close Modal</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;