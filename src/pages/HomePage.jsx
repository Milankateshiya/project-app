import React from 'react';
import { Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Laptop', price: 999, category: 'Electronics', image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Smartphone', price: 699, category: 'Electronics', image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Headphones', price: 199, category: 'Accessories', image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'T-shirt', price: 25, category: 'Apparel', image: 'https://via.placeholder.com/200' }
];

const HomePage = () => {
  const categories = ['Electronics', 'Accessories', 'Apparel'];

  return (
    <div className="container my-5">
      <h1 className="text-center text-primary">Shop by Category</h1>
      <div className="row">
        {categories.map((category) => (
          <div key={category} className="col-md-4 mb-4">
            <div className="card shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
              <div className="card-body">
                <h3 className="card-title text-success">{category}</h3>
                <ul className="list-group list-group-flush">
                  {products
                    .filter(product => product.category === category)
                    .map((product) => (
                      <Link key={product.id} to={`/product/${product.id}`} className="list-group-item list-group-item-action">
                        <div className="d-flex justify-content-between">
                          <span>{product.name}</span>
                          <span>${product.price}</span>
                        </div>
                      </Link>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;
