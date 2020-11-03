import React,{useState} from 'react'
import Thumbnail from "../../components/Thumnail/Thumbnail"
import './Home.css'

const Home = () => {
    const [count,setCount]=useState(0)
    return (
        <div >
            <div>
                <Thumbnail count={count} setCount={setCount}/>
            </div>
            <div className="Container-Home">
                <div className="Home-left">
                    <table>
                        <tr><th><h4>PAKET DOMESTING</h4></th></tr>
                        <tr><th><h4>PAKET ASING</h4></th></tr>
                        <tr><th><h4>PAKET INTERNASIONAL</h4></th></tr>
                        <tr><th><h4>PAKET UMROH</h4></th></tr>
                        <tr><th><h4>CRUISE</h4></th></tr>
                        <tr><th><h4>EVENT ORGANIZER</h4></th></tr>
                    </table>
                </div>
                <div className="Home-right">
                    <h1>test</h1>
                </div>
            </div>
        </div>
    )
}

export default Home;