import React from "react";
import {PaginationProps} from "../../types/types";
import {handleUpdatePage} from "../../../pages/ApplicationsPage/model/currPageModel";
import s from './pagination.module.scss';

const Pagination: React.FC<PaginationProps> = (pagesData) => {
    return (
        <div className={s.pagination__container}>
            {
                pagesData.prev ? <button onClick={() => handleUpdatePage(pagesData.prev)}
                                         className={s.pagination__item}>
                    &lt;
                </button> : null
            }
            {
                Array.from({length: pagesData.countPages}, (_, index) => (
                    <button key={index} onClick={() => handleUpdatePage(index + 1)}
                            className={pagesData.prev + 1 === index + 1 ? s.pagination__item_active : s.pagination__item}>

                        {index + 1}
                    </button>

                ))
            }
            {
                pagesData.next ? <button onClick={() => handleUpdatePage(pagesData.next)}
                                         className={s.pagination__item}>
                    &gt;
                </button> : null
            }
        </div>
    );
}

export default Pagination;