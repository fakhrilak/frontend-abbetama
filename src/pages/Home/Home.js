import React,{useState} from 'react'
import Thumbnail from "../../components/Thumnail/Thumbnail"
import './Home.css'
import Foother from "../../components/Foother/Foother2"
import {Gambar}from "../../components/Thumnail/DataThumbnail"
import {DATA} from "../PWisata/DataPwisata"
import {useHistory} from "react-router-dom"
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import {PROMO} from "../../components/Thumnail/DataThumbnail"
import ReactWhatsapp from 'react-whatsapp';
const Home = ({drak}) => {
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
    
    return (
        <div className="container-home" style={{backgroundColor:drak ? "black":"white",
        color: drak? "white":"#5d0090"}}>
            <ReactWhatsapp number="+62812-9924-3859" message="Hello World!!!" />
            <div>
                <Thumbnail count={count} setCount={setCount} drak={drak}/>
            </div>
            <marquee behavior="scroll" direction="left" scrollamount="10"><h1>{kalimat}</h1></marquee>
            <h1 style={{textAlign:'left',marginLeft:'10%',marginRight:'10%'}}>DESTINATION</h1>
            <div className="grid">          
                <div className="Container-Home">
                <Slider autoplay={3000}>
	                {DATA[0].detail.map((item, index) => (
		            <div
                        key={index}
                        style={{ background: `url('${item.gambar}') no-repeat center center`,
                        backgroundSize:"100%",borderRadius:10}}
                        onClick={()=>HandlePush(DATA[0].text,index+1)}
		            >
                            
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
                        backgroundSize:"100%",borderRadius:10

                    }}
                    onClick={()=>HandlePush(DATA[1].text,index+1)}
		            >
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
            <h1 style={{textAlign:'right',marginRight:'10%',paddingTop:100}}>PROMO PAKET</h1>
            <div className="grid-2">
                <div/>
                <div className="Container-Home">
                <Slider autoplay={3000}>
	                {PROMO.map((item, index) => (
		            <div
                        key={index}
                        style={{ background: `url('${item.gambar}') no-repeat center center`,
                        backgroundSize:"100%",borderRadius:10

                    }}
		            >
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
            <Foother drak={drak}/>      
        </div>
    )
}

export default Home;