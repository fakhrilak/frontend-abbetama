import React, { useState } from 'react'
import './PWisata.css'
import {DATA} from "./DataPwisata"
import Detail from "../Detail/Detail"
const PWisata = () => {
    const [formData, setFormData] = useState({
        paket:"0"
    })
    const [count,setCount]=useState(0)
    const [show,setShow]=useState(false)
    const {paket} = formData
    const HandlePlus=()=>{
        if(count === DATA[paket].detail.length-1)
            setCount(0)
        else{
            setCount(count + 1)
        }
    }
    if(show === false){
        setTimeout(()=>{HandlePlus()},3000)
    }
    
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const [A,setA]=useState(0)
    const HandleOpendetail=(id)=>{
        setShow(true)
        setA(id - 1)
    }
    return (
        <div style={{paddingTop:140}}> 
            <div className="container-pwisata">
                <div className="container-header"/>
                <div className="text-pwisata">
                <select
                        name="paket"
                        onChange={(e) => {
                            onChange(e);
                          }}
                        >
                        <option value="" disabled selected>SELECT PAKET</option>
                            {DATA.map((buyer) => (
                                <option value={buyer.id}>
                                    {buyer.text}
                                </option>
                            ))} 
                        </select>
                </div>
                {!show && <div>
                    <h1>{DATA[paket].text}</h1>
                </div>}
                 <div className="gambar-pwisata">
                    <img src={DATA[paket].detail[count].gambar}/>
                </div>
                <div className="container-grid-detail">
                    {!show && <div className="grid-detail">
                        {DATA[paket].detail.map((detail)=>(
                            <div>
                                <div className="item">
                                    <img src={detail.gambar} onClick={()=>HandleOpendetail(detail.id)}/>
                                    <span className="caption">{detail.lokasi}</span>
                                </div>                               
                            </div>
                        ))}
                    </div>}
                    {show && <Detail paket={paket} detail={A} setShow={setShow} show={show} setCount={setCount}/>}
                </div>
            </div>
        </div>
    )
}

export default PWisata