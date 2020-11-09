import React,{useState} from 'react'
import g1 from "../../components/img/contents/WEBSITE ABBE/4.jpg"
import "./Reservasi.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBeer, FaCar } from 'react-icons/fa';
import { faWolfPackBattalion, faTripadvisor, faAdversal } from "@fortawesome/free-brands-svg-icons"
const Reservasi = ({drak}) => {

    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <div style={{paddingTop:140,backgroundColor:drak?"black":"white"}}>
            <div>
                <img src={g1} style={{width:"100%",height:600}}/>
            </div>
            <div className="capion-reservasi">
                <h1 style={{background:drak?"-webkit-linear-gradient(30deg, black, white)":"-webkit-linear-gradient(30deg, #5d0090, #00BBFF)",
                WebkitBackgroundClip:'text',WebkitTextFillColor:"transparent"
            }}>Book Holiday Tickets Anytime Anywhare</h1>
            </div>
            <div>
                <div className="grid-reservasi" style={{backgroundImage:drak ?"linear-gradient(to right, black, white)":
                    "linear-gradient(to right, #5d0090, #f777bb)",color:drak?"black":"#5d0090"}}>
                    <div className="item-select">
                        <select>
                            <option>Tujuan</option>
                        </select>
                    </div>
                    <div className="item-select">
                        <select>
                            <option>Paket</option>
                        </select>
                    </div>
                    <div className="item-Input">
                        <input
                        placeholder="Banya Orang"
                        />
                    </div>
                    <div className="item-date">
                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
                    </div>
                    <div className="button-reservasi">
                        <button>BOOKING!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservasi
