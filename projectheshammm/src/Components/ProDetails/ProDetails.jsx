import React, { useEffect, useState } from 'react'
import axios from 'axios';
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { useNavigate, useParams } from 'react-router-dom';



export default function ProDetails() {



  //to navigate
  const hamada = useNavigate();

  // advanced to catch id from path (use Params)

  const {id} = useParams();
  console.log(id);

  //3
  const [proDetails, setProDetails] = useState(null)

  //1 
  async function getProDetails() {

    try {
      // it advanced u send id with fun

      const {data} = await axios.get(`https://route-ecommerce-app.vercel.app/api/v1/products/${id}`)

      console.log(data.data);

      setProDetails(data.data);
      
    } catch (error) {
      console.log(error);
      hamada('65165')
    }
    
  }

  //2
  useEffect(function() {

    getProDetails()


  }, [])






  return <>

  {proDetails? <div className="container py-4">

<div className="row">

  <div className="col-md-3">
    <img src={proDetails.imageCover} alt={proDetails.title} className='w-100' />
  </div>

      <div className="col-md-9">
        <h2>{proDetails.title}</h2>
        <p>{proDetails.description}</p>
        <h5>{proDetails.price}</h5>
        <h5>{proDetails.quantity}</h5>
        
        {/* <h2>{proDetails.details}</h2> */}
        <h5>{proDetails.id}</h5>


        {/* <button onClick={function() {addProductToCart(proDetails.id)}} className='btn btn-success w-100'> Add Product to Cart +</button> */}
          </div>
        </div>
  </div> : <LoadingScreen />}

  



  </>
}
