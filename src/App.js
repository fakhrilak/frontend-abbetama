import React,{useState} from "react"
import Navbar from "./components/Navbar/Navbar"
import Home from "./pages/Home/Home"
import Hotel from "./pages/Hotel/Hotel"
import Login from "./components/Login/Login"
import Register from "./components/Register/Register"
import Profile from "./pages/Profile/Profile"
import PWisata from "./pages/PWisata/PWisata"
import Transport from "./pages/Transport/Transport"
import Event from "./pages/Event/Event"
import Blog from "./pages/Blog/Blog"
import Reservasi from "./pages/Reservasi/Reservasi"
import Foother from "./components/Foother/Foother2"
import Detail from "./pages/Detail/Detail"
import DetailNews from "./pages/Event/DetailNews"
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [show,setShow]=useState(false)
  const [drak,setDrak]=useState(false)
  return (
  <>
    <div className="App">
     <Router>
         <div>
           {!show && <Navbar setShow={setShow} show={show} setDrak={setDrak} drak={drak}/>}
         </div>
         <div className="pages" style={{height:show ? 0:140}}>
            <Route exact path="/" >
                <Home setDrak={setDrak} drak={drak}/>
            </Route>
            <Route exact path="/hotel" >
                <Hotel setDrak={setDrak} drak={drak}/>
            </Route>
            <Route exact path="/login">
                  <Login setShow={setShow} drak={drak}/>
            </Route> 
            <Route exact path="/register">
                  <Register setShow={setShow} drak={drak}/>
            </Route>
            <Route exact path="/profile" >
                  <Profile setDrak={setDrak} drak={drak}/>
            </Route>
            <Route exact path="/paket-wisata">
                  <PWisata setDrak={setDrak} drak={drak}/>
            </Route>
            <Route exact path="/transport">
                  <Transport setDrak={setDrak} drak={drak}/>
            </Route>
            <Route exact path="/news" >
                <Event setDrak={setDrak} drak={drak}/>
            </Route>
            <Route exact path="/reservasi">
                <Reservasi setDrak={setDrak} drak={drak}/>
            </Route>
            <Route exact path = "/detail/:nama/:id">
                <Detail setDrak={setDrak} drak={drak}/>
            </Route>
            <Route exact path = "/news/:id">
                <DetailNews setDrak={setDrak} drak={drak}/>
            </Route>
         </div>
     </Router>        
    </div>
    </>
  );
}

export default App;
