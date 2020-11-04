import React from 'react'
import background from '../img/contents/WEBSITE ABBE/1.jpg'
import logo from "../img/navbar/1.png"
import {useHistory} from 'react-router-dom'
const Register = ({setShow}) => {

    const history = useHistory()
    
    const handlePushLogin = ()=>{
        history.push("/login")
    }

    const handlePushHome=()=>{
        history.push("/")
        setShow(false)
    }
    return (
        <div>
            <div>
                <img src={background} style={{width:'100%'}}
                
                />
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
                        <input
                    placeholder="Konkfirmasi Kata Sandi"
                    />
                    </div>
                    <div className="wrapper-form">
                        <button>
                            Daftar
                        </button>
                    </div>
                </form>
                <div className="informasi">
                    <p className="p-left">Sudah Punya Akun ? </p>
                    <p className="p-right" onClick={()=>handlePushLogin()}>Masuk! </p>
                </div>
            </div>
     </div>
    )
}

export default Register
