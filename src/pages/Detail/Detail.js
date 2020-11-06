import React from 'react'
import {DATA} from "../PWisata/DataPwisata"
import "./Detail.css"
const Detail = ({match}) => {
    const data = [...DATA]
    const filtered = data.filter((e)=>e.text === match.params.nama)
    console.log(filtered[0])
    return (
        
        <div className="Container-detail">
                <h1>{filtered[0].detail[match.params.id - 1].lokasi}</h1>
                <img src={filtered[0].detail[match.params.id - 1].gambar} />
                <h1 className="Container-subjudul">DESKRIPSI</h1>
                <p>{filtered[0].detail[match.params.id - 1].text}</p>
                <h1 className="Container-subjudul">DETAIL PAKET</h1>
        </div>
    )
}

export default Detail;
