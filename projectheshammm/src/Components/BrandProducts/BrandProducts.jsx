import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Link, useParams } from 'react-router-dom';

export default function BrandProducts() {

  //use Params to catch id it advanced it return id
  const {id}= useParams()


   // to save data
   const[allProducts, setAllProducts]= useState(null);

  async function getBrandProducts() {

  try {
    const {data} = await axios.get('https://route-ecommerce-app.vercel.app/api/v1/products', {
      params:{'brand' : id}
    })

    console.log(data.data);
    setAllProducts(data.data);
    
  } catch (error) {
    console.log(error);
  }
  }


  //to call data & show it
  useEffect(function() {
    getBrandProducts();
  }, [])






  return <fragment>

      {allProducts?
    <div className='container'>

      <div className='row'>

        {/* condition if arr empty show message */}

        {allProducts.length == 0? <h2 className='text-center py-5'>
        No Products Available Right Now ...
          </h2> :  allProducts.map(function(pro, idx) 
          {return <div key={idx} className='col-md-3'>
            
            <Link to={`/prodetails/${pro.id}`}>   
              <div className="item bg-primary text-white rounded-3 position-relative">

                  <img src={pro.imageCover} className='w-100' alt={pro.title} />

                  {/* we use it method to controls of title */}
                  <h6 className='text-center'>{pro.title.slice(0, pro.title.indexOf(' ', 20))}</h6>
                  <h6>{pro.category.name}</h6>
                  <h6>Price:{pro.priceAfterDiscount?
                  <>
                      <span className='text-decoration-line-through'>{pro.price}</span>
                      <span className='ms-3'>{pro.priceAfterDiscount}</span>
                  </>
                        : <span>{pro.price}</span>}</h6>
                    <div className="position-absolute top-0 end-0 bg-info p-1">
                          {pro.ratingsAverage}
                    </div>
              </div>
            </Link>

        </div>})}
      
      </div>

    </div>: <LoadingScreen/>}
  
  
  
  
  
         </fragment>
}
