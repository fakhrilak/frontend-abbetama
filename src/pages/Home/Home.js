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
            <div className="Container-Home"/>
            <div className="Container-Home"/>
            <div className="Container-Home"/>
            <div className="Container-Home"/>
        </div>
    )
}

export default Home;