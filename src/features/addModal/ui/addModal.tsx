import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useUnit} from "effector-react";

import {ModalForm} from "shared/ui/modalForm";
import {ApplicationType} from "shared/lib/types";
import {getErrors, hasErrors, postApplicationById, postLastId} from "features/addModal";
import {FormErrorsType} from 'shared/lib/types';
import {getCurrApplicationsFx} from "features/infoByPage";
import {$currPage} from "features/infoByPage";
import {$lastIdGetStatus, getLastIdFx} from "features/addModal";

import s from "features/editModal/ui/modal.module.scss";

export const AddModal: React.FC = () => {
    const navigate = useNavigate();
    const currPage = useUnit($currPage);
    const {loadingLastId, errorLastId, lastId} = useUnit($lastIdGetStatus);
    const [application, setApplication] = useState<ApplicationType>({
        id: lastId.toString(), phone: '', name: "", accidentType: "", priority: "", address: "",
        coordinates: [47.222110, 39.718808]
    });
    const [error, setError] = useState<FormErrorsType>({
        address: false,
        accidentType: false,
        priority: false,
        name: false,
        phone: false,
        coordinates: false
    })

    useEffect(() => {
        getLastIdFx().then(r => setApplication({...application, id: r.data.toString()}));
    }, [])


    const handleClose = () => {
        navigate('/statement');
    }

    const handleSubmit = () => {
        const currError = getErrors(application);
        setError(currError);
        if (!hasErrors(currError)) {
            postApplicationById(application);
            getCurrApplicationsFx(currPage);
            postLastId(lastId + 1);
            handleClose();
        }
    }
    return (
        <div className={s.modal_wrapper}>
            <div className={s.modal}>
                <div className={s.body}>
                    {errorLastId ? <>Ошибка в создании заявки</> :

                        loadingLastId ? <>Загрузка...</> :

                            <>
                                <span className={s.header}>
                                    Создание заявки № {lastId}
                                </span>

                                <ModalForm application={application} setApplication={setApplication} error={error}/>
                            </>
                    }
                </div>

                <div className={s.footer}>
                    <button onClick={() => handleSubmit()}
                            className={s.save__button}>
                         <span className={s.save__text}>
                            Сохранить
                        </span>
                    </button>
                    <button onClick={() => handleClose()}
                            className={s.close__button}>
                        <span className={s.close__text}>Закрыть</span>
                    </button>
                </div>
            </div>
        </div>
        // если после
    )
};