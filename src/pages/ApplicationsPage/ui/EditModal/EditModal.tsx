import React, {useEffect, useState} from "react";

import s from './modal.module.scss';
import {useNavigate} from "react-router-dom";
import {getApplicationById, putApplicationById} from "../../../../shared/api/api";
import {ApplicationType} from "../../../../shared/types/types";
import {useUnit} from "effector-react";
import {$currPage} from "../../model/currPageModel";
import {getCurrApplicationsFx} from "../../model/currApplicationsModel";
import ModalForm from "../ModalForm/ModalForm";

const EditModal: React.FC = () => {
    const currPage = useUnit($currPage);
    const navigate = useNavigate();
    const idApplication = window.location.pathname.slice(11, window.location.pathname.length);

    const [application, setApplication] = useState<ApplicationType>({
        id: "0", phone: '', name: "", accidentType: "", priority: 0, address: "", coordinates: [47.222110, 39.718808]
    });
    useEffect(() => {
        getApplicationById(Number(idApplication)).then(r => {
            setApplication(r);
            console.log(r);
        });
    }, [])

    const handleClose = () => {
        navigate('/statement');
    }

    const handleSubmit = () => {
        putApplicationById(application);
        getCurrApplicationsFx(currPage);
        handleClose();
    }

    return (
        <div className={s.modal_wrapper}>
            <div className={s.modal}>
                <div className={s.body}>
                    Редактирование Заявки № {idApplication}
                    <ModalForm application={application} setApplication={setApplication}/>
                </div>

                <div className={s.footer}>
                    <button onClick={() => handleSubmit()}>Сохранить</button>
                    <button onClick={() => handleClose()}>Закрыть</button>
                </div>
            </div>
        </div>
    );
};

export default EditModal;