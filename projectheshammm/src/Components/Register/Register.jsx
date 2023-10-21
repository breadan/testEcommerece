// import React from 'react'
import { useFormik } from 'formik';

import * as Yup from 'yup'
import axios from 'axios';

import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

import React, {useState, useEffect} from 'react';

//Authentication  => Register Login

export default function Register() {


  //first step to doing loading bottom after import use State
  const [isLoading, setIsLoading] = useState(false);



  //3 yup
  let validation = Yup.object({
    name:Yup.string().required('name is required').min(3, 'name minlength 3').max(10, 'name max length 10'),
    email:Yup.string().required('email is required').email('email is invalid'),
    password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/, 'password wrong'),
    rePassword:Yup.string().required('rePassword is required').oneOf([Yup.ref('password')], 'password & rePassword not matched'),
    phone:Yup.string().required('phone is required').matches(/^(02)?01[0125][0-9]{8}$/, 'phone must be egy'),
  })

  //to go to log in if data is valid 
  const navigate =  useNavigate();


  //6 to send data of user to back end create fun it take parameter & call it in submit
  async function registerNewUser(obj) {
        //second steps
        // setIsLoading(true);

    //put axios in parameter because it return response (data) & put it in try
    try {
      

      let {data} = await  axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signup', obj);

      //third 
      // setIsLoading(false);

      //to show data if it came from backEnd
      console.log(data);

      //to show data if it valid
      if(data.message === 'success') {
        $('.messageSuccess').fadeIn(1000, function() {
          navigate('/login')
        });
        // navigate('/login');
        // setIsLoading(false);

      }

    }
    catch(err) {
      console.log(err.response.data.message);

      // to show error by jQuery
      $('.messageError').fadeIn(1000, function() {
        setTimeout(() => {
          $('.messageError').fadeOut(1000)

        })
      });
      // setIsLoading(false);
    }
   
  }

  //1     main function
  let formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      email: '',
      password: '',
      rePassword: '',

    },

    //4  call yup
    validationSchema:validation,


    //2
    onSubmit: function(values) {

      //call fun of api
      registerNewUser(values)

    }


   } 
  );





    return <>
  
  <div className="w-75 mx-auto py-4">
    <h3>Register Now: </h3>
    {/* 19 to show error if it here from backEnd & put it in if condition*/}

    {/* to show error if it here from backEnd use inline style*/}
    <div style={{'display': 'none', 'textAlign': 'center'}} className='alert alert-danger messageError'>
    Account Already Exists
    </div>

    {/* to show data if it here from backEnd use inline style   it valid*/}
    <div style={{'display': 'none', 'textAlign': 'center'}} className='alert alert-success messageSuccess'>
    Success
    </div>
    


    {/* //5 create form */}
    <form onSubmit={formik.handleSubmit}>

        {/* create div to show error onBlur & put it in check    9*/}

      <label htmlFor="name">Name: </label>
      <input className='form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.name}  type="text" name='name' id='name' />
      {formik.errors.name && formik.touched.name? <div className="alert alert-danger">{formik.errors.name}</div>: null}
    
      <label htmlFor="email">Email: </label>
      <input className='form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email}  type="email" name='email' id='email' />
      {formik.errors.email && formik.touched.email? <div className="alert alert-danger">{formik.errors.email}</div>: null}

      <label htmlFor="password">Password: </label>
      <input className='form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.password}  type="password" name='password' id='password' />
      {formik.errors.password && formik.touched.password? <div className="alert alert-danger">{formik.errors.password}</div>: null}

      <label htmlFor="password">rePassword: </label>
      <input className='form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.rePassword}  type="password" name='rePassword' id='rePassword' />
      {formik.errors.rePassword && formik.touched.rePassword? <div className="alert alert-danger">{formik.errors.rePassword}</div>: null}

      <label htmlFor="phone">Phone: </label>
      <input onBlur={formik.handleBlur} className='form-control mb-2' onChange={formik.handleChange} value={formik.values.phone}  type="tel" name='phone' id='phone' />
      {formik.errors.phone && formik.touched.phone? <div className="alert alert-danger">{formik.errors.phone}</div>: null}

    
      {/* 17 but it in if condition*/}
      {/* {isloading? <button  className='btn bg-main text-white' type='button'><i className='fas fa-spinner fa-spin'></i></button>:<button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white' type="submit" >Register</button>} */}

      <button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white' type="submit" >Register</button>
  
  
  
    </form>  
    
  </div>  
  
  </>
}
