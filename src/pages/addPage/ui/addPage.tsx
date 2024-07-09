import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useUnit} from "effector-react";

import {ModalForm} from "widgets/modalForm";
import {getCurrApplicationsFx, $currPage} from "entities/application";
import {FormErrorsType} from "shared/lib/types";
import {getErrors, hasErrors, postApplicationById, postLastId} from "pages/addPage";
import {$lastIdGetStatus, getLastIdFx} from "pages/addPage";

import s from "shared/ui/modalStyle/modal.module.scss";
import {$currApplication, handleUpdateCurrApplication} from "entities/application";

export const AddPage: React.FC = () => {
    const navigate = useNavigate();
    const currPage = useUnit($currPage);
    const {loadingLastId, errorLastId, lastId} = useUnit($lastIdGetStatus);
    const app = useUnit($currApplication);

    useEffect(() => {
        handleUpdateCurrApplication({
            id: lastId.toString(), phone: '', name: "", accidentType: "", priority: "", address: "", coordinates: [47.222110, 39.718808]
        });
    }, [lastId])

    const [error, setError] = useState<FormErrorsType>({
        address: false,
        accidentType: false,
        priority: false,
        name: false,
        phone: false,
        coordinates: false
    })

    useEffect(() => {
        getLastIdFx().then(r => handleUpdateCurrApplication({ phone: '', name: "", accidentType: "", priority: "", address: "",
            coordinates: [47.222110, 39.718808], id: r.data.toString()}));
    }, [])


    const handleClose = () => {
        navigate('/statement');
    }

    const handleSubmit = () => {
        const currError = getErrors(app);
        setError(currError);
        if (!hasErrors(currError)) {
            postApplicationById(app);
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

                                <ModalForm error={error}/>
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
    )
};