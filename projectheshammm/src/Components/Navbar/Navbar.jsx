import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logo from '../../images/freshcart-logo.svg'
import { cleanData } from 'jquery'

export default function Navbar({currUser, clearUserData}) {

  const navigate = useNavigate();


  function logOutUser() {
    clearUserData();

      //go to log in after click log out
    navigate('/login');



  }
 





  return <>
  
            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <Link className=" navbar-brand ms-2" to="/home">
                    <img src={logo} className='' alt="logo" />
                </Link>
                

                <div className="container">
                    
                  

                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                      aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                      <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                      
                        <li className="nav-item">
                          <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/brands">Brands</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/cart">Cart</Link>
                        </li>
                      
                      </ul>
                    
                    </div>

                  

                  <div className="collapse navbar-collapse" id="collapsibleNavId">
                  <div className ="collapse navbar-collapse justify-content-end" id="collapsibleNavId">
                        <li className='nav-item d-flex '>
                            <i className='fab mx-2 fa-facebook'></i>
                            <i className='fab mx-2 fa-twitter'></i>
                            <i className='fab mx-2 fa-instagram'></i>
                            <i className='fab mx-2 fa-tiktok'></i>
                            <i className='fab mx-2 fa-linkedin'></i>
                            <i className='fab mx-2 fa-youtube'></i>
                        </li>
                  </div>
                    <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                    

                        {currUser? <>
                              <li className="nav-item">
                                <span onClick={logOutUser} className="nav-link">Logout</span>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="/profile">Profile</Link>
                              </li> </> : <>
                              
                              <li className="nav-item">
                                <Link className="nav-link" to="/login">Login</Link>
                              </li>
                              <li className="nav-item">
                                <Link className="nav-link" to="/register">Register</Link>
                              </li>
                        </>}
                    
                    
                    </ul>
                  
                  </div>

                </div>
                

                
                
            
            </nav>
  
  </>
}
