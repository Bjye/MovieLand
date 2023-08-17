// import {useState, useEffect} from "react";
// import "./App.css";
import "./register/Style.css"
import Logic from "./register/Logic";
import Login from "./register/Login"
import SignUp from "./register/SignUp";
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import LoginIcon from '@mui/icons-material/Login';
import {Route, Routes, Link} from "react-router-dom";

// const API_URL = "http://www.omdbapi.com?apikey=4dc9bf8a";



const App = () => {

  return(
  <>
  <nav>
    <ul>
    
        <li className="nav-todo"> <Link to="/SignUp"> <HowToRegIcon from/> SignUp </Link></li>
        <li className="nav-todo"> <Link to="/"> <MovieFilterIcon/> Movie </Link> </li>
        <li className="nav-todo"> <Link to="/"> <LoginIcon/> Login </Link> </li>

    </ul>
  </nav>
    <Routes>
     <Route path="/moviee" element={<Logic />}/>
     <Route path="/SignUp" element={<SignUp />} />
     <Route path="/" element={<Login />} />
    </Routes>
    </>
    )    
}

export default App;