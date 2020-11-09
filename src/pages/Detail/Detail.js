import React from 'react'
import {DATA} from "../PWisata/DataPwisata"
import "./Detail.css"
import {useParams} from "react-router-dom"
const Detail = ({drak}) => {
    const {nama,id}=useParams()
    const data = [...DATA]
    const filtered = data.filter((e)=>e.text === nama)

    return (
        
        <div className="Container-detail" style={{backgroundColor:drak?"black":"white",
        color:drak?"white":"#5d0090"}}>
                <h1>{filtered[0].detail[id - 1].lokasi}</h1>
                <img src={filtered[0].detail[id - 1].gambar} />
                <h1 className="Container-subjudul" style={{color:drak?"white":"#5d0090"}}>DESKRIPSI</h1>
                <p>{filtered[0].detail[id - 1].text}</p>
                <h1 className="Container-subjudul" style={{color:drak?"white":"#5d0090"}}>DETAIL PAKET</h1>
        </div>
    )
}

export default Detail;
