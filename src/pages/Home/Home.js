import React,{useState} from 'react'
import Thumbnail from "../../components/Thumnail/Thumbnail"
import './Home.css'
import Foother from "../../components/Foother/Foother2"
import {Gambar}from "../../components/Thumnail/DataThumbnail"
import {DATA} from "../PWisata/DataPwisata"
import {useHistory} from "react-router-dom"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

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
    var kalimat = "Selamat Datang Di Abbetama Tour and Travel";
    let tes="";
    let i;
    
    return (
        <div className="container-home">
            <div>
                <Thumbnail count={count} setCount={setCount}/>
            </div>
            <div class="sitemessage">
                <h1 style={{fontSize:40}}>{kalimat}</h1> 
            </div>
            <h1 style={{textAlign:'left',marginLeft:'10%',marginRight:'10%'}}>DESTINATION</h1>
            <div className="grid">          
                <div className="Container-Home">
                <Slider autoplay={3000}>
	                {DATA[0].detail.map((item, index) => (
		            <div
                        key={index}
                        style={{ background: `url('${item.gambar}') no-repeat center center`,
                        backgroundSize:"100%"}}
                        onClick={()=>HandlePush(DATA[0].text,index+1)}
		            >
                            <div className="center">
                                <div className="lokasi">
                                    <h2>{item.lokasi}</h2>
                                </div>                               
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>

                <div className="Container-Home">
                <Slider autoplay={3000}>
	                {DATA[1].detail.map((item, index) => (
		            <div
                        key={index}
                        style={{ background: `url('${item.gambar}') no-repeat center center`,
                        backgroundSize:"100%"

                    }}
                    onClick={()=>HandlePush(DATA[1].text,index+1)}
		            >
                            <div className="center">
                                <div className="lokasi">
                                    <h2>{item.lokasi}</h2>
                                </div>                               
                            </div>
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
            <h1 style={{textAlign:'right',marginRight:'10%',paddingTop:100}}>PROMO PAKET</h1>
            <div className="grid-2">
                <div/>
                <div className="Container-Home">
                    <img src={Gambar[6].gambar}/>
                </div>
            </div>
            <Foother/>      
        </div>
    )
}

export default Home;