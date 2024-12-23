import React, { useState } from 'react';

const CartPage = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div className="container my-5">
      <h1>Your Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          <ul className="list-group">
            {cart.map((product, index) => (
              <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                {product.name} - ${product.price}
                <button className="btn btn-danger btn-sm">Remove</button>
              </li>
            ))}
          </ul>
          <h3 className="mt-3">Total: ${calculateTotal()}</h3>
        </div>
      )}
    </div>
  );
};

export default CartPage;
