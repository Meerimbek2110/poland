import React, { useState } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";

// Замените эти пути на реальные пути к вашим изображениям
import snack1 from "../../assets/snack1.jpg";
import snack2 from "../../assets/snack2.jpg";
import snack3 from "../../assets/snack3.jpg";
import snack4 from "../../assets/snack4.jpg";
import snack5 from "../../assets/snack5.jpg";
import snack6 from "../../assets/snack6.jpg";

// Используем тот же CSS-файл для стилей
import "./zakuski.css";

const zakuskiData = [
  {
    id: 1,
    name: "Сырная тарелка",
    weight: "200 г",
    desc: "Пармезан, бри, дор блю, виноград, орехи, мёд",
    price: 850,
    img: snack1,
  },
  {
    id: 2,
    name: "Ассорти брускетт",
    weight: "250 г",
    desc: "Томаты, прошутто, песто, лосось, сливочный сыр",
    price: 620,
    img: snack2,
  },
  {
    id: 3,
    name: "Карпаччо из говядины",
    weight: "150 г",
    desc: "Тонкие ломтики говядины, руккола, пармезан, соус",
    price: 780,
    img: snack3,
  },
  {
    id: 4,
    name: "Хумус с овощами и питой",
    weight: "300 г",
    desc: "Домашний хумус, свежие овощи, тёплая пита, оливковое масло",
    price: 490,
    img: snack4,
  },
  {
    id: 5,
    name: "Куриные крылышки барбекю",
    weight: "350 г",
    desc: "Крылышки в соусе барбекю, подаются с соусом ранч",
    price: 540,
    img: snack5,
  },
  {
    id: 6,
    name: "Начос с гуакамоле",
    weight: "280 г",
    desc: "Кукурузные чипсы, соус гуакамоле, сальса, сметана",
    price: 470,
    img: snack6,
  },
];

function Zakuski() {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedZakuski = [...zakuskiData].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="gorbluda">
      <h1 className="gorbluda-title">Закуски</h1>

      {/* Блок сортировки */}
      <div className="gorbluda-sort" onClick={toggleSort}>
        <span className="sort-label">СОРТИРОВАТЬ:</span>
        <span className="sort-value">
          {sortOrder === "asc" ? "ПО ВОЗРАСТАНИЮ ЦЕНЫ ▼" : "ПО УБЫВАНИЮ ЦЕНЫ ▲"}
        </span>
      </div>

      <div className="gorbluda-grid">
        {sortedZakuski.map((snack) => (
          <div key={snack.id} className="gorbluda-card">
            <img src={snack.img} alt={snack.name} className="gorbluda-img" />
            <h2 className="gorbluda-name">{snack.name}</h2>
            <p className="gorbluda-weight">{snack.weight}</p>
            <p className="gorbluda-desc">{snack.desc}</p>
            <div className="gorbluda-footer">
              <span className="gorbluda-price">{snack.price} ₽</span>
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

export default Zakuski;