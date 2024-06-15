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
         <h1>SHOP NOW</h1>
         <div>
      <ul>
        <div className={s.items}>
        {data.map(product => (
          <li key={product._id} className={s.list}>
              <div> 
                <img src={product.thumbnail}  className={s.image}/>
                <div className={s.details}>
                  <div className={s.title}>{product.title}</div>
                  <div>$ {product.price}</div>
                </div>
                <div  className={s.section}>
                  <div>
                    <p className={s.rating}>{product.rating}</p>
                  </div>
                  <div>
                    <button className={s.cartButton}>Add to cart</button>
                  </div>
                </div>
              </div>
           
          </li>
        ))}
        </div>
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