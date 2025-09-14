import React, { useState } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";

import gorbluda1 from "../../assets/gorbluda1.png";
import gorbluda2 from "../../assets/gorbluda2.png";
import gorbluda3 from "../../assets/gotbluda3.png";
import gorbluda4 from "../../assets/gorbluda4.png";
import gorbluda5 from "../../assets/gorbluda5.png";
import gorbluda6 from "../../assets/gorbluda6.png";

import "./gorbluda.css";

const dishesData = [
  {
    id: 1,
    name: "Котлета с картофелем по-деревенски",
    weight: "350 г",
    desc: "По семейному рецепту: нежнейшее рубленое мясо с экологически чистым ферме...",
    price: 430,
    img: gorbluda1,
  },
  {
    id: 2,
    name: "Оджаури из телятины",
    weight: "430 г",
    desc: "Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи",
    price: 490,
    img: gorbluda2,
  },
  {
    id: 3,
    name: "Долма",
    weight: "350 г",
    desc: "Невероятно ароматная начинка из рубленого мяса и свежей зелени, завернутая...",
    price: 410,
    img: gorbluda3,
  },
  {
    id: 4,
    name: "Чихохбили",
    weight: "350 г",
    desc: "Невероятно ароматная начинка из рубленого мяса и свежей зелени, завернутая...",
    price: 490,
    img: gorbluda4,
  },
  {
    id: 5,
    name: "Лобио по-имеретински",
    weight: "430 г",
    desc: "Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи",
    price: 490,
    img: gorbluda5,
  },
  {
    id: 6,
    name: "Стейк из лосося с овощами",
    weight: "430 г",
    desc: "Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи",
    price: 1200,
    img: gorbluda6,
  },
];

function Gorbluda() {
  const [sortOrder, setSortOrder] = useState("asc"); // "asc" или "desc"

  // сортировка
  const sortedDishes = [...dishesData].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  // переключение
  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="gorbluda">
      <h1 className="gorbluda-title">Горячие блюда</h1>

      {/* 🔹 Блок сортировки */}
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

export default Gorbluda;
