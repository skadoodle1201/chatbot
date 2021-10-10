import React  from 'react';
import { Link } from 'react-router-dom';


import  './join.css';

const Join = () =>{
        return(
                <div className="joinOuterContainer">
                  <div className="joinInnerContainer">
                      <h1 className="heading">Join</h1>
                      <div>
                        <input placeholder="Name" className="joinInput" type="text" />
                      </div>
                      <div>
                        <input placeholder="Email" className="joinInput mt-20" type="email" />
                      </div>
                      <div>
                        <input placeholder="Password" className="joinInput mt-20" type="password" />
                      </div>
                      <Link to={`/chat`}>
                        <button className='button mt-20' type="submit">Sign Up</button>
                      </Link>
                      <Link to={`/`}>
                        <button className='button mt-20'>Sign In</button>
                      </Link>
                  </div>
                </div>
        )
}
export default Join;
