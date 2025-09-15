// import React, { useState } from "react";
// import { LiaShoppingBasketSolid } from "react-icons/lia";
// import { Link } from "react-router-dom";

// // Импортируйте изображения для салатов
// import salad1 from "../../assets/salad1.jpg";
// import salad2 from "../../assets/salad2.jpg";
// import salad3 from "../../assets/salad3.jpg";
// import salad4 from "../../assets/salad4.jpg";
// import salad5 from "../../assets/salad5.jpg";
// import salad6 from "../../assets/salad6.jpg";

// // Используем тот же CSS-файл для стилей
// import "./salati.css"; 

// const saladsData = [
//   {
//     id: 1,
//     name: "Салат с креветками и авокадо",
//     weight: "250 г",
//     desc: "Листья салата, креветки, авокадо, черри, огурцы, соус",
//     price: 680,
//     img: salad1,
//   },
//   {
//     id: 2,
//     name: "Салат Цезарь с курицей",
//     weight: "300 г",
//     desc: "Ромен, куриное филе, пармезан, сухарики, соус Цезарь",
//     price: 450,
//     img: salad2,
//   },
//   {
//     id: 3,
//     name: "Салат Греческий",
//     weight: "280 г",
//     desc: "Помидоры, огурцы, перец, фета, оливки, красный лук, орегано",
//     price: 390,
//     img: salad3,
//   },
//   {
//     id: 4,
//     name: "Салат Капрезе",
//     weight: "200 г",
//     desc: "Свежие томаты, моцарелла, базилик, оливковое масло, бальзамик",
//     price: 420,
//     img: salad4,
//   },
//   {
//     id: 5,
//     name: "Салат с тунцом и яйцом",
//     weight: "320 г",
//     desc: "Салат, тунец консервированный, яйцо, черри, картофель, фасоль",
//     price: 510,
//     img: salad5,
//   },
//   {
//     id: 6,
//     name: "Тёплый салат с говядиной",
//     weight: "350 г",
//     desc: "Говяжья вырезка, микс-салат, грибы, перец, черри, горчичный соус",
//     price: 750,
//     img: salad6,
//   },
// ];

// function Salaty() {
//   const [sortOrder, setSortOrder] = useState("asc");

//   const sortedSalads = [...saladsData].sort((a, b) => {
//     return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
//   });

//   const toggleSort = () => {
//     setSortOrder(sortOrder === "asc" ? "desc" : "asc");
//   };

//   return (
//     <div className="gorbluda">
//       <h1 className="gorbluda-title">Салаты</h1>
//       <div className="navi">
//               <Link to="/">Главная </Link>
//               <p className="niva">/ Салаты</p>
//             </div>

//       {/* Блок сортировки */}
//       <div className="gorbluda-sort" onClick={toggleSort}>
//         <span className="sort-label">СОРТИРОВАТЬ:</span>
//         <span className="sort-value">
//           {sortOrder === "asc" ? "ПО ВОЗРАСТАНИЮ ЦЕНЫ ▼" : "ПО УБЫВАНИЮ ЦЕНЫ ▲"}
//         </span>
//       </div>

//       <div className="gorbluda-grid">
//         {sortedSalads.map((salad) => (
//           <div key={salad.id} className="gorbluda-card">
//             <img src={salad.img} alt={salad.name} className="gorbluda-img" />
//             <h2 className="gorbluda-name">{salad.name}</h2>
//             <p className="gorbluda-weight">{salad.weight}</p>
//             <p className="gorbluda-desc">{salad.desc}</p>
//             <div className="gorbluda-footer">
//               <span className="gorbluda-price">{salad.price} ₽</span>
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

// export default Salaty;


import React, { useState, useContext } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { CartContext } from "../../contex/CartContex"; // ✅ импортируем контекст

import salad1 from "../../assets/salad1.jpg";
import salad2 from "../../assets/salad2.jpg";
import salad3 from "../../assets/salad3.jpg";
import salad4 from "../../assets/salad4.jpg";
import salad5 from "../../assets/salad5.jpg";
import salad6 from "../../assets/salad6.jpg";

import "./salati.css"; 

const saladsData = [
  { id: 1, name: "Салат с креветками и авокадо", weight: "250 г", desc: "Листья салата, креветки, авокадо, черри, огурцы, соус", price: 680, img: salad1 },
  { id: 2, name: "Салат Цезарь с курицей", weight: "300 г", desc: "Ромен, куриное филе, пармезан, сухарики, соус Цезарь", price: 450, img: salad2 },
  { id: 3, name: "Салат Греческий", weight: "280 г", desc: "Помидоры, огурцы, перец, фета, оливки, красный лук, орегано", price: 390, img: salad3 },
  { id: 4, name: "Салат Капрезе", weight: "200 г", desc: "Свежие томаты, моцарелла, базилик, оливковое масло, бальзамик", price: 420, img: salad4 },
  { id: 5, name: "Салат с тунцом и яйцом", weight: "320 г", desc: "Салат, тунец консервированный, яйцо, черри, картофель, фасоль", price: 510, img: salad5 },
  { id: 6, name: "Тёплый салат с говядиной", weight: "350 г", desc: "Говяжья вырезка, микс-салат, грибы, перец, черри, горчичный соус", price: 750, img: salad6 },
];

function Salaty() {
  const [sortOrder, setSortOrder] = useState("asc");
  const { addToCart } = useContext(CartContext); // ✅ используем корзину

  const sortedSalads = [...saladsData].sort((a, b) => sortOrder === "asc" ? a.price - b.price : b.price - a.price);
  const toggleSort = () => setSortOrder(sortOrder === "asc" ? "desc" : "asc");

  return (
    <div className="gorbluda">
      <h1 className="gorbluda-title">Салаты</h1>
      <div className="navi">
        <Link to="/">Главная </Link>
        <p className="niva">/ Салаты</p>
      </div>

      <div className="gorbluda-sort" onClick={toggleSort}>
        <span className="sort-label">СОРТИРОВАТЬ:</span>
        <span className="sort-value">
          {sortOrder === "asc" ? "ПО ВОЗРАСТАНИЮ ЦЕНЫ ▼" : "ПО УБЫВАНИЮ ЦЕНЫ ▲"}
        </span>
      </div>

      <div className="gorbluda-grid">
        {sortedSalads.map((salad) => (
          <div key={salad.id} className="gorbluda-card">
            <img src={salad.img} alt={salad.name} className="gorbluda-img" />
            <h2 className="gorbluda-name">{salad.name}</h2>
            <p className="gorbluda-weight">{salad.weight}</p>
            <p className="gorbluda-desc">{salad.desc}</p>
            <div className="gorbluda-footer">
              <span className="gorbluda-price">{salad.price} ₽</span>
              <button className="gorbluda-btn" onClick={() => addToCart({ ...salad, quantity: 1 })}>
                <LiaShoppingBasketSolid className="basket-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Salaty;
