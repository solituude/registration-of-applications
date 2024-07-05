import React, {useEffect, useState} from "react";
import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";

import {getApplicationById, putApplicationById} from "features/editModal";
import {ApplicationType, FormErrorsType} from "shared/lib/types";
import {$currPage} from "features/infoByPage";
import {getCurrApplicationsFx} from "features/infoByPage";
import { ModalForm } from 'shared/ui/modalForm';

import s from './modal.module.scss';
import {getErrors, hasErrors} from "features/addModal";

export const EditModal: React.FC = () => {
    const currPage = useUnit($currPage);
    const navigate = useNavigate();
    const idApplication = window.location.pathname.slice(11, window.location.pathname.length);
    const [error, setError] = useState<FormErrorsType>({
        address: false,
        accidentType: false,
        priority: false,
        name: false,
        phone: false,
        coordinates: false
    })

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
        const currError = getErrors(application);
        setError(currError);
        if (!hasErrors(currError)) {
            putApplicationById(application);
            getCurrApplicationsFx(currPage);
            handleClose();
        }
    }

    return (
        <div className={s.modal_wrapper}>
            <div className={s.modal}>
                <div className={s.body}>
                    <span className={s.header}>Редактирование Заявки № {idApplication}</span>
                    <ModalForm application={application} setApplication={setApplication} error={error}/>
                </div>

                <div className={s.footer}>
                    <button onClick={() => handleSubmit()} className={s.save__button}>
                        <span className={s.save__text}>
                            Сохранить
                        </span></button>
                    <button onClick={() => handleClose()} className={s.close__button}><span className={s.close__text}>Закрыть</span></button>
                </div>
            </div>
        </div>
    );
};
