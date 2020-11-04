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
            <h1 style={{textAlign:'left',marginLeft:'10%'}}>REKOMENDASI</h1>
            <div className="grid">          
                <div className="Container-Home">
                    <img src={Gambar[1]}/>
                </div>
                <div className="Container-Home">
                    <img src={Gambar[7]}/>
                </div>
                <div className="Container-Home">
                    <img src={Gambar[12]}/>
                </div>
            </div>
            <h1 style={{textAlign:'right',marginRight:'10%'}}>PROMO</h1>
            <div className="grid-2">
                <div/>
                <div className="Container-Home">
                    <img src={Gambar[15]}/>
                </div>
            </div>
            <h1 style={{textAlign:'right',marginRight:'10%'}}>GALERI</h1>
            <div className="grid-2">
                <div/>
                <div className="Container-Home">
                    <img src={Gambar[17]}/>
                </div>
            </div>
            <div style={{marginTop:20}}>
                 <Foother/>
            </div>
           
        </div>
    )
}

export default Home;