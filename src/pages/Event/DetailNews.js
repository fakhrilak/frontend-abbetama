import React from 'react'
import {Data} from "./DataNews"
const DetailNews = ({match}) => {
 
    let B = [...Data] 
    let filtered = B.filter((el)=>el.id === parseInt(match.params.id));

    return (
        <div className="Container-Detail-news">
            <div className = "Details-news">
                <div>
                    <h1 style={{color:"#5d0090"}}>{filtered[0].judul}</h1>
                    <p style={{color:"#5d0090"}}>{filtered[0].waktu}</p>
                </div>              
                <div>
                    <img src={filtered[0].gambar} style={{width:600}}/>
                </div>
                <div>
                    <p style={{color:"#5d0090",textAlign:"justify"}}>{filtered[0].text}</p>
                </div>
            </div>
            
        </div>
    )
}

export default DetailNews
