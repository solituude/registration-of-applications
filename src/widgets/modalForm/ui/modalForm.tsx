import React from "react";
import s from "shared/ui/modalStyle/modal.module.scss";
import {ACCIDENT_TYPES, PRIORITY_TYPES} from "shared/lib";
import {ModalFormProps} from "shared/lib";
import {MapView} from "features/mapViewModal";
import {useUnit} from "effector-react";
import {$currApplication, handleUpdateCurrApplication} from "entities/application";

export const ModalForm: React.FC<ModalFormProps> = ({error}) => {
    const app = useUnit($currApplication);
    return (
        <form className={s.form__container}>
            <div className={s.input__container}>
                <label htmlFor="address"
                       className={s.label__text}>
                    Адрес: {error.address ? <span className={s.error__text}>Введите адрес</span> : null}
                </label>
                <input id="address"
                       type="text"
                       value={app.address}
                       onChange={(e) => app && handleUpdateCurrApplication({...app, address: e.target.value})}/>

            </div>

            <div className={s.select__container}>
                <div className={s.select__item}>
                    <label htmlFor="accidentType"
                           className={s.label__text}>
                        Тип аварии: {error.accidentType ? <span className={s.error__text}>Выберите тип аварии</span> : null}
                    </label>
                    <select value={app.accidentType}
                            onChange={(e) => app && handleUpdateCurrApplication({...app, accidentType: e.target.value})}
                            id="accidentType">
                        <option value="">Тип аварии</option>
                        <option value="blockage">{ACCIDENT_TYPES.blockage}</option>
                        <option value="leak">{ACCIDENT_TYPES.leak}</option>
                        <option value="breakthrough">{ACCIDENT_TYPES.breakthrough}</option>
                        <option value="lowQualityWater">{ACCIDENT_TYPES.lowQualityWater}</option>
                        <option value="outdoorColumn">{ACCIDENT_TYPES.outdoorColumn}</option>
                        <option value="other">{ACCIDENT_TYPES.other}</option>
                    </select>
                </div>
                <div className={s.select__item}>
                    <label htmlFor="priority"
                           className={s.label__text}>
                        Приоритет: {error.priority ? <span className={s.error__text}>Выберите приоритет</span> : null}
                    </label>
                    <select value={app.priority}
                            onChange={(e) => app && handleUpdateCurrApplication({...app, priority: e.target.value})}
                            id="priority">
                        <option value="">Приоритет</option>
                        <option value="4">{PRIORITY_TYPES["4"]}</option>
                        <option value="3">{PRIORITY_TYPES["3"]}</option>
                        <option value="2">{PRIORITY_TYPES["2"]}</option>
                        <option value="1">{PRIORITY_TYPES["1"]}</option>
                    </select>
                </div>
            </div>

            <div className={s.input__container}>
                <label htmlFor="name"
                       className={s.label__text}>
                    Имя:  {error.name ? <span className={s.error__text}>Введите свое имя</span> : null}
                </label>
                <input id="name"
                       type="text"
                       value={app.name}
                       onChange={(e) => app && handleUpdateCurrApplication({...app, name: e.target.value})}/>
            </div>

            <div className={s.input__container}>
                <label htmlFor="phone"
                       className={s.label__text}>
                    Номер телефона: {error.phone ? <span className={s.error__text}>Введите верный номер телефона</span> : null}
                </label>
                <input id="phone"
                       type={"tel"}
                       value={app.phone}
                       onChange={(e) => {
                           app && handleUpdateCurrApplication({...app, phone: e.target.value});
                       }} />
            </div>


            {error.coordinates ? <span className={s.error__text}>Выберите точку на карте</span> : null}
            <MapView />
        </form>
    )
}