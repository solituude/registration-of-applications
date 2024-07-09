import React from "react";
import {handleUpdatePage, $currApplicationsGetStatus} from "entities/application";
import s from './pagination.module.scss';
import {useUnit} from "effector-react";
import leftArrowIcon from 'shared/lib/icons/leftArrowIcon.svg';
import rightArrowIcon from 'shared/lib/icons/rightArrowIcon.svg';

export const Pagination: React.FC = () => {
    const {loading, error, data} = useUnit($currApplicationsGetStatus);

    return (
        <div className={s.pagination__container}>
            {
                data.prev ? <button onClick={() => handleUpdatePage(data.prev)}
                                    className={s.pagination__item}>
                    <img src={leftArrowIcon} alt={"left"} className={s.pagination__arrow}/>
                </button> : null
            }
            {
                Array.from({length: data.pages}, (_, index) => (
                    <button key={index}
                            onClick={() => handleUpdatePage(index + 1)}
                            className={data.prev + 1 === index + 1 ? s.pagination__item_active : s.pagination__item}>

                        {index + 1}
                    </button>
                ))
            }
            {
                data.next ? <button onClick={() => handleUpdatePage(data.next)}
                                    className={s.pagination__item}>
                    <img src={rightArrowIcon} alt={"right"} className={s.pagination__arrow}/>
                </button> : null
            }
        </div>
    );
};