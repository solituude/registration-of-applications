import React, {useState} from "react";
import s from "../EditModal/modal.module.scss";
import ModalForm from "../ModalForm/ModalForm";
import {ApplicationType} from "../../../../shared/types/types";
import {useNavigate} from "react-router-dom";
import {postApplicationById} from "../../../../shared/api";
import {getCurrApplicationsFx} from "../../model";
import {useUnit} from "effector-react";
import {$currPage, $lastID, handleUpdateLastID} from "../../../../shared/model";

const AddModal: React.FC = () => {
    const navigate = useNavigate();
    const currPage = useUnit($currPage);
    const currId = useUnit($lastID);
    const [application, setApplication] = useState<ApplicationType>({
        id: currId.toString(), phone: '', name: "", accidentType: "", priority: 0, address: "", coordinates: ""
    });
    const handleClose = () => {
        navigate('/statement');
    }
    const handleSubmit = () => {
        postApplicationById(application);
        getCurrApplicationsFx(currPage);
        handleUpdateLastID(currId);
        handleClose();
    }
    return(
        <div className={s.modal_wrapper}>
            <div className={s.modal}>
                <div className={s.body}>
                    Создание заявки № {currId}
                    <ModalForm application={application} setApplication={setApplication}/>
                </div>

                <div className={s.footer}>
                    <button onClick={() => handleSubmit()}>Сохранить</button>
                    <button onClick={() => handleClose()}>Закрыть</button>
                </div>
            </div>
        </div>
    )
}

export default AddModal;