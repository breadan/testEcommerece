import React from 'react'
import { useFormik } from 'formik';

import * as Yup from 'yup'
import axios from 'axios';

import $ from 'jquery';
import { useNavigate } from 'react-router-dom';

//Authentication  => Register Login

export default function Login({getUserData}) {


  //3 yup
  let validation = Yup.object({
    email:Yup.string().required('email is required').email('email is invalid'),
    password:Yup.string().required('password is required').matches(/^[A-Z][a-z0-9]{5,10}$/, 'password wrong'),
  })

  //to go to log in if data is valid 
  const navigate =  useNavigate();


  //6 to send data of user to back end create fun it take parameter & call it in submit
  async function loginNewUser(obj) {

    //put axios in parameter because it return response (data) & put it in try
    try {

      let {data} = await  axios.post('https://route-ecommerce.onrender.com/api/v1/auth/signin', obj);

      //to show data if it came from backEnd
      console.log(data);

      //to show data if it valid
      if(data.message === 'success') {

        //to show token  //advanced
        console.log(data.token);
        localStorage.setItem('tkn', data.token); 
        //the fun of token
        getUserData();


        $('.messageSuccess').fadeIn(1000, function() {
          navigate('/home');
        });

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
    }
   
  }

  //1     main function
  let formik = useFormik({
    initialValues: {
      
      email: '',
      password: '',

    },

    //4  call yup
    validationSchema:validation,


    //2
    onSubmit: function(values) {

      //call fun of api
      loginNewUser(values)

    }


   } 
  );





    return <>
  
        <div className="w-75 mx-auto py-4">
          <h3>Login Now: </h3>
          {/* 19 to show error if it here from backEnd & put it in if condition*/}

          {/* to show error if it here from backEnd use inline style*/}
          <div style={{'display': 'none', 'textAlign': 'center'}} className='alert alert-danger messageError'>
          Email or Password incorrect
          </div>

          {/* to show data if it here from backEnd use inline style   it valid*/}
          <div style={{'display': 'none', 'textAlign': 'center'}} className='alert alert-success messageSuccess'>
            Success
          </div>
          


          {/* //5 create form */}
          <form onSubmit={formik.handleSubmit}>

              {/* create div to show error onBlur & put it in check    9*/}

            <label htmlFor="email">Email: </label>
            <input className='form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.email}  type="email" name='email' id='email' />
            {formik.errors.email && formik.touched.email? <div className="alert alert-danger">{formik.errors.email}</div>: null}

            <label htmlFor="password">Password: </label>
            <input className='form-control mb-2' onBlur={formik.handleBlur}  onChange={formik.handleChange} value={formik.values.password}  type="password" name='password' id='password' />
            {formik.errors.password && formik.touched.password? <div className="alert alert-danger">{formik.errors.password}</div>: null}
          
            {/* 17 but it in if condition*/}
            {/* {isloading? <button  className='btn bg-main text-white' type='button'><i className='fas fa-spinner fa-spin'></i></button>:<button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white' type="submit" >Register</button>} */}

            <button disabled={!(formik.isValid && formik.dirty)} className='btn bg-main text-white' type="submit" >Login</button>
        
        
        
          </form>  
          
        </div>  
  
  </>
}
