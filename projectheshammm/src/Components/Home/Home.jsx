import React, { useEffect } from "react";
import LoadingScreen from "../LoadingScreen/LoadingScreen";
import { Link } from "react-router-dom";
import MySlider from "../MySlider/MySlider";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProducts,
  products,
} from "../../Redux/AllProducts/AllProductsSlice";
import Loader from "../Loader/Loader";

export default function Home() {
  // create empty array to save data inter it   4   && 8

  // const [products, setproducts] = useState(null);

  // //2
  // async function getproducts() {

  //   try {
  //     const {data} = await axios.get('https://route-ecommerce-app.vercel.app/api/v1/products')

  //     console.log(data.data);
  //     setproducts (data.data); //5

  //   }
  //   catch(e) {
  //     console.log('Error: ', e );

  //   }

  // }
  //   // to call Api data  3
  // useEffect(function() {
  //   getproducts()
  // }, []);

  let dispatch = useDispatch();
  let { products, isLoading } = useSelector((state) => state.productRed);
  console.log(products);

  async function getData() {
    await dispatch(getAllProducts());
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {isLoading && <Loader/>}
      {/* 9 to check if data here or not if products == true show container*/}
      {/* 1- create design  */}
      {products ? (
        <div className="container py-4">
          <MySlider />

          <div className="row gy-4 mt-5">
            {/* map data to show it 6 */}
            {products.map(function (pro, idx) {
              return (
                <div key={idx} className="col-md-2">
                  {/* it is advanced step to put div in link to go to Product Details */}

                  <Link to={`/prodetails/${pro._id}`}>
                    <div className="item bg-primary text-white rounded-3 position-relative">
                      <img
                        src={pro.imageCover}
                        className="w-100"
                        alt={pro.title}
                      />

                      {/* we use it method to controls of title */}
                      <h6 className="text-center">
                        {pro.title.slice(0, pro.title.indexOf(" ", 20))}
                      </h6>
                      <h6>{pro.category.name}</h6>

                      <h6>
                        Price:
                        {pro.priceAfterDiscount ? (
                          <>
                            <span className="text-decoration-line-through">
                              {pro.price}
                            </span>

                            <span className="ms-3">
                              {pro.priceAfterDiscount}
                            </span>
                          </>
                        ) : (
                          <span>{pro.price}</span>
                        )}
                      </h6>
                      <div className="position-absolute top-0 end-0 bg-info p-1">
                        {pro.ratingsAverage}
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          {/* 7 loading screen from component */}
        </div>
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}
