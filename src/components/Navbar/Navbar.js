import React,{useRef,useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import "./Navbar.css"
import logo from "../../components/img/navbar/2.png"
import pesonaindonesia from "../../components/img/navbar/pesonaindonesia.png"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook,faTwitter,faInstagram,faYoutube, faWhatsapp } from "@fortawesome/free-brands-svg-icons"
const Navbar = ({setShow,show,setDrak,drak}) => {
        const prevScrollY = useRef(0);

        const [goingUp, setGoingUp] = useState(false);

        useEffect(() => {
            const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY >5) {
                setGoingUp(true);
            }else{
                setGoingUp(false)
            }
            prevScrollY.current = currentScrollY;
            };

            window.addEventListener("scroll", handleScroll, { passive: true });

            return () => window.removeEventListener("scroll", handleScroll);
        }, [goingUp]);

        console.log(drak)
    return (
        <div className="container-navbar" style={{
            backgroundImage: goingUp===true && drak === false ? "linear-gradient(to right, #5d0090, #f777bb)":
            goingUp===true && drak === true ? "linear-gradient(to right, black, white)":"none",color:'white'}}>
            <ul>
                <li className="icon-navbar"><img src={pesonaindonesia} style={{width:100,float:"right"}} onClick={()=>setDrak(!drak)}/></li>
                <li className="icon-navbar"><a href="https://www.facebook.com/assyroh.kaffah/" target="_blank" style={{color:drak?"white":"#5d0090"}}><FontAwesomeIcon icon={faFacebook}/></a></li>
                <li className="icon-navbar"><a href="https://twitter.com/FakhrilAK/" target="_blank" style={{color:drak?"white":"#5d0090"}}><FontAwesomeIcon icon={faTwitter}/></a></li>
                <li className="icon-navbar"><a href="https://www.instagram.com/abbetama_tourtravel/" target="_blank" style={{color:drak?"white":"#5d0090"}}><FontAwesomeIcon icon={faInstagram}/></a></li>
                <li className="icon-navbar"><a href="https://www.youtube.com/feed/my_videos/" target="_blank" style={{color:drak?"white":"#5d0090"}}><FontAwesomeIcon icon={faYoutube}/></a></li>
                <li className="icon-navbar"><a href="https://wa.me/6281299243859/" target="_blank" style={{color:drak?"white":"#5d0090"}}><FontAwesomeIcon icon={faWhatsapp}/></a></li>
                <li className="logo-navbar"><Link to='/'><img src={logo} style={{width:450}}/></Link></li>
            </ul>
            <ul>
                <li  className= "item-navbar"><Link to='/login'>
                    <button onClick={()=>setShow(true)}
                    style={{backgroundColor: drak ? "black":"#5d0090"}}
                    >LOGIN</button>
                </Link></li>
                <li className="item-navbar"><Link to='/register'>
                    <button onClick={()=>setShow(true)}
                    style={{backgroundColor: drak ? "black":"#5d0090"}}
                    >REGISTER</button></Link></li>
                <li className="item-navbar"><Link to='/reservasi' style={{color:drak?"white":"#5d0090"}}>RESERVASI</Link></li>
                <li className="item-navbar"><Link to='/news' style={{color:drak?"white":"#5d0090"}}>NEWS</Link></li>      
                <li className="item-navbar"><Link to='/hotel' style={{color:drak?"white":"#5d0090"}}>HOTEL</Link></li>
                <li className="item-navbar"><Link to='/transport' style={{color:drak?"white":"#5d0090"}}>TRANSPORT</Link></li>
                <li className="item-navbar"><Link to='/paket-wisata' style={{color:drak?"white":"#5d0090"}}>PRODUK WISATA</Link></li>
                <li className="item-navbar"><Link to='/profile' style={{color:drak?"white":"#5d0090"}}>PROFILE</Link></li>
                <li className="item-navbar"><Link to='/' style={{color:drak?"white":"#5d0090"}}>BERANDA</Link></li>
            </ul>           
        </div>
    )
}

export default Navbar
