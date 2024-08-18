import React, { useState } from 'react'
import Data from "../../Data.json";
import Product from './Product';
import './style.css';

const ProductsList = () => {
    const [products, setProducts] = useState(Data.products);
    
  return (
    <div>
        <div className='product__list'>
            {
                products.map((obj)=>{
                    return(
                        <Product key={obj.id} product={obj}/>
                    )
                })
            }
        </div>
    </div>
  )
}

export default ProductsList