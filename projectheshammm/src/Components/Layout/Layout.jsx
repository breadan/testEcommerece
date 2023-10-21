import React from 'react'
import Navbar from './../Navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout({currUser, clearUserData}) {
  return <>
  
          <Navbar clearUserData = {clearUserData} currUser= {currUser}/>  


          <Outlet/>



      <footer className="p-4">
        <h2>Fresh Cart Footer</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing.</p>


        <div className="container d-flex justify-content-between mb-3">

          <input type="text" className='form-control w-75' placeholder='Email...' />

          <button className='btn btn-success ms-3 w-25'>Share App Link</button>
        </div>

        <div className="container border-top border-bottom border-2 border-dark py-4 mt-3 d-flex justify-content-between align-items-center">
          <div className="leftPart">
            <ul className=' d-flex list-unstyled '>

              <li className='me-2 text-primary'>
                <h6>Pay Parteners</h6>
              </li>

              <li className='me-2 text-primary'>
               <i className="fa-brands fa-paypal"></i>
              </li>

              <li className='me-2 text-primary'>
               <i className="fa-brands fa-cc-amazon-pay"></i> 
              </li>

              <li className='me-2 text-primary'>
                <i className="fa-brands fa-cc-mastercard"></i>
              </li>

            </ul>
            
          </div>
          <div className="rightPart d-flex align-items-center"> 
            <h6>Get Deliveries With FreshCart</h6>

            <button className='btn btn-dark btn-lg mx-3'>
              <i className="fa-brands fa-app-store-ios me-2"></i>
              <span>Available on App Store</span>                     
            </button>

            <button className='btn btn-dark btn-lg'>
              <i className="fa-brands fa-google-play me-2"></i>
              <span>Get it From Google Play</span>             
            </button>

          </div>

        </div>
      </footer>
  </>
}
