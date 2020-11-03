import React from 'react'
import background from '../img/contents/2.jpg'
import logo from "../img/navbar/1.png"
import "./Login.css"
import {useHistory} from 'react-router-dom'
const Login = ({setShow}) => {

    const history = useHistory()
    
    const handlePushRegister = ()=>{
        history.push("/register")
    }
    const handlePushHome=()=>{
        history.push("/")
        setShow(false)
    }
    return (
        <div>
           <div>
               <img src={background} style={{width:'100%'}}/>
           </div> 
           <div className="form-input">
                <div className="wrapper-form">
                    <img src={logo} style={{width:200}}
                    onClick={()=>handlePushHome()}
                    />
                </div>
               <form>
                   <div className="wrapper-form">
                      <input
                   placeholder="Nama"
                   /> 
                   </div>
                   <div className="wrapper-form">
                       <input
                   placeholder="Kata Sandi"
                   />
                   </div>
                   <div className="wrapper-form">
                       <button>
                           Masuk
                       </button>
                   </div>
               </form>
               <div className="informasi">
                    <p className="p-left">Tidak Punya Akun ? </p>
                    <p className="p-right" onClick={()=>handlePushRegister()}>Daftar! </p>
               </div>
           </div>
        </div>
    )
}

export default Login;
