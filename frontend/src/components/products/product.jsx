import s from "../products/product.module.css"
import React, { useEffect, useState } from "react";

function Products(){
    // const [products, setProducts] = useState([]);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);

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
      });
  }, []);


  if (error) return <p>Error: {error.message}</p>;

    return(
        <>
         <div>
      <h1>Product List</h1>
      <ul>
        {data.map(product => (
          <li key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.price}</p>
          </li>
        ))}
      </ul>
    </div>  
        {/* <div>dd</div>
        <div className={s.productLsit}>
                    {products.map(products => (
                        <div key={products.id} className={s.product}>
                            <h2 className={s.title}>{products.title}</h2>
                        </div>
                    ))}
                </div> */}
        </>
    );
}

export default Products;