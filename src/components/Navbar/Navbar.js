import React from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import logo from "../../components/img/navbar/1.png"

const Navbar = ({setShow,show}) => {
    return (
        <div style={{position:'fixed',width:'100%'}}>
            <ul>
                <li className="item-navbar"><Link to='/login'>
                    <button onClick={()=>setShow(!show)}>Login</button>
                </Link></li>
                <li className="item-navbar"><Link to='/register'><button>Register</button></Link></li>
                <li className="item-navbar"><Link to='/reservasi'>Reservasi</Link></li>
                <li className="item-navbar"><Link to='/blog'>Blog</Link></li>
                <li className="item-navbar"><Link to='/event'>Event</Link></li>
                <li className="item-navbar"><Link to='/transport'>Transport</Link></li>
                <li className="item-navbar"><Link to='/paket-wisata'>Paket Wisata</Link></li>
                <li className="item-navbar"><Link to='/profile'>Profile</Link></li>
                <li className="item-navbar"><Link to='/hotel'>Hotel</Link></li>
                <li className="item-navbar"><Link to='/'>Beranda</Link></li>
                <li className="logo-navbar"><Link to='/'><img src={logo} style={{width:300}}/></Link></li>
            </ul>           
        </div>
    )
}

export default Navbar
