// import React, { useContext } from "react";
// import { CartContext } from "../../contex/CartContex";

// function Cart() {
//   const { cartItems } = useContext(CartContext);

//   return (
//     <div>
//       <h1>Корзина</h1>
//       {cartItems.length === 0 ? (
//         <p>Корзина пустая</p>
//       ) : (
//         <ul>
//           {cartItems.map((item, i) => (
//             <li key={i}>
//               <img src={item.img} alt={item.name} width="50" />
//               {item.name} — {item.price} ₽
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Cart;




// import React, { useContext } from "react";
// import { CartContext } from "../../contex/CartContex";
// import "./cart.css";

// function Cart() {
//   const { cartItems } = useContext(CartContext);

//   const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

//   return (
//     <div className="cart-page">
//       <h1>Корзина</h1>
//       {cartItems.length === 0 ? (
//         <p>Корзина пуста</p>
//       ) : (
//         <ul className="cart-list">
//           {cartItems.map((item, index) => (
//             <li key={index} className="cart-item">
//               <img src={item.img} alt={item.name} width="60" />
//               <div className="cart-info">
//                 <p className="cart-name">{item.name}</p>
//                 <p className="cart-weight">{item.weight}</p>
//                 <p className="cart-quantity">Кол-во: {item.quantity}</p>
//                 <p className="cart-sum">Сумма: {item.price * item.quantity} ₽</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//       {cartItems.length > 0 && <h3>Итого к оплате: {totalPrice} ₽</h3>}
//     </div>
//   );
// }

// export default Cart;



import React, { useContext } from 'react';
import { CartContext } from '../../contex/CartContex';
import './cart.css';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-container">
      <h1>Корзина</h1>
      {cartItems.length === 0 ? (
        <p>Корзина пуста</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <img src={item.image} alt={item.title} className="cart-item-img"/>
                <div className="cart-item-info">
                  <h2>{item.title}</h2>
                  <p>{item.weight}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                  </div>
                  <p>Сумма: {item.price * item.quantity} ₽</p>
                  <button onClick={() => removeFromCart(item.id)}>Удалить</button>
                </div>
              </div>
            ))}
          </div>
          <h2>Итого к оплате: {total} ₽</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
