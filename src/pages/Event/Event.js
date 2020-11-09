import React from 'react'
import "./News.css"
import moment from "moment"
import {Data} from "./DataNews"
import {useHistory} from "react-router-dom"
const Event = ({drak}) => {
    
    const HandleFilter=(tanggal)=>{
        var dateOne = moment(); 
        var dateTwo = moment(tanggal); 
        var result = dateOne.diff(dateTwo, 'days') 
        return result 
    }
    let B = [...Data] 
    let filtered = B.filter((el)=>HandleFilter(el.waktu) < 2 );
    
    const history = useHistory()
    const HandlePush=(id)=>{
        history.push(`/news/${id}`)
    }
    return (
        <div style={{paddingTop:140,backgroundColor:drak?"black":"white"}}>
            <div className="Container-News" >
                <h1 style={{color:drak?"white":"#5d0090"}}>TERAKHIR DITAMBAH</h1>
                <div className = "grid-3" >
                    {filtered.map((item)=>(
                        <>
                        <div className="grid-content-new" style={{backgroundImage:drak ?"linear-gradient(to right, black, white)":
                    "linear-gradient(to right, #5d0090, #f777bb)"}}>                         
                            <img src={item.gambar} onClick={()=>HandlePush(item.id)}/>
                            <h4>{item.judul}</h4>
                        </div>
                        <div className="grid-content-new" style={{backgroundImage:drak ?"linear-gradient(to right, black, white)":
                    "linear-gradient(to right, #5d0090, #f777bb)"}}>                         
                            <img src={item.gambar} onClick={()=>HandlePush(item.id)}/>
                            <h4>{item.judul}</h4>
                        </div>
                        </>
                    ))}
                </div>
            </div>
            <div className="Container-News" style={{backgroundColor:drak?"black":"#5d0090",paddingTop:20}}>
                
                <div className = "grid-5">
                    {Data.map((item)=>(
                        <div className="grid-content-new" style={{backgroundImage:drak ?"linear-gradient(to right, black, white)":
                        "linear-gradient(to right, #5d0090, #f777bb)"}}>                         
                            <img src={item.gambar} onClick={()=>HandlePush(item.id)}/>
                            <h4>{item.judul}</h4>
                        </div>
                        
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Event;
