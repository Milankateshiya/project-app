import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const products = [
  { id: 1, name: 'Laptop', description: 'High performance laptop', price: 999, image: 'https://via.placeholder.com/200' },
  { id: 2, name: 'Smartphone', description: 'Latest model smartphone', price: 699, image: 'https://via.placeholder.com/200' },
  { id: 3, name: 'Headphones', description: 'Noise-cancelling headphones', price: 199, image: 'https://via.placeholder.com/200' },
  { id: 4, name: 'T-shirt', description: 'Comfortable cotton t-shirt', price: 25, image: 'https://via.placeholder.com/200' }
];

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6">
          <img src={product.image} alt={product.name} className="img-fluid rounded" />
        </div>
        <div className="col-md-6">
          <h1 className="text-info">{product.name}</h1>
          <p className="lead">{product.description}</p>
          <p><strong>Price:</strong> ${product.price}</p>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
