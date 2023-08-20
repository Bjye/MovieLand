// import React, { useState } from "react";
// import "./Style.css" ; 


// export default function SignUp(props){

//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');
//     const [name, setName] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="Appp">
//         <div className="auth-form-container login-form register-form neww">
//             <h2>Register</h2>
//         <form className="register-form" onSubmit={handleSubmit}>
//             <label className="r-label" htmlFor="name">Full name</label>
//             <input className="r-input"  value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
//             <label className="r-label" htmlFor="email">email</label>
//             <input className="r-input" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//             <label className="r-label" htmlFor="password">password</label>
//             <input className="r-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//             <button className="button-sign" type="submit">Log In</button>
//         </form>
//         <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
//     </div>
//     </div>
//     )
// }


import React, { useState } from "react";
import "./Style.css";

export default function SignUp(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered email and password match the fixed values
    if (email === "awura@gmail.com" && pass === "123456") {
      console.log("Signup successful");
      // Perform any additional actions here, such as redirecting to a dashboard
    } else {
      console.log("Invalid email or password");
      // Display an error message or perform any other error handling
    }
  };

  return (
    <div className="Appp">
      <div className="auth-form-container login-form register-form neww">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label className="r-label" htmlFor="name">
            Full name
          </label>
          <input
            className="r-input"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
            id="name"
            placeholder="full Name"
          />
          <label className="r-label" htmlFor="email">
            email
          </label>
          <input
            className="r-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="youremail@gmail.com"
            id="email"
            name="email"
          />
          <label className="r-label" htmlFor="password">
            password
          </label>
          <input
            className="r-input"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="********"
            id="password"
            name="password"
          />
          <a href="/" className="button-sign">Register</a>
          {/* <button className="button-sign" type="submit"> 
              Register 
           </button> */}
        </form>
       <button className="link-btn">
       <a href="/" className="link-btn">  Already have an account? Login here.</a>
       </button>
      </div>
    </div>
  );
}


