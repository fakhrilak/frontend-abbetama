import React from 'react'
import f1 from "../img/contents/1.jpg"
import f2 from "../img/contents/2.jpg"
import f3 from "../img/contents/3.jpeg"


const Thumbnail = ({count,setCount}) => {

    let Gambar = [f1,f2,f3]
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
        <div>
            
            <img src={Gambar[count]} style={{width:'100%',height: 400}}/>
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
