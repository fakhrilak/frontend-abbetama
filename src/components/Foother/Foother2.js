import React from 'react'
import "./Foother.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faWhatsapp,faTwitter,faFacebook,faInstagram,faYoutube} from "@fortawesome/free-brands-svg-icons"
import bca from "../img/navbar/bca.png"
import paypal from "../img/navbar/paypal.png"
import bri from "../img/navbar/bri.png"
import lion from "../img/navbar/lionparcel.png"
import airasis from "../img/navbar/airasia.png"
import garuda from "../img/navbar/garuda.png"
const Foother2 = ({drak}) => {
    return (
        <div className="Foother-Container" style={{backgroundImage: drak? "linear-gradient(to right, black, white)":
        "linear-gradient(to right, #5d0090, #f777bb)", color:drak?"white":"#5d0090"}}>
            <div className="Container-Foother2">
                <div className="Container-Foother-1">
                    <h4>PT. ABBE MANDIRI INVESTAMA</h4>
                    <p>Jl Seturan No 13b, CaturTunggal
                        <br/>Depok, Sleman
                        <br/>Yogyakarta - 55281
                        <br/><FontAwesomeIcon icon={faWhatsapp}/> 085281814883
                    <br/><FontAwesomeIcon icon ={faWhatsapp}/> 0274-999999999</p>
                </div>
                <div className="Container-Foother-2">
                    <h4>PARTNER</h4>
                    <div className="grid-left">
                        <div style={{textAlign:'right'}}>
                            <img src={lion} style={{width:60}}/>
                        </div>
                        <div>
                            <img src={airasis} style={{width:70}}/>
                        </div>
                        <div style={{textAlign:'left'}}>
                            <img src={garuda} style={{width:60}}/>
                        </div>
                    </div>
                </div>
                <div className="Container-Foother-3">
                    <h4 style={{paddingLeft:100}}>PAYMENT METHOD</h4>
                    <div className="grid-right">
                        <div style={{textAlign:'right'}}>
                            <img src={bca} style={{width:60}}/>
                        </div>
                        <div>
                            <img src={paypal} style={{width:50}}/>
                        </div>
                        <div style={{textAlign:'left'}}>
                            <img src={bri} style={{width:40}}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-icons">
                    <div className="grid-icons-1">
                        <h5>© 2020 PT. ABBE MANDIRI INVESTAMA</h5>
                    </div>
                    <div className="grid-icons-2">
                        <FontAwesomeIcon icon={faTwitter} className="iconsx"/>
                        <FontAwesomeIcon icon={faFacebook} className="iconsx"/>
                        <FontAwesomeIcon icon={faInstagram} className="iconsx"/>
                        <FontAwesomeIcon icon={faYoutube} className="iconsx"/>
                    </div>                   
            </div>
            
        </div>
    )
}

export default Foother2
