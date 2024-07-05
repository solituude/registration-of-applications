import React from "react";
import {PRIORITY_TYPES, PriorityChipProps} from '../../lib/types';
import s from './priorityChip.module.scss';

export const PriorityChip: React.FC<PriorityChipProps> = ({priority}) => {
    const priorityStyleClass = `${s.chip__container} ${s[`chip__container_${priority}`]}`;
    const labelStyleClass = `${s[`chip__text_${priority}`]}`;

    type PriorityTypeKey = keyof typeof PRIORITY_TYPES;

    const isPriorityTypeKey = (key: string): key is PriorityTypeKey => {
        return key in PRIORITY_TYPES;
    }

    return(
        <div className={priorityStyleClass}>
            <span className={labelStyleClass}>
                {isPriorityTypeKey(priority) ? PRIORITY_TYPES[priority] : null}
            </span>
        </div>
    )
};