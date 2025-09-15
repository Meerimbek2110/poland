// import React, { useState } from "react";
// import { LiaShoppingBasketSolid } from "react-icons/lia";
// import { Link } from "react-router-dom";

// // Замените эти пути на реальные пути к вашим изображениям пицц
// import pizza1 from "../../assets/pizza1.jpg";
// import pizza2 from "../../assets/pizza2.jpg";
// import pizza3 from "../../assets/pizza3.jpg";
// import pizza4 from "../../assets/pizza4.jpg";

// // Используем тот же CSS-файл для стилей
// import "./aksii.css";

// const aktsiiData = [
//   {
//     id: 1,
//     name: "Маргарита",
//     weight: "400 г",
//     desc: "Томаты, моцарелла, базилик",
//     price: 360,
//     oldPrice: 450,
//     img: pizza1,
//   },
//   {
//     id: 2,
//     name: "Пепперони",
//     weight: "450 г",
//     desc: "Томатный соус, моцарелла, пепперони",
//     price: 480,
//     oldPrice: 600,
//     img: pizza2,
//   },
//   {
//     id: 3,
//     name: "Четыре сыра",
//     weight: "420 г",
//     desc: "Моцарелла, пармезан, дор блю, чеддер",
//     price: 525,
//     oldPrice: 750,
//     img: pizza3,
//   },
//   {
//     id: 4,
//     name: "Грибная",
//     weight: "410 г",
//     desc: "Сливочный соус, моцарелла, шампиньоны",
//     price: 450,
//     oldPrice: 600,
//     img: pizza4,
//   },
// ];

// function Aksii() {
//   const [sortOrder, setSortOrder] = useState("asc");

//   const sortedAksii = [...aktsiiData].sort((a, b) => {
//     return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
//   });

//   const toggleSort = () => {
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   return (
//     <div className="gorbluda">
//       <h1 className="gorbluda-title">Акции</h1>
// <div className="navi">
//               <Link to="/">Главная </Link>
//               <p className="niva">/ Акции</p>
//             </div>
//       <div className="gorbluda-sort" onClick={toggleSort}>
//         <span className="sort-label">СОРТИРОВАТЬ:</span>
//         <span className="sort-value">
//           {sortOrder === "asc" ? "ПО ВОЗРАСТАНИЮ ЦЕНЫ ▼" : "ПО УБЫВАНИЮ ЦЕНЫ ▲"}
//         </span>
//       </div>
//       <div className="gorbluda-grid">
//         {sortedAksii.map((item) => (
//           <div key={item.id} className="gorbluda-card">
//             <img src={item.img} alt={item.name} className="gorbluda-img" />
//             <h2 className="gorbluda-name">{item.name}</h2>
//             <p className="gorbluda-weight">{item.weight}</p>
//             <p className="gorbluda-desc">{item.desc}</p>
//             <div className="gorbluda-footer">
//               <div className="price-container">
//                 <span className="gorbluda-price-old">{item.oldPrice} ₽</span>
//                 <span className="gorbluda-price">{item.price} ₽</span>
//               </div>
//               <button className="gorbluda-btn">
//                 <LiaShoppingBasketSolid className="basket-icon" />
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Aksii;



import React, { useState, useContext } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { CartContext } from "../../contex/CartContex"; // ⚡ коштук

import pizza1 from "../../assets/pizza1.jpg";
import pizza2 from "../../assets/pizza2.jpg";
import pizza3 from "../../assets/pizza3.jpg";
import pizza4 from "../../assets/pizza4.jpg";

import "./aksii.css";

const aktsiiData = [
  { id: 1, name: "Маргарита", weight: "400 г", desc: "Томаты, моцарелла, базилик", price: 360, oldPrice: 450, img: pizza1 },
  { id: 2, name: "Пепперони", weight: "450 г", desc: "Томатный соус, моцарелла, пепперони", price: 480, oldPrice: 600, img: pizza2 },
  { id: 3, name: "Четыре сыра", weight: "420 г", desc: "Моцарелла, пармезан, дор блю, чеддер", price: 525, oldPrice: 750, img: pizza3 },
  { id: 4, name: "Грибная", weight: "410 г", desc: "Сливочный соус, моцарелла, шампиньоны", price: 450, oldPrice: 600, img: pizza4 },
];

function Aksii() {
  const [sortOrder, setSortOrder] = useState("asc");
  const { addToCart } = useContext(CartContext); // ✅ колдонобуз

  const sortedAksii = [...aktsiiData].sort((a, b) =>
    sortOrder === "asc" ? a.price - b.price : b.price - a.price
  );

  const toggleSort = () => setSortOrder(sortOrder === "asc" ? "desc" : "asc");

  return (
    <div className="gorbluda">
      <h1 className="gorbluda-title">Акции</h1>
      <div className="navi">
        <Link to="/">Главная </Link>
        <p className="niva">/ Акции</p>
      </div>

      <div className="gorbluda-sort" onClick={toggleSort}>
        <span className="sort-label">СОРТИРОВАТЬ:</span>
        <span className="sort-value">
          {sortOrder === "asc" ? "ПО ВОЗРАСТАНИЮ ЦЕНЫ ▼" : "ПО УБЫВАНИЮ ЦЕНЫ ▲"}
        </span>
      </div>

      <div className="gorbluda-grid">
        {sortedAksii.map((item) => (
          <div key={item.id} className="gorbluda-card">
            <img src={item.img} alt={item.name} className="gorbluda-img" />
            <h2 className="gorbluda-name">{item.name}</h2>
            <p className="gorbluda-weight">{item.weight}</p>
            <p className="gorbluda-desc">{item.desc}</p>

            <div className="gorbluda-footer">
              <div className="price-container">
                <span className="gorbluda-price-old">{item.oldPrice} ₽</span>
                <span className="gorbluda-price">{item.price} ₽</span>
              </div>

              <button
                className="gorbluda-btn"
                onClick={() => addToCart(item)} // ✅ корзинага кошуу
              >
                <LiaShoppingBasketSolid className="basket-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Aksii;
