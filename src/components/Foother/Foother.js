import React from 'react'
import './Foother.css'
import logo from "../img/navbar/1.png"
import bca from "../img/navbar/bca.png"
import paypal from "../img/navbar/paypal.png"
import bri from "../img/navbar/bri.png"
import lion from "../img/navbar/lionparcel.png"
import airasis from "../img/navbar/airasia.png"
import garuda from "../img/navbar/garuda.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWhatsapp} from "@fortawesome/free-brands-svg-icons"
import {Gambar} from "../Thumnail/DataThumbnail"
import Foother2 from "./Foother2"
const Foother = () => {
    return (
        <div className="Container-foother">
            <div style={{position:'absolute'}}>
                 <img src={Gambar[3].gambar} style={{width:'100%',height:110,objectFit:'cover',opacity:0.7}}/>
            </div>
            <div className="grid-foother">                           
                <div className="alamat-foother">
                    <h2>PT. AB MANDIRI INVESTAMA</h2>
                    <div style={{position:'absolute',top:35}}>
                        <p>Jl Seturan No 13b, CaturTunggal
                        <br/>Depok, Sleman
                        <br/>Yogyakarta - 55281
                        <br/><FontAwesomeIcon icon={faWhatsapp}/> 085281814883
                        <br/><FontAwesomeIcon icon ={faWhatsapp}/> 0274-999999999</p>
                    </div>
                    
                </div>
                <div className="Trans-method">
                    <h2>PARTNER</h2>
                    <div className="grid-right">
                        <div style={{textAlign:'right'}}>
                            <img src={lion} style={{width:70}}/>
                        </div>
                        <div>
                            <img src={airasis} style={{width:90}}/>
                        </div>
                        <div style={{textAlign:'left'}}>
                            <img src={garuda}/>
                        </div>
                    </div>
                </div>
                <div className="Trans-method">
                    <h2>PAYMENT METHOD</h2>
                    <div className="grid-right">
                            <div style={{textAlign:'right'}}>
                                <img src={bca} style={{width:90}}/>
                            </div>
                            <div>
                                <img src={paypal}/>
                            </div>
                            <div style={{textAlign:'left'}}>
                                <img src={bri} style={{width:60}}/>
                            </div>
                    </div>
                </div>
            </div>
            <Foother2/>
        </div>
    )
}

export default Foother;
