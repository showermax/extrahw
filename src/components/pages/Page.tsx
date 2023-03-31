import React from 'react';
import {PagesType} from "../data/dataState";
import {useParams} from "react-router-dom";

type PropsType = {
    pages: Array<PagesType>
}
export const Page = (props: PropsType) => {
    const params=useParams() //возвращает объект
    console.log(params)
    return (
        <div>
            <div>{props.pages[Number(params.id)].heading}</div>
            <div>{props.pages[Number(params.id)].about}</div>
        </div>
    );
};

