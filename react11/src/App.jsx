import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [productData, setProductData] = useState([]);
  const [cartData, setCartData] = useState([]);

  const btnClicked = async () => {
    const response = await axios.get('https://fakestoreapi.com/products');
    console.log(response.data);
    setProductData(response.data);
  };

  const addToCart = (idx) => {
    setCartData([...cartData, productData[idx]]);
  };

  // Calculate total price of items in cart
  const calculateTotal = () => {
    return cartData.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="p-2">
      <button onClick={btnClicked} className="active:scale-95 bg-green-500 text-white rounded px-4 py-2">
        Get Data
      </button>
      <div className="flex">
        <div className="w-3/4 bg-blue-100 flex flex-wrap gap-2">
          {productData.map(function (elem, idx) {
            return (
              <div key={idx} className="bg-white w-40 m-1 p-3 text-center">
                <img className="h-32 mx-auto" src={elem.image} alt="" />
                <h1 className="h-18 overflow-hidden">{elem.title}</h1>
                {/* Display product price */}
                <p className="font-bold text-lg mt-2">₹{elem.price}</p>
                <button
                  onClick={() => {
                    addToCart(idx);
                  }}
                  className="active:scale-95 mt-4 bg-yellow-400 text-white rounded px-5 py-2"
                >
                  Add to Cart
                </button>
              </div>
            );
          })}
        </div>
        <div className="w-1/4 bg-green-100 p-2">
          {cartData.map(function (elem, idx) {
            return (
              <div key={idx} className="flex p-2 mb-2 rounded items-center bg-white">
                <img className="h-14" src={elem.image} alt="" />
                <div className="ml-2">
                  <h1 className="text-sm overflow-hidden">{elem.title}</h1>
                  <p className="font-semibold">₹{elem.price}</p>
                </div>
              </div>
            );
          })}
          {/* Display cart total */}
          {cartData.length > 0 && (
            <div className="mt-4 p-3 bg-white rounded">
              <h2 className="text-lg font-bold">Cart Total</h2>
              <p className="text-xl font-bold text-green-600">₹{calculateTotal()}</p>
              <p className="text-sm text-gray-500">{cartData.length} items in cart</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;