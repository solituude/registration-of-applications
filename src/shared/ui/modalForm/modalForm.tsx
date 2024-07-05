import React from "react";
import s from "features/editModal/ui/modal.module.scss";
import {ACCIDENT_TYPES, PRIORITY_TYPES} from "../../lib/types";
import {ModalFormProps} from "shared/lib/types";
import {MapView} from "shared/ui/mapView";

export const ModalForm: React.FC<ModalFormProps> = ({application, setApplication, error}) => {
    return (
        <form className={s.form__container}>
            <label htmlFor="address"
                   className={s.label__text}>
                Адрес: {error.address ? <span className={s.error__text}>Введите адрес</span> : null}
            </label>
            <input id="address"
                   type="text"
                   value={application?.address}
                   onChange={(e) => application && setApplication({...application, address: e.target.value})}/>


            <label htmlFor="accidentType"
                   className={s.label__text}>
                Тип аварии: {error.accidentType ? <span className={s.error__text}>Выберите тип аварии</span> : null}
            </label>
            <select value={application?.accidentType}
                    onChange={(e) => application && setApplication({...application, accidentType: e.target.value})}
                    id="accidentType">
                <option value="">Тип аварии</option>
                <option value="blockage">{ACCIDENT_TYPES.blockage}</option>
                <option value="leak">{ACCIDENT_TYPES.leak}</option>
                <option value="breakthrough">{ACCIDENT_TYPES.breakthrough}</option>
                <option value="lowQualityWater">{ACCIDENT_TYPES.lowQualityWater}</option>
                <option value="outdoorColumn">{ACCIDENT_TYPES.outdoorColumn}</option>
                <option value="other">{ACCIDENT_TYPES.other}</option>
            </select>

            <label htmlFor="priority"
                   className={s.label__text}>
                Приоритет: {error.priority ? <span className={s.error__text}>Выберите приоритет</span> : null}
            </label>
            <select value={application?.priority}
                    onChange={(e) => application && setApplication({...application, priority: e.target.value})}
                    id="priority">
                <option value="">Приоритет</option>
                <option value="4">{PRIORITY_TYPES["4"]}</option>
                <option value="3">{PRIORITY_TYPES["3"]}</option>
                <option value="2">{PRIORITY_TYPES["2"]}</option>
                <option value="1">{PRIORITY_TYPES["1"]}</option>
            </select>

            <label htmlFor="name"
                   className={s.label__text}>
                Имя:  {error.name ? <span className={s.error__text}>Введите свое имя</span> : null}
            </label>
            <input id="name"
                   type="text"
                   value={application?.name}
                   onChange={(e) => application && setApplication({...application, name: e.target.value})}/>

            <label htmlFor="phone"
                   className={s.label__text}>
                Номер телефона: {error.phone ? <span className={s.error__text}>Введите верный номер телефона</span> : null}
            </label>
            <input id="phone"
                   type={"tel"}
                   value={application?.phone}
                   onChange={(e) => {
                       application && setApplication({...application, phone: e.target.value});
                   }} />
            {error.coordinates ? <span className={s.error__text}>Выберите точку на карте</span> : null}
            <MapView lat={application.coordinates[0]} lon={application.coordinates[1]} />
        </form>
    )
}