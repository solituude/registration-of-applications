import React from "react";
import {PaginationProps} from "../../types/types";
import {handleUpdatePage} from "../../model";

const Pagination: React.FC<PaginationProps> = (pagesData) => {
    return(
        <div>
            {
                pagesData.prev ? <button onClick={() => handleUpdatePage(pagesData.prev)}>
                    prev
                </button> : null
            }
            {
                Array.from({length: pagesData.countPages}, (_, index) => (
                    <button onClick={() => handleUpdatePage(index + 1)}>
                        {index + 1}
                    </button>
                ))
            }
            {
                pagesData.next ? <button onClick={() => handleUpdatePage(pagesData.next)}>
                    next
                </button> : null
            }
        </div>
    );
}

export default Pagination;