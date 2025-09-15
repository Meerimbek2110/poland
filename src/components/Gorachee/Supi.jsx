import React, { useState } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

import sup1 from "../../assets/sup.jpg";
import sup2 from "../../assets/supi2.jpg";
import sup3 from "../../assets/sup3.jpg";
import sup4 from "../../assets/sup4.jpg";
import sup5 from "../../assets/sup5.jpg";
import sup6 from "../../assets/sup7.jpg";
import "./supi.css";

const dishesData = [
  {
    id: 1,
    name: "Сытный овощной суп",
    weight: "350 г",
    desc: " Для основы супа: 2 ст. л. оливкового масла  1 средняя луковица, измельченных  2 средние морков",
    price: 430,
    img: sup1,
  },
  {
    id: 2,
    name: "Суп",
    weight: "430 г",
    desc: "Невероятно ароматная мясо, картофель,200мл воды",
    price: 490,
    img: sup2,
  },
  {
    id: 3,
    name: "Cуп с говядиной",
    weight: "350 г",
    desc: "200мл воды, говядина ,ароматный укроп",
    price: 410,
    img:sup3,
  },
  {
    id: 4,
    name: "Картфельный суп",
    weight: "350 г",
    desc: "Невероятно ароматная начинка из рубленого мяса и свежей зелени, завернутая...",
    price: 490,
    img: sup4,
  },
  {
    id: 5,
    name: "Грибной суп",
    weight: "430 г",
    desc: "Неверотяная сочное мясо, 2шт яйца , морковка 2шт ",
    price: 490,
    img: sup5,
  },
  {
    id: 6,
    name: "Супы с клецками",
    weight: "430 г",
    desc: "Невероятно ароматная лепёшка с сыром сулугуни внутри и снаружи",
    price: 450,
    img: sup6,
  },
];

function Supi() {
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
      <h1 className="gorbluda-title">Супы</h1>
      <div className="navi">
              <Link to="/">Главная </Link>
              <p className="niva">/ Супы</p>
            </div>

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

export default Supi;
