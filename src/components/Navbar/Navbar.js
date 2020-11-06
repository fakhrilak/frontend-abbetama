import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import logo from "../../components/img/navbar/1.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faInstagram,faYoutube } from "@fortawesome/free-brands-svg-icons"
const Navbar = ({setShow,show}) => {
    return (
        <div className="container-navbar">
            <ul>
                <li className="icon-navbar"><a href="https://www.facebook.com/assyroh.kaffah/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className="icon-navbar"><a href="https://twitter.com/FakhrilAK/" target="_blank"><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li className="icon-navbar"><a href="https://www.instagram.com/abbetama_tourtravel/" target="_blank"><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li className="icon-navbar"><a href="https://www.youtube.com/feed/my_videos/" target="_blank"><FontAwesomeIcon icon={faYoutube}/></a></li>
                <li className="logo-navbar"><Link to='/'><img src={logo} style={{width:300}}/></Link></li>
            </ul>
            <ul>
                <li className="item-navbar"><Link to='/login'>
                    <button onClick={()=>setShow(true)}>LOGIN</button>
                </Link></li>
                <li className="item-navbar"><Link to='/register'>
                    <button onClick={()=>setShow(true)}>REGISTER</button></Link></li>
                <li className="item-navbar"><Link to='/reservasi'>RESERVASI</Link></li>
                <li className="item-navbar"><Link to='/event'>NEWS</Link></li>      
                <li className="item-navbar"><Link to='/hotel'>HOTEL</Link></li>
                <li className="item-navbar"><Link to='/transport'>TRANSPORT</Link></li>
                <li className="item-navbar"><Link to='/paket-wisata'>PAKET WISATA</Link></li>
                <li className="item-navbar"><Link to='/profile'>PROFILE</Link></li>
                <li className="item-navbar"><Link to='/'>BERANDA</Link></li>
            </ul>           
        </div>
    )
}

export default Navbar
