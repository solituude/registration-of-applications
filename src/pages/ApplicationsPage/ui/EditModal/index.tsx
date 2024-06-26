import React, {useEffect, useState} from "react";

import s from './modal.module.scss';
import {useNavigate} from "react-router-dom";
import {getApplicationById, putApplicationById} from "../../../../shared/api";
import {ApplicationType} from "../../../../shared/types/types";
import {ACCIDENT_TYPES, PRIORITY_TYPES} from '../../../../shared/types/types';

const EditModal: React.FC = () => {
    const navigate = useNavigate();
    const idApplication = window.location.pathname.slice(11, window.location.pathname.length);

    const [application, setApplication] = useState<ApplicationType>({
        id: 0, phone: '', name: "", accidentType: "", priority: 0, address: "", coordinates: ""
    });
    useEffect(() => {
        getApplicationById(Number(idApplication)).then(r => setApplication(r));
    }, [])

    const handleClose = () => {
        navigate('/statement');
    }

    const handleSubmit = () => {
        putApplicationById(application).then(r => console.log(r));
        handleClose();
    }

    return (
        <div className={s.modal_wrapper}>
            <div className={s.modal}>
                <div className={s.body}>
                    Редактирование Заявки № {idApplication}
                    <form className={s.form__container}>
                        <label htmlFor="address">Адрес: </label>
                        <input id="address" type="text" value={application?.address} onChange={(e) =>
                            application && setApplication({...application, address: e.target.value})}/>

                        <label htmlFor="accidentType">Тип аварии: </label>
                        <select value={application?.accidentType} onChange={(e) =>
                            application && setApplication({...application, accidentType: e.target.value})} id="accidentType">
                            <option value="">Тип аварии</option>
                            <option value="blockage">{ACCIDENT_TYPES.blockage}</option>
                            <option value="leak">{ACCIDENT_TYPES.leak}</option>
                            <option value="breakthrough">{ACCIDENT_TYPES.breakthrough}</option>
                            <option value="lowQualityWater">{ACCIDENT_TYPES.lowQualityWater}</option>
                            <option value="outdoorColumn">{ACCIDENT_TYPES.outdoorColumn}</option>
                            <option value="other">{ACCIDENT_TYPES.other}</option>
                        </select>

                        <label htmlFor="priority">Приоритет: </label>
                        <select value={application?.priority} onChange={(e) =>
                            application && setApplication({...application, priority: Number(e.target.value)})} id="priority">
                            <option value="">Приоритет</option>
                            <option value="4">{PRIORITY_TYPES["4"]}</option>
                            <option value="3">{PRIORITY_TYPES["3"]}</option>
                            <option value="2">{PRIORITY_TYPES["2"]}</option>
                            <option value="1">{PRIORITY_TYPES["1"]}</option>
                        </select>

                        <label htmlFor="name">Имя: </label>
                        <input id="name" type="text" value={application?.name} onChange={(e) =>
                            application && setApplication({...application, name: e.target.value})}/>

                        <label htmlFor="phone">Номер телефона: </label>
                        <input id="name" inputMode={"tel"} value={application?.phone} onChange={(e) =>
                            application && setApplication({...application, phone: e.target.value})}/>

                    </form>
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