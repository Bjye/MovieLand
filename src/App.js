import React from "react";
// import "../src/components/Style.css";
import Signup from "./components/Signup";
import Login from "./components/Login";
import {Routes, Route, Link} from "react-router-dom";


const App=()=>{
  return( <>

<nav>
    <ul>
    
        <li className="nav-todo"> <Link to="/signup">  SignUp </Link></li>
        <li className="nav-todo"> <Link to="/"> Login </Link> </li>

    </ul>
  </nav>

    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
      </>
  )
}
export default App;