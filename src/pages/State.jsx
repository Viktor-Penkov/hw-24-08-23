import React, { useState } from 'react';
import s from '../components/styles/state.module.css'

const State = () => {
    const [background, setBackgruond]= useState("#fff")


    return (
        <div>
            <ul style={{display:"flex",}}>
                <li style ={{backgroundColor:"red", listStyle:"none", width:"20px", height:"20px", borderRadius:"50%",cursor:"pointer", marginRight:"20px"}} onClick={()=>setBackgruond("red")}></li>
                <li style ={{backgroundColor:"black", listStyle:"none", width:"20px", height:"20px", borderRadius:"50%",cursor:"pointer", marginRight:"20px"}}onClick={()=>setBackgruond("black")}></li>
                <li style ={{backgroundColor:"green", listStyle:"none", width:"20px", height:"20px", borderRadius:"50%",cursor:"pointer", marginRight:"20px"}}onClick={()=>setBackgruond("green")}></li>
            </ul>
            <div className={s.loader} style={{backgroundColor:`${background}`}}></div>
        </div>
    );
}

export default State;
