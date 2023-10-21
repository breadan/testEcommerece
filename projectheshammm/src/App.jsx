// import React from 'react'
import React, { useEffect, useState } from 'react'

import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Brands from './Components/Brands/Brands';
import Cart from './Components/Cart/Cart';
import BrandProducts from './Components/BrandProducts/BrandProducts';
import ProDetails from './Components/ProDetails/ProDetails';
import Profile from './Components/Profile/Profile';

import notFound from '../src/images/error.svg'
import jwtDecode from 'jwt-decode';



export default function App() {

  // to test if user create log in or not
  function ProtectedRoute({children}) {

    if(currUser == null) {
      return <Navigate to='/login'/>
    }    
    else {
      return <>
        {children}
      
      </>
    }
  }
  

  //create variable to save data
  const [currUser, setCurrUser] = useState(null);

  //current User data   advanced
  function getUserData() {

    //decode user token
    const userData = jwtDecode(localStorage.getItem('tkn'));

    setCurrUser(userData);    //it edit data

    console.log(userData);
  }

  //to clear user Data & handle log Out
  function clearUserData() {
    localStorage.removeItem('tkn');
    setCurrUser(null);
  }


  const router =  createBrowserRouter([
    {path: '', element: <Layout clearUserData={clearUserData} currUser={currUser}/>, children: [
      {index: true, element:<Home/>},
      {path: 'home', element:<Home/>},
      {path: 'prodetails/:id', element: <ProtectedRoute>  <ProDetails/></ProtectedRoute>},
      {path: 'brands', element: <Brands/>},
      {path: 'brandproducts/:id', element: <BrandProducts/>},
      {path: 'cart', element: <ProtectedRoute><Cart/></ProtectedRoute>},
      {path: 'login', element: <Login getUserData = {getUserData}/>},
      {path: 'register', element: <Register />},
      {path: 'profile', element: <ProtectedRoute> <Profile crrUser={currUser}/> </ProtectedRoute>},
      // you can give it text-center py-5
      {path: '*', element: <div className='vh-100 d-flex justify-content-center align-items-center'>
        <img src={notFound} className=' ' alt="404" />
      </div>}
    ]}
      

  ]) 

  // create fun here if user reload go to storage & take data then put it in currUser
  useEffect(function() {

    if(localStorage.getItem('tkn') != null && currUser== null ) {
      getUserData();
    }

    console.log('Reload');
  }, []);






  return <>
  
    <RouterProvider router={router}/>  
  </>
}
