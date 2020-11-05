import React,{useState} from 'react'
import g1 from "../../components/img/contents/WEBSITE ABBE/4.jpg"
import "./Reservasi.css"
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaBeer, FaCar } from 'react-icons/fa';
import { faWolfPackBattalion, faTripadvisor, faAdversal } from "@fortawesome/free-brands-svg-icons"
const Reservasi = () => {

    const [startDate, setStartDate] = useState(new Date());
    
    return (
        <div style={{paddingTop:140}}>
            <div>
                <img src={g1} style={{width:"100%",height:600}}/>
            </div>
            <div className="capion-reservasi">
                <h1>Book Holiday Tickets Anytime Anywhare</h1>
            </div>
            <div>
                <div className="grid-reservasi">
                    <div className="item-select">
                        <select>
                            <option>Packet</option>
                        </select>
                    </div>
                    <div className="item-select">
                        <select>
                            <option>Tujuan</option>
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
