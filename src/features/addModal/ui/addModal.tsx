import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useUnit} from "effector-react";

import {ModalForm} from "shared/ui/modalForm";
import {ApplicationType} from "shared/lib/types";
import {postApplicationById, postLastId} from "features/addModal";
import {getCurrApplicationsFx} from "features/infoByPage";
import {$currPage} from "features/infoByPage";
import {$lastIdGetStatus, getLastIdFx} from "features/addModal";

import s from "features/editModal/ui/modal.module.scss";

export const AddModal: React.FC = () => {
    const navigate = useNavigate();
    const currPage = useUnit($currPage);
    const { loadingLastId, errorLastId, lastId } = useUnit($lastIdGetStatus);
    const [application, setApplication] = useState<ApplicationType>({
        id: lastId.toString(), phone: '', name: "", accidentType: "", priority: "", address: "",
        coordinates: [47.222110, 39.718808]
    });

    useEffect(() => {
        getLastIdFx().then(r => setApplication({...application, id: r.data.toString()}));
    }, [])


    const handleClose = () => {
        navigate('/statement');
    }
    const handleSubmit = () => {
        postApplicationById(application);
        getCurrApplicationsFx(currPage);
        postLastId(lastId + 1);
        handleClose();
    }
    return(
        <div className={s.modal_wrapper}>
            <div className={s.modal}>
                <div className={s.body}>
                    { errorLastId ? <>Ошибка в создании заявки</> :

                        loadingLastId ? <>Загрузка...</> :

                            <>
                                Создание заявки № {lastId}
                                <ModalForm application={application} setApplication={setApplication}/>
                            </>
                    }
                </div>

                <div className={s.footer}>
                    <button onClick={() => handleSubmit()}>Сохранить</button>
                    <button onClick={() => handleClose()}>Закрыть</button>
                </div>
            </div>
        </div>
        // если после
    )
};