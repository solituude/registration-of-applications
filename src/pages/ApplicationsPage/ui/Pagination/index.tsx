import React from "react";


// const handleChoosePage = (page: number) => {
//     logStore.getAppsArrayByPage(page);
// }

const Pagination: React.FC = () => {
    return(
        <div>
            {
                // Array.from({length: logStore.countPages}, (_, index) => (
                //     <button onClick={() => handleChoosePage(index + 1)}>{index + 1}</button>
                // ))
            }
        </div>
    );
}

export default Pagination;