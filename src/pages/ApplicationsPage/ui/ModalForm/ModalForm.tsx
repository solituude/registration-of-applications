import React from "react";
import s from "../EditModal/modal.module.scss";
import {ACCIDENT_TYPES, PRIORITY_TYPES} from "../../../../shared/types/types";
import {ModalFormProps} from "../../lib/types";
import MapView from "../MapView/MapView";

const ModalForm: React.FC<ModalFormProps> = ({application, setApplication}) => {
    return (
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
                application && setApplication({...application, priority: e.target.value})} id="priority">
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
            <MapView lat={application.coordinates[0]} lon={application.coordinates[1]} />
        </form>
    )
}

export default ModalForm;