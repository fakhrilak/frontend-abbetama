import React from 'react'
import {DATA} from "../PWisata/DataPwisata"
const Detail = ({paket,detail,setShow,setCount}) => {
    const Handleset=()=>{
        setCount(0)
        setShow(false)
        paket=0
    }
    return (
        <div>
            <div style={{paddingBottom:20}}>
                <h1>{DATA[paket].detail[detail].lokasi}</h1>
            </div>         
            <div>
                <img src={DATA[paket].detail[detail].gambar} onClick={()=>Handleset()}/>
            </div> 
            <div style={{textAlign:'justify',paddingTop:20}}>
                <p>{DATA[paket].detail[detail].text}</p>
            </div>      
        </div>
    )
}

export default Detail;
