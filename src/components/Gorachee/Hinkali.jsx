import React, { useState } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";


import hink1 from "../../assets/hinkalo.png";
import hink2 from "../../assets/hinkali1.png";
import hink3 from "../../assets/hinkali3.png";
import hink4 from "../../assets/hink4.jpg";
import hink5 from "../../assets/hinkali5.jpg";
import hink6 from "../../assets/hinkali6.jpg";

import "./hinkali.css";

const dishesData = [
  {
    id: 1,
    name: "Классические хинкали",
    weight: "350 г",
    desc: "Мука, вода, паприка, специи, говядина, свинина",
    price: 350,
    img: hink1,
  },
  {
    id: 2,
    name: "Жаренные хинкали",
    weight: "430 г",
    desc: "Вода, паприка, специи, говядина, свинина, мука, соль",
    price: 600,
    img: hink2,
  },
  {
    id: 3,
    name: "Хинкали с говядиной",
    weight: "350 г",
    desc: "Тесто, отборная говядина, лук, зелень, специи",
    price: 420,
    img: hink3,
  },
  {
    id: 4,
    name: "Хинкали с грибами",
    weight: "350 г",
    desc: "Тесто, шампиньоны, лук, растительное масло, специи",
    price: 470,
    img: hink4,
  },
  {
    id: 5,
    name: "Хинкали с сыром",
    weight: "430 г",
    desc: "Тесто, сыр сулугуни, творог, зелень",
    price: 450,
    img: hink5,
  },
  {
    id: 6,
    name: "Хинкали с бараниной",
    weight: "430 г",
    desc: "Тесто, нежная баранина, чеснок, лук, кориандр",
    price: 490,
    img: hink6,
  },
];

function Hinkali() {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedDishes = [...dishesData].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="gorbluda">
      <h1 className="gorbluda-title">Хинкали</h1>

      <div className="gorbluda-sort" onClick={toggleSort}>
        <span className="sort-label">СОРТИРОВАТЬ:</span>
        <span className="sort-value">
          {sortOrder === "asc" ? "ПО ВОЗРАСТАНИЮ ЦЕНЫ ▼" : "ПО УБЫВАНИЮ ЦЕНЫ ▲"}
        </span>
      </div>

      <div className="gorbluda-grid">
        {sortedDishes.map((dish) => (
          <div key={dish.id} className="gorbluda-card">
            <img src={dish.img} alt={dish.name} className="gorbluda-img" />
            <h2 className="gorbluda-name">{dish.name}</h2>
            <p className="gorbluda-weight">{dish.weight}</p>
            <p className="gorbluda-desc">{dish.desc}</p>
            <div className="gorbluda-footer">
              <span className="gorbluda-price">{dish.price} ₽</span>
              <button className="gorbluda-btn">
                <LiaShoppingBasketSolid className="basket-icon" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Hinkali;