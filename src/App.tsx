import React from 'react';
import logo from './logo.svg';
import './App.css';
import {SuperButton} from "./component/SuperButton";
import {Adidas} from "./component/Adidas";

function App() {
    const prices = [
        { id: 1, model: "HTML&CSS", price: 100201 },
        { id: 2, model: "JS", price: 100205 },
        { id: 3, model: "ReactJS", price: 100251 },
        { id: 4, model: "ReactJS", price: 100251 }
    ]

  return (
    <div className="App">
     {/*<SuperButton name={'RedButton'} callBack={()=>{}}/>*/}
     <SuperButton callBack={()=>{}} color={'red'}> Bitton 1 </SuperButton >
     <SuperButton callBack={()=>{}} color={'secondary'}> Bitton 2 </SuperButton >
     <SuperButton callBack={()=>{}} disabled> Bitton 3 </SuperButton >

        <Adidas prices = {prices} >
            <SuperButton callBack={()=>{}} color={'red'}> Bitton 1 </SuperButton >
            <SuperButton callBack={()=>{}} color={'secondary'}> Bitton 2 </SuperButton >
            <SuperButton callBack={()=>{}} disabled> Bitton 3 </SuperButton >
        </Adidas>
        <hr/>
        <Adidas prices = {prices}>
            <SuperButton callBack={()=>{}} disabled> Bitton 3 </SuperButton >
            <div> SuperDIV</div>
        </Adidas>
        <hr/>
        <Adidas prices = {prices} />
        <hr/>
    </div>
  );
}

export default App;
