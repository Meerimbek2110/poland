// import React from 'react';
// import './product.css';
// import { LiaShoppingBasketSolid } from "react-icons/lia";

// const Product = ({ data }) => {
//   return (
//     <div className="popular">
//         <div className="popular-zam">

//         <img src={data.image} />
//         <div className="popular-eat">
//             <h2>{data.title}</h2>
//             <h3 >{data.weight}</h3>
//             <h4>{data.brigada}</h4>
//             <h3>{data.oldprise}</h3>
//             <h3 className="old-price">{data.oldPrice} ₽</h3>
// <div className="popular-pay">
//   <h1>{data.price} ₽</h1>
//   <LiaShoppingBasketSolid className='shop-img' />
// </div>

//         </div>
//         </div>
//     </div>
//   );
// };

// export default Product;



import React, { useContext } from 'react';
import './product.css';
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { CartContext } from '../../contex/CartContex'; // путь к твоему контексту

const Product = ({ data }) => {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    // добавляем товар в корзину, можно добавить количество по умолчанию 1
    addToCart({ 
      id: data.id,
      image: data.image,
      title: data.title,
      weight: data.weight,
      price: data.price,
      quantity: 1
    });
  };

  return (
    <div className="popular">
      <div className="popular-zam">
        <img src={data.image} alt={data.title} />
        <div className="popular-eat">
          <h2>{data.title}</h2>
          <h3>{data.weight}</h3>
          <h4>{data.brigada}</h4>
          <h3>{data.oldprise}</h3>
          <h3 className="old-price">{data.oldPrice} ₽</h3>
          <div className="popular-pay">
            <h1>{data.price} ₽</h1>
            <LiaShoppingBasketSolid 
              className='shop-img' 
              onClick={handleAddToCart} 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;

