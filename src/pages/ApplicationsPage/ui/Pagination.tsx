import React from "react";
import {observer} from "mobx-react-lite";
import logStore from "../../../shared/model/LogStore";

const handleChoosePage = (page: number) => {
    logStore.getAppsArrayByPage(page);
}

const Pagination: React.FC = observer(() => {
    return(
        <div>
            {
                Array.from({length: logStore.countPages}, (_, index) => (
                    <button onClick={() => handleChoosePage(index + 1)}>{index + 1}</button>
                ))
            }
        </div>
    );
})

export default Pagination;