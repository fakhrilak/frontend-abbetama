import React from 'react'
import {Gambar} from "./DataThumbnail"


const Thumbnail = ({count,setCount,drak}) => {


    setTimeout(()=>{HandlePlus()},3000)
    const HandlePlus=()=>{
        if(count === Gambar.length-1)
            setCount(0)
        else{
            setCount(count + 1)
        }
    }
    const HandleMinus=()=>{
        if(count === 0){
            setCount(Gambar.length-1)
        }else{
            setCount(count-1)
        }
    }
    return (
        <div className="continer-thumbnail" style={{backgroundImage: drak? "linear-gradient(to right, black, white)":
        "linear-gradient(to right, #5d0090, #f777bb)"}}>
            
            <img src={Gambar[count].gambar} style={{width:'100%',height: 600}}/>
            <h1 className="text-gambar" style={{color:drak?"black":"#5d0090"}}> {Gambar[count].text}</h1>
            <div className="text-caption" style={{backgroundImage:drak ?"linear-gradient(to right, black, white)":
                    "linear-gradient(to right, #5d0090, #f777bb)"}}>
                <p > {Gambar[count].caption}</p>
            </div>
       </div>
    )
}

export default Thumbnail
