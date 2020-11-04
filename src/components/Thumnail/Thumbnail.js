import React from 'react'
import {Gambar} from "./DataThumbnail"


const Thumbnail = ({count,setCount}) => {


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
        <div className="continer-thumbnail">
            
            <img src={Gambar[count]} style={{width:'100%',height: 600}}/>
            <div className='slideShow'>    
                <h1 className='slide-left'
                onClick={()=>HandleMinus()}
                >{'<<'}</h1>
                <h1 className='slide-right'
                onClick={()=>HandlePlus()}
                >{'>>'}</h1>
            </div> 
       </div>
    )
}

export default Thumbnail
