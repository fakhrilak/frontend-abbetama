import React,{useState} from 'react'
import g1 from "../../components/img/contents/WEBSITE ABBE/4.jpg"
import "./Reservasi.css"
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const Reservasi = () => {

    const [value, onChange] = useState(new Date());
    
    return (
        <div style={{paddingTop:140}}>
            <div>
                <img src={g1} style={{width:"100%",height:600}}/>
            </div>
            <div className="capion-reservasi">
                <h1>Book Holiday Tickets Anytime Anywhare</h1>
            </div>
            <div>
                <div>
                    <div>
                        <select>
                            <option>Select Packet</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>Select Wisata</option>
                        </select>
                    </div>
                    <div>
                        <select>
                            <option>Select </option>
                        </select>
                    </div>
                    <div>
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reservasi
