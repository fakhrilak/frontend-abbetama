import React,{useState} from 'react'
import {Data,Lokasi} from "./DataHotel"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationArrow, faMoneyBill } from "@fortawesome/free-solid-svg-icons"
import "./Hotel.css"
const Hotel = () => {
    const [lokasi,setLokasi]=useState('')
    var data = Data.filter(e => e.lokasi === lokasi); 
    return (
        <div style={{paddingTop:140}}>
            <div>
                <div className="header-hotel">
                    <div className="select-lokasi">
                      <select
                      className="dropdown-additems"
                      onChange={e => setLokasi(e.target.value)}
                      >
                        <option value="" disabled selected >Select Location</option>
                        {Lokasi.map((lokasi)=>(                     
                                <option value={lokasi.lokasi} key={lokasi.id}>
                                        {lokasi.lokasi}
                                </option>
                            ))}
                      </select>  
                    </div>
                    
                </div>
                <div className="content-hotel">
                    <div className="grid-card">
                        {data.map((hotel)=>(
                            <div className="hotel-card">
                                <div>
                                    <img src={hotel.gambar}/>
                                </div>
                                <div className="grid-card-bawah">
                                    <div className="fasilitas">
                                        <div className="faslitas-p">
                                            <p>{hotel.fasilitas}</p>
                                        </div>                                        
                                    </div>
                                    <div className="lokasi-harga">
                                        <div className="lokasi-harga-content">
                                            <div>
                                                <FontAwesomeIcon icon={faLocationArrow} className="icon" />
                                            </div>
                                            <div style={{float:"left"}}>
                                                <p >{hotel.lokasi}</p>
                                            </div>                  
                                        </div>
                                        <div className="lokasi-harga-content">
                                            <div>
                                                <FontAwesomeIcon icon={faMoneyBill} className="icon" />
                                            </div>
                                            <div style={{paddingRight:'20px'}}>
                                                <p>{hotel.harga}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hotel;
