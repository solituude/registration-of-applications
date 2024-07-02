import React from "react"
import {ACCIDENT_TYPES, AccidentChipProps} from "../../types/types";

import s from './accidentChip.module.scss';

const AccidentChip: React.FC<AccidentChipProps> = ({accident}) => {
    const accidentStyleClass = `${s.chip__container} ${s[`chip__container_${accident}`]}`;
    const labelStyleClass = `${s[`chip__text_${accident}`]}`;

    type AccidentTypeKey = keyof typeof ACCIDENT_TYPES;
    const isAccidentTypeKey = (key: string): key is AccidentTypeKey => {
        return key in ACCIDENT_TYPES;
    };
    return(
        <div className={accidentStyleClass}>
            <span className={labelStyleClass}>
                {isAccidentTypeKey(accident) ? ACCIDENT_TYPES[accident] : null}
            </span>
        </div>
    )
}

export default AccidentChip;