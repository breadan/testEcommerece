import axios from 'axios'
import React, { useEffect, useState } from 'react'
import LoadingScreen from '../LoadingScreen/LoadingScreen';
import { Link } from 'react-router-dom';

export default function Brands() {

  //3 it is array to save data from response
  const [allBrands, setAllBrands] = useState(null);


  //1
  async function getAllBrands() {

    try {

      const {data} = await axios.get('https://route-ecommerce-app.vercel.app/api/v1/brands')

      console.log(data.data);

      //4 put data in array
      setAllBrands(data.data);

    }
    catch(e) {
      console.log('Error: ', e);

    }

  }

  //2-
  useEffect(function() {

    getAllBrands()
  }, []);


  return <>

      {/* it is very important you must do if condition to show data */}

      {allBrands? 
      <div className="container">

          <div className="row align-items-center">

            <div className="col-md-3">

              <div className="title">

                <h3>
                  Our Brands
                </h3>

                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati alias, mollitia necessitatibus perferendis quos architecto.</p>

              </div>

            </div>

              {/* it is repeated element */}

              {/* to show Brands */}

              {allBrands.map(function(pro, idx) {return <div key={idx} className="col-md-3"> 

              {/*it is advanced put div in link to go to details of brands & take id*/}
              <Link to={`/brandproducts/${pro._id}`}>
                  <div className="brand text-center">

                  <img src={pro.image} alt={pro.name} className='w-100' />

                  <h6>{pro.name} </h6>

                        {/*<h6>{pro._id}</h6> */}

                </div>
              
              
              </Link>
              

            </div>})};
              

          </div>

      </div> : <LoadingScreen />}

      
      
      
  </>
}
