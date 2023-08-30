import React from "react";
import "./App.css"; 
import VSALT from "./video/VSALT.mp4";
import VBlacklist from "./video/VBlacklist.mp4";
import VIronMan from "./video/VIronMan.mp4";
import Batman from "./video/Batman.mp4";



const Discription = () => {

   return (
    <div>
    <h1>coming soon.....</h1>
         
     <div className="box-container">
     
        <div className="box1 box">
        <video autoPlay loop muted playsInline className="back-video">
        <source src={VSALT} />
      </video>
      
        </div>
        <div className="box2 box">
        <video autoPlay loop muted playsInline className="back-video">
        <source src={VBlacklist} />
      </video>
        {/* <div className="video-description">
         <h2>Title 1</h2>
    <p>This is a short paragraph describing the video.</p>
    </div> */}
        </div>
        <div className="box3 box">
        <video autoPlay loop muted playsInline className="back-video">
        <source src={VIronMan} />
      </video>
        </div>
        <div className="box4 box">
        <video autoPlay loop muted playsInline className="back-video">
        <source src={Batman} />
      </video>
        </div>
        
      </div>
    
    </div>
  );
};

export default Discription;
