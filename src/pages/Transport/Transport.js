import React from 'react'
import{Data} from "./DataTransport"
import './Transport.css'
const Transport = ({drak}) => {
    return (
        <div style={{paddingTop:140,paddingBottom:140,backgroundColor:drak?"black":"white"}}>
            <div className="header-transport"/>
            <div style={{marginBottom:'20px'}}>
                <div className="grid-transaport"
                >
                    {Data.map((data)=>
                        <>
                            <div className="dropdown">
                                <div>
                                    <img src={data.gambar} style={{width:300}}/>
                                </div>
                                <div>
                                    <button className="dropbtn"
                                    style={{backgroundImage:drak ?"linear-gradient(to right, black, white)":
                                    "linear-gradient(to right, #5d0090, #f777bb)"}}
                                    >{data.nama}</button>
                                </div>
                                <div className="dropdown-content"
                                style={{backgroundImage:drak ?"linear-gradient(to right, black, white)":
                                "linear-gradient(to right, #5d0090, #f777bb)"}}
                                >
                                    <a >Tahun  :  {data.tahun}</a>
                                    <a >10 Jam :  {data.full}</a>
                                    <a >5 Jam  :  {data.half}</a>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Transport;
