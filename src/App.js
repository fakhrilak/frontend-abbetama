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
import './App.css';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [show,setShow]=useState(false)
  return (
    <div className="App">
     <Router>
         <div>
           {!show && <Navbar setShow={setShow} show={show}/>}
         </div>
         <div className="pages" style={{height:show ? 0:140}}>
            <Route exact path="/" component={Home}/>
            <Route exact path="/hotel" component={Hotel}/>
            <Route exact path="/login">
                  <Login setShow={setShow}/>
            </Route> 
            <Route exact path="/register" component={Register}/>
            <Route exact path="/profile" component={Profile}/>
            <Route exact path="/paket-wisata" component={PWisata}/>
            <Route exact path="/transport" component={Transport}/>
            <Route exact path="/event" component={Event}/>
            <Route exact path="/blog" component={Blog}/>
            <Route exact path="/reservasi" component={Reservasi}/>
         </div>

     </Router>
    </div>
  );
}

export default App;
