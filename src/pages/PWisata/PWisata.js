import React, { useState } from 'react'
import g1 from "../../components/img/contents/makkah.png"
import g2 from "../../components/img/contents/WEBSITE ABBE/1.jpg"
import './PWisata.css'
const PWisata = () => {
    const [count,setCount]=useState(0)
    const DATA = [
        {
            gambar:g1,
            text:"PAKET RELIGI"
        },
        {
            gambar:g2,
            text:"PAKET TOUR AND TRAVEL"
        }]
    const HandleCount=()=>{
        if(count === DATA.length-1){
            setCount(0)
        }else{
            setCount(count+1)
        }
    }
    return (
        <div style={{paddingTop:140}}> 
            <div className="container-pwisata">
               <img src={DATA[count].gambar}/>
            </div>
            <div className="text-pwisata">
                <h1>{DATA[count].text}</h1>
            </div>
            <div className="next">
                <h3 onClick={()=>HandleCount()}>{"NEXT >>"}</h3>
            </div>

        </div>
    )
}

export default PWisata