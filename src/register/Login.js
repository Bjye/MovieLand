// import React, { useState } from "react";
// import "./Style.css";

// export default function Login(props){
//     const [email, setEmail] = useState('');
//     const [pass, setPass] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         console.log(email);
//     }

//     return (
//         <div className="Appp">
//         <div className="auth-form-container  login-form">
//             <h2>Login</h2>
//             <form className="login-form" onSubmit={handleSubmit}>
//                 <label className="r-label" htmlFor="email">email</label>
//                 <input className="r-input" value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
//                 <label className="r-label" htmlFor="password">password</label>
//                 <input className="r-input" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
//                 <button className="button-sign" type="submit">Log In</button>
//             </form>
//             <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
//         </div>
//         </div>
//     )
// }


import React, { useState } from "react";
import "./Style.css";
import Logic from "./Logic";

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the entered email and password match the fixed values
    if (email === "auwra@gmail.com" && pass === "123456") {
      console.log("Login successful");
      setLoggedIn(true);
    } else {
      console.log("Invalid email or password");
      // Display an error message or perform any other error handling
    }
  };

  if (loggedIn) {
    return <Logic />;
  }

  return (
    <div className="Appp">
      <div className="auth-form-container login-form">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
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
          <button className="button-sign" type="submit">
            Log In
          </button>
        </form>
        <button
          className="link-btn"
          onClick={() => props.onFormSwitch("register")}
        >
        <a href="/Signup" className="link-btn"> Don't have an account? Register here.</a>
        </button>
      </div>
    </div>
  );
}