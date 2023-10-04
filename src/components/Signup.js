import React from "react";
import "./Style.css";
import Image from "../Images/3D-Secuirty-badge 1.png";
import Image2 from "../Images/Social Media/Facebook.png";
import Image3 from "../Images/Social Media/Twitter.png";
import Image4 from "../Images/Logo.png";
// import ReactDom from "react-dom";
// import { Container } from "@mui/material";


const Signup=()=>{
    return(
        <>
          
        <div className="container">
          <div className="div1">
          <div className="LogoContainer">
               <img className="logo" src={Image4} alt="logo" />
               <p className="LogoText">GateLab secures your company</p>
           </div>
           <div className="ImageContainer">
           <img className="picture" src={Image} alt="securitypic"/>
           </div>           
            <div className="div2">
              <form className="Form">
                <h1 className="accTitle">Create Account</h1>
                <div className="inputContainer">                  
                  <input className="Fname" type="text" id="firstName"/>
                   <label className="labelOne" htmlFor="firstName">FirstName</label>
                   <div className="inputContainer">
                         <input className="Lname" type="text" id="Lname" />
                         <label className="labelOne" htmlFor="Lname">LastName</label>
                   </div>
                   <div className="inputContainer">
                         <input className="Email" type="text" id="email" />
                         <label className="labelOne" htmlFor="email">Email</label>
                   </div>
                   <div className="inputContainer">
                         <input className="Gender" type="text" id="gender" />
                         <label className="labelOne" htmlFor="gender">Gender</label>
                   </div>
                   <div className="inputContainer">
                         <input className="Password" type="Password" id="password" />
                         <label className="labelOne" htmlFor="password">Password</label>
                   </div>
                 </div>  
                 <div>
                  <button className="button1">Create Account</button>
                  <p className="Stext">Already have an account? <span className="login"><a href="/">Login</a></span></p>
                  <div className="OrContainer">
                  <hr className="line1" />
                       <p className="Ortext">Or</p>
                       <hr className="line1" />
                  </div> 
                  <div className="TwoButtons">
                      <button className="buttonOne"><img className="imagetwo" src={Image2}/>Signup using Facebook</button>
                       <button className="buttonTwo"><img className="imagethree" src={Image3}/>Signup using Twitter</button>
                  </div>                 
                 </div>
              </form>
              
            </div>

          </div>
          </div>
        </>
        
    )
}

export default Signup;