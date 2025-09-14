import React from 'react';
import './product.css';
import { LiaShoppingBasketSolid } from "react-icons/lia";

const Product = ({ data }) => {
  return (
    <div className="popular">
        <div className="popular-zam">

        <img src={data.image} />
        <div className="popular-eat">
            <h2>{data.title}</h2>
            <h3 >{data.weight}</h3>
            <h4>{data.brigada}</h4>
            <h3>{data.oldprise}</h3>
            <h3 className="old-price">{data.oldPrice} ₽</h3>
<div className="popular-pay">
  <h1>{data.price} ₽</h1>
  <LiaShoppingBasketSolid className='shop-img' />
</div>

        </div>
        </div>
    </div>
  );
};

export default Product;

