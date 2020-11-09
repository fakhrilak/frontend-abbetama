import React from 'react'
import {Data} from "./DataNews"
import {useParams} from "react-router-dom"
const DetailNews = ({drak}) => {
    const {id} = useParams()
    let B = [...Data] 
    let filtered = B.filter((el)=>el.id === parseInt(id));

    return (
        <div className="Container-Detail-news" 
        style={{backgroundColor:drak?"black":"white"}}
        >
            <div className = "Details-news">
                <div>
                    <h1 style={{color:drak?"white":"#5d0090"}}>{filtered[0].judul}</h1>
                    <p style={{color:drak?"white":"#5d0090"}}>{filtered[0].waktu}</p>
                </div>              
                <div>
                    <img src={filtered[0].gambar} style={{width:600}}/>
                </div>
                <div>
                    <p style={{color:drak?"white":"#5d0090",textAlign:"justify"}}>{filtered[0].text}</p>
                </div>
            </div>
            
        </div>
    )
}

export default DetailNews
