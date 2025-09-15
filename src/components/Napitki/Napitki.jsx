import React, { useState } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


import drink1 from "../../assets/drink1.jpg";
import drink2 from "../../assets/dring2.jpg";
import drink3 from "../../assets/drink3.jpg";
import drink4 from "../../assets/drink4.jpg";
import drink5 from "../../assets/drink5.jpg";
import drink6 from "../../assets/drink6.jpg";

import "./napitki.css";

const drinksData = [
  { id: 1, name: "Лимонад классический", weight: "500 мл", desc: "Свежевыжатый лимон, вода, сахар", price: 180, img: drink1 },
  { id: 2, name: "Морс ягодный", weight: "500 мл", desc: "Смесь лесных ягод, вода, сахар", price: 160, img: drink2 },
  { id: 3, name: "Фреш апельсиновый", weight: "300 мл", desc: "Натуральный сок из свежих апельсинов", price: 250, img: drink3 },
  { id: 4, name: "Кофе Американо", weight: "200 мл", desc: "Ароматный кофе с добавлением горячей воды", price: 120, img: drink4 },
  { id: 5, name: "Чай зеленый", weight: "400 мл", desc: "Листовой зелёный чай", price: 100, img: drink5 },
  { id: 6, name: "Минеральная вода", weight: "500 мл", desc: "Вода без газа", price: 80, img: drink6 },
];

function Napitki() {
  const [sortOrder, setSortOrder] = useState("asc");
  const query = useSelector((state) => state.search.query).toLowerCase();

  

  return (
    <div className="gorbluda">
      <h1 className="gorbluda-title">Напитки</h1>
      <div className="navi">
        <Link to="/">Главная </Link>
        <p className="niva">/ Напитки</p>
      </div>

      {/* сортировка */}
      <div className="gorbluda-sort" onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}>
        <span className="sort-label">СОРТИРОВАТЬ:</span>
        <span className="sort-value">
          {sortOrder === "asc" ? "ПО ВОЗРАСТАНИЮ ЦЕНЫ ▼" : "ПО УБЫВАНИЮ ЦЕНЫ ▲"}
        </span>
      </div>

      {/* карточки */}
      <div className="gorbluda-grid">
        {sortedDrinks.length > 0 ? (
          sortedDrinks.map((item) => (
            <div key={item.id} className="gorbluda-card">
              <img src={item.img} alt={item.name} className="gorbluda-img" />
              <h2 className="gorbluda-name">{item.name}</h2>
              <p className="gorbluda-weight">{item.weight}</p>
              <p className="gorbluda-desc">{item.desc}</p>
              <div className="gorbluda-footer">
                <span className="gorbluda-price">{item.price} ₽</span>
                <button className="gorbluda-btn">
                  <LiaShoppingBasketSolid className="basket-icon" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="not-found">Ничего не найдено</p>
        )}
      </div>
    </div>
  );
}

export default Napitki;
