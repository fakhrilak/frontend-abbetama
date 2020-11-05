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
const Foother = () => {
    return (
        <div className="Container-foother">
            <div style={{position:'absolute'}}>
                 <img src={Gambar[4].gambar} style={{width:'100%',height:165,objectFit:'cover'}}/>
            </div>
            <div className="grid-foother">                           
                <div className="alamat-foother">
                    <h2>PT. AB MANDIRI INVESTAMA</h2>
                    <p>Jl Seturan No 13b, CaturTunggal
                    <br/>Depok, Sleman
                    <br/>Yogyakarta - 55281
                    <br/><FontAwesomeIcon icon={faWhatsapp}/> 085281814883
                    <br/><FontAwesomeIcon icon ={faWhatsapp}/> 0274-999999999</p>
                </div>
                <div className="Trans-method">
                    <h2>PARTNER</h2>
                    <div className="grid-right">
                        <div style={{textAlign:'right'}}>
                            <img src={lion} style={{width:50}}/>
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
                    <h2>TRANSAKSI METHOD</h2>
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
        </div>
    )
}

export default Foother;
