import React from 'react';
import s from './SuperButton.module.css'
type PropsType={
    children?: React.ReactNode
    name?:string,
    callBack: () => void
    color?: string
    disabled?: boolean
}

export const SuperButton:React.FC<PropsType> = (props) => {
    const {name, callBack, color, ...restProps} = props
    const onClickHandler=()=>{
        callBack()
    }
    //const finalClassName = `${s.button} ${s.default} `
   // const finalClassName = `${s.button}  ${color === 'red' ? s.red : s.default } ${restProps.disabled ? s.disabled : ''} `
     const finalClassName = `${s.button}  ${color === 'red' ? s.red : color === 'secondary' ? s.secondary : s.default } ${restProps.disabled ? s.disabled : ''} `
    return (
        <button className={finalClassName} onClick={onClickHandler}>{restProps.children}</button>
    );
};

//-------------------------------------------------------
// export const SuperButton:React.FC<PropsType> = ({name, callBack, ...props}) => {
//     const onClickHandler=()=>{
//         callBack()
//     }
//     return (
//         <button onClick={onClickHandler}>{name}</button>
//     );
// };