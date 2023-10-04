import React from "react";
import "./Style.css";
import Image from "../Images/3D-Secuirty-badge 1.png";
import Image2 from "../Images/Social Media/Facebook.png";
import Image3 from "../Images/Social Media/Twitter.png";
import Image4 from "../Images/Logo.png";



const Login=()=>{
    return(
        <>
          
        <div className="container">
          <div className="div1">
          <div className="LogoContainer2">
               <img className="logo2" src={Image4} alt="logo" />
               <p className="LogoTextTwo">GateLab secures your company</p>
           </div>
           <div className="ImageContainer">
           <img className="picture" src={Image} alt="securitypic"/>
           </div>           
            <div className="div2">
              <form className="Form">
                <h1 className="accTitle2">Login</h1>
                <div className="inputContainer">                  
                 
                   <div className="inputContainer">
                         <input className="Email2" type="text" id="email" />
                         <label className="labelTwoEmail" htmlFor="email">Email</label>
                   </div>
                   <div className="inputContainer">
                         <input className="Password2" type="Password" id="password" />
                         <label className="labelTwo" htmlFor="password">Password</label>
                   </div>
                 </div>  
                 <div>
                  <button className="button2">Create Account</button>
                  <p className="Ltext">Don't have an account? <span className="signup"><a href="/signup">Signup</a></span></p>

                  <div className="OrContainer2">
                  <hr className="line2" />
                       <p className="Ortext2">Or Continue with</p>
                       <hr className="line2" />
                  </div> 

                  <div className="TwoButtons2">
                      <button className="buttonOne1"><img className="imagetwo" src={Image2}/>Signup using Facebook</button>
                       <button className="buttonTwo2"><img className="imagethree" src={Image3}/>Signup using Twitter</button>
                  </div>                 
                 </div>
              </form>
              
            </div>

          </div>
          </div>
        
        </>
        
    )
}

export default Login;