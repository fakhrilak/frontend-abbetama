import React,{useState} from 'react'
import Thumbnail from "../../components/Thumnail/Thumbnail"
import './Home.css'
import Foother from "../../components/Foother/Foother"
import {Gambar}from "../../components/Thumnail/DataThumbnail"
const Home = () => {
    const [count,setCount]=useState(0)
    return (
        <div >
            <div>
                <Thumbnail count={count} setCount={setCount}/>
            </div>
            <h1 style={{textAlign:'left',marginLeft:'10%',marginRight:'10%'}}>DESTINATION</h1>
            <div className="grid">          
                <div className="Container-Home">
                    <img src={Gambar[1].gambar}/>
                    
                </div>
                <div className="Container-Home">
                    <img src={Gambar[2].gambar}/>
                </div>
                <div className="Container-Home">
                    <img src={Gambar[3].gambar}/>
                </div>
            </div>
            <h1 style={{textAlign:'right',marginRight:'10%'}}>PROMO PAKET</h1>
            <div className="grid-2">
                <div/>
                <div className="Container-Home">
                    <img src={Gambar[8].gambar}/>
                </div>
            </div>
            <div style={{marginTop:20}}>
                 <Foother/>
            </div>
           
        </div>
    )
}

export default Home;