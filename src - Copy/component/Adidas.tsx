import React from 'react';
type PropsType = {
    prices: PricesType[]
    children?: React.ReactNode
}
type PricesType ={
    id:number
    model: string
    price: number
}
export const Adidas =(props: PropsType)=>{
    return (
        <div>
            {props.prices.map(el=><div><span>{el.id}</span><span>{el.model}</span><span>{el.price}</span></div>)}
            <div>{props.children}</div>
        </div>
    )

}