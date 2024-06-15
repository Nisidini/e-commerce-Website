import React, { useEffect, useState } from "react";
import s from "../products/product.module.css";

function Products() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/coderdost/MERN-ecommerce-backend/main/data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setData(data.products);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);

  const handleAddToCart = (product) => {
    fetch('http://localhost:5000/api/addToCart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: product._id,
        name: product.title,
        image: product.thumbnail,
        price: product.price,
        quantity: 1, // Default quantity to 1
      }),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  if (error) return <p>Error: {error.message}</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <>
      <h1>SHOP NOW</h1>
      <div>
        <ul>
          <div className={s.items}>
            {data.map(product => (
              <li key={product._id} className={s.list}>
                <div>
                  <img src={product.thumbnail} className={s.image}/>
                  <div className={s.details}>
                    <div className={s.title}>{product.title}</div>
                    <div>$ {product.price}</div>
                  </div>
                  <div className={s.section}>
                    <div>
                      <p className={s.rating}>{product.rating}</p>
                    </div>
                    <div>
                      <button className={s.cartButton} onClick={() => handleAddToCart(product)}>
                        Add to cart
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </>
  );
}

export default Products;
