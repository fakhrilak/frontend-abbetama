import React,{useState} from 'react'
import Thumbnail from "../../components/Thumnail/Thumbnail"
import './Home.css'
import Foother from "../../components/Foother/Foother"
import {Gambar}from "../../components/Thumnail/DataThumbnail"
import {DATA} from "../PWisata/DataPwisata"
import {useHistory} from "react-router-dom"

const Home = () => {
    const [count,setCount]=useState(0)
    const [A,setA]= useState(0)
    const [B,setB]= useState(0)
    const history = useHistory()
    setTimeout(()=>
       HandleCount(),3000 
    )
    setTimeout(()=>
        Counter(),3000
    )
    const HandlePush =(nama,id)=>{
        history.push(`/detail/${nama}/${id}`)
    }
    const HandleCount = ()=>{
        if(A === DATA[0].detail.length -1){
            setA(0)
        }else{
            setA(A+1)
        }
    }
    const Counter=()=>{
        if (B === DATA[1].detail.length -1){
            setB(0)
        }else{
            setB(B+1)
        }
    }
    return (
        <div className="container-home">
            <div>
                <Thumbnail count={count} setCount={setCount}/>
            </div>
            <h1 style={{textAlign:'left',marginLeft:'10%',marginRight:'10%'}}>DESTINATION</h1>
            <div className="grid">          
                <div className="Container-Home">
                    <img src={DATA[0].detail[A].gambar} onClick={()=>HandlePush(DATA[0].text,DATA[0].detail[A].id)}/>
                    <h3>{DATA[0].detail[A].lokasi}</h3>
                </div>

                <div className="Container-Home">
                    <img src={DATA[1].detail[B].gambar } onClick={()=>HandlePush(DATA[1].text,DATA[1].detail[B].id)}/>
                    <h3>{DATA[1].detail[B].lokasi}</h3>
                </div>
            </div>
            <h1 style={{textAlign:'right',marginRight:'10%',paddingTop:100}}>PROMO PAKET</h1>
            <div className="grid-2">
                <div/>
                <div className="Container-Home">
                    <img src={Gambar[6].gambar}/>
                </div>
            </div>          
        </div>
    )
}

export default Home;