import React, {useEffect, useState} from "react";
import {useUnit} from "effector-react";
import {useNavigate} from "react-router-dom";

import {getApplicationById, putApplicationById} from "pages/editPage";
import {FormErrorsType} from "shared/lib/types";
import {getCurrApplicationsFx, $currPage} from "entities/application";
import { ModalForm } from 'widgets/modalForm';

import s from 'shared/ui/modalStyle/modal.module.scss';
import {getErrors, hasErrors} from "pages/addPage";
import {$currApplication, handleUpdateCurrApplication} from "entities/application";

export const EditPage: React.FC = () => {
    const currPage = useUnit($currPage);
    const app = useUnit($currApplication);
    const navigate = useNavigate();
    const idApplication = window.location.pathname.slice(11, window.location.pathname.length);
    const [error, setError] = useState<FormErrorsType>({
        address: false,
        accidentType: false,
        priority: false,
        name: false,
        phone: false,
        coordinates: false
    });

    useEffect(() => {
        getApplicationById(Number(idApplication)).then(r => {
            handleUpdateCurrApplication(r);
            console.log(r);
        });
    }, [])

    const handleClose = () => {
        navigate('/statement');
    }

    const handleSubmit = () => {
        const currError = getErrors(app);
        setError(currError);
        if (!hasErrors(currError)) {
            putApplicationById(app);
            getCurrApplicationsFx(currPage);
            handleClose();
        }
    }

    return (
        <div className={s.modal_wrapper}>
            <div className={s.modal}>
                <div className={s.body}>
                    <span className={s.header}>Редактирование Заявки № {idApplication}</span>
                    <ModalForm error={error}/>
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
