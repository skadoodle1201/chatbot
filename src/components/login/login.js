import React from 'react';
import { Link } from 'react-router-dom';


import './login.css';

const Login = () =>{
        return(
                <div className="loginOuterContainer">
                  <div className="loginInnerContainer">
                      <h1 className="heading">Login</h1>
                      <div>
                        <input placeholder="Name" className="logininput" type="text" />
                      </div>
                      <div>
                        <input placeholder="Password" className="logininput mt-20" type="password" />
                      </div>
                      <Link to={`/chat`}>
                        <button className='button mt-20' type="submit">Sign In</button>
                      </Link>
                      <Link to={`/join`}>
                        <button className='button mt-20'>Sign Up</button>
                      </Link>
                  </div>
                </div>
        )
}
export default Login;
