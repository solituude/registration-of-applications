import React, {useEffect, useState} from "react";
import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";

import {getApplicationById, putApplicationById} from "features/editModal";
import {ApplicationType} from "shared/lib/types";
import {$currPage} from "features/infoByPage";
import {getCurrApplicationsFx} from "features/infoByPage";
import { ModalForm } from 'shared/ui/modalForm';

import s from './modal.module.scss';

export const EditModal: React.FC = () => {
    const currPage = useUnit($currPage);
    const navigate = useNavigate();
    const idApplication = window.location.pathname.slice(11, window.location.pathname.length);

    const [application, setApplication] = useState<ApplicationType>({
        id: "0", phone: '', name: "", accidentType: "", priority: "", address: "", coordinates: [47.222110, 39.718808]
    });


    useEffect(() => {
        getApplicationById(Number(idApplication)).then(r => {
            setApplication(r);
            // console.log(r);
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
