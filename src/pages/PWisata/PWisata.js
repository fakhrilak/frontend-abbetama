import React, { useState } from 'react'
import './PWisata.css'
import {DATA} from "./DataPwisata"
import {useHistory } from "react-router-dom"
const PWisata = () => {
    const [formData, setFormData] = useState({
        paket:"0"
    })
    const history = useHistory()
    const HandlePush=(id)=>{
        let detailpaket = DATA[paket].text
        history.push(`/detail/${detailpaket}/${id}`)
    }
    const [count,setCount]=useState(0)
    const {paket} = formData
    const HandlePlus=()=>{
        if(count === 2)
            setCount(0)
        else{
            setCount(count + 1)
        }
    }
    setTimeout(()=>HandlePlus(),3000)
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    console.log("this is paket",paket,count)
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
                        <option value="" disabled selected>PILIH PAKET</option>
                            {DATA.map((data) => (
                                <option value={data.id}>
                                    {data.text}
                                </option>
                            ))} 
                        </select>
                </div>
                <div>
                    <h1>{DATA[paket].text}</h1>
                </div>
                 <div className="gambar-pwisata">
                    <img src={DATA[paket].detail[count].gambar}/>
                </div>
                <div className="container-grid-detail">
                    <div className="grid-detail">
                        {DATA[paket].detail.map((detail)=>(
                            <div>
                                <div className="item">
                                    <img src={detail.gambar} onClick={()=>HandlePush(detail.id)}/>
                                    <span className="caption">{detail.lokasi}</span>
                                </div>                               
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PWisata