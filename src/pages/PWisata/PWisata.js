import React, { useState } from 'react'
import './PWisata.css'
import {DATA} from "./DataPwisata"
import {useHistory} from "react-router-dom"
const PWisata = ({drak}) => {
    const [count,setCount]=useState(0)
    const [paket,setPaket]=useState(0)

    const history = useHistory()

    const HandlePush=(id)=>{
        let detailpaket = DATA[paket].text
        history.push(`/detail/${detailpaket}/${id}`)
    }

    const HandleChoos=(id)=>{
        setPaket(id)
    }
    return (
        <div style={{paddingTop:140,backgroundColor:drak?"black":"white"}}> 
            <div className="container-pwisata">
                <div className="container-header" style={{backgroundImage:drak?"linear-gradient(to right, black, white)":"linear-gradient(to right, #5d0090, #f777bb)"}}>
                    <div className="grid-runingpict">
                        {DATA.map((data,index)=>(
                            <div>
                                <img src={data.gambar} onClick={()=>HandleChoos(index)}/>
                                <h4 style={{color:!drak? ((index === paket)?"white":"#5d0090"):((index === paket)?"white":"black")}}>{data.text}</h4>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="container-grid-detail" style={{color:drak===true? "white":"#5d0090"}}>
                    <h1>{DATA[paket].text}</h1>
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