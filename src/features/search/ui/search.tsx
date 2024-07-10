import React, {useEffect, useState} from "react";
import {searchIcon} from 'features/search';

import s from './search.module.scss';
import {
    RequestSearchType,
    $currPage,
    getSearchApplicationFx} from "entities/application";
import {useUnit} from "effector-react/effector-react.umd";

export const Search = () => {
    const [isHide, setHide] = useState<boolean>(true);
    const [text, setText] = useState<string>("");
    const currPage = useUnit($currPage);
    const params:RequestSearchType = {page: currPage, name: text};

    useEffect(() => {
        if (!isHide) {
            getSearchApplicationFx(params);
        }
    }, [currPage])
    return(
        <div onClick={() => setHide(false)}
             className={isHide ? s.search__container_hide : s.search__container_open}>

            <input value={text}
                   onChange={(e) => setText(e.target.value)}
                   className={isHide ? s.input__container_hide : s.input__container_show}/>

            <button onClick={() => !isHide && getSearchApplicationFx(params)} className={s.search__button}>
                <img src={searchIcon.default} className={s.search__icon} alt={"search"}/>
            </button>

        </div>
    )
}