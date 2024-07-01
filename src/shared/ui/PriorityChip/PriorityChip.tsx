import React from "react";
import {PRIORITY_TYPES, PriorityChipProps} from '../../types/types';
import s from './priorityChip.module.scss';

const PriorityChip: React.FC<PriorityChipProps> = ({priority}) => {
    const priorityStyleClass = `${s.chip__container} ${s[`chip__container_${priority}`]}`;
    const labelStyleClass = `${s[`chip__text_${priority}`]}`;
    return(
        <div className={priorityStyleClass}>
            <span className={labelStyleClass}>
                {priority === "1" || priority === "2" || priority === "3" || priority === "4" ?
                    PRIORITY_TYPES[priority] : null}
            </span>
        </div>
    )
}

export default PriorityChip;