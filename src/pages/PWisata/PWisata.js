import React from 'react'
import {Data} from "./DataPwisata"
import './PWisata.css'
const PWisata = () => {
    return (
        <div style={{paddingTop:140}}> 
            <div>
                <div className="header-hotel" style={{marginBottom:20}}/>
                {Data.map((data)=>(
                    <div className="wrapper">
                        <div className="judul">
                            <d3>{data.judul}</d3>
                        </div>
                        <div className="flex-display">
                            <div>
                                <img src={data.gambar}/>
                            </div>
                            <div>
                                <p>
                                    {data.text}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default PWisata