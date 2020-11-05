import React, { useState } from 'react'
import './PWisata.css'
import {DATA} from "./DataPwisata"
const PWisata = () => {
    const [formData, setFormData] = useState({
        paket:"1"
    })
    const [count,setCount]=useState(0)

    const {paket} = formData
    const HandlePlus=()=>{
        if(count === DATA[paket].detail.length-1)
            setCount(0)
        else{
            setCount(count + 1)
        }
    }
    setTimeout(()=>{HandlePlus()},3000)
    
    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
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
                                <img src={detail.gambar}/>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default PWisata