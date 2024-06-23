import React from "react";
import {observer} from "mobx-react-lite";
import logStore from "../../store/LogStore";

const handleChoosePage = (page: number) => {
    logStore.getAppsArrayByPage(page);
}

const Pagination: React.FC = observer(() => {

    return(
        <div>
            <button onClick={() => handleChoosePage(1)}>1</button>
            <button onClick={() => handleChoosePage(2)}>2</button>
        </div>
    );
})

export default Pagination;