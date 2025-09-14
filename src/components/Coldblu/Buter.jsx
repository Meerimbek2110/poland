import React, { useState } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";

// Замените эти пути на реальные пути к вашим изображениям
import buterbrod1 from "../../assets/Buterbrody1.jpg"; 
import buterbrod2 from "../../assets/Buterbrod2.jpg";
import buterbrod3 from "../../assets/Buterbrod3.jpg";
import buterbrod4 from "../../assets/Buterbrod5.jpg";
import buterbrod5 from "../../assets/Buterbrod4.jpg";
import buterbrod6 from "../../assets/Buterbrod6.jpg";

// Используем тот же CSS-файл для стилей
import "./buter.css"; 

const buterbrodyData = [
  {
    id: 1,
    name: "Клаб-сэндвич",
    weight: "320 г",
    desc: "Тостовый хлеб, курица, бекон, помидор, салат, майонез",
    price: 350,
    img: buterbrod1,
  },
  {
    id: 2,
    name: "Сэндвич с ростбифом",
    weight: "280 г",
    desc: "Ржаной хлеб, нежный ростбиф, руккола, соус, огурец",
    price: 410,
    img: buterbrod2,
  },
  {
    id: 3,
    name: "Бутерброд с тунцом",
    weight: "250 г",
    desc: "Цельнозерновой хлеб, тунец, яйцо, майонез, свежий салат",
    price: 290,
    img: buterbrod3,
  },
  {
    id: 4,
    name: "Бутерброд с лососем и авокадо",
    weight: "220 г",
    desc: "Хлеб, слабосоленый лосось, авокадо, творожный сыр, кунжут",
    price: 520,
    img: buterbrod4,
  },
  {
    id: 5,
    name: "Вегетарианский сэндвич",
    weight: "270 г",
    desc: "Безглютеновый хлеб, хумус, гриль-овощи, сыр, зелень",
    price: 340,
    img: buterbrod5,
  },
  {
    id: 6,
    name: "Сэндвич с индейкой",
    weight: "300 г",
    desc: "Чиабатта, отварная индейка, сыр, помидор, соус песто",
    price: 380,
    img: buterbrod6,
  },
];

function Buter() {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedButerbrody = [...buterbrodyData].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="gorbluda">
      <h1 className="gorbluda-title">Бутерброды</h1>

      {/* Блок сортировки */}
      <div className="gorbluda-sort" onClick={toggleSort}>
        <span className="sort-label">СОРТИРОВАТЬ:</span>
        <span className="sort-value">
          {sortOrder === "asc" ? "ПО ВОЗРАСТАНИЮ ЦЕНЫ ▼" : "ПО УБЫВАНИЮ ЦЕНЫ ▲"}
        </span>
      </div>

      <div className="gorbluda-grid">
        {sortedButerbrody.map((buterbrod) => (
          <div key={buterbrod.id} className="gorbluda-card">
            <img src={buterbrod.img} alt={buterbrod.name} className="gorbluda-img" />
            <h2 className="gorbluda-name">{buterbrod.name}</h2>
            <p className="gorbluda-weight">{buterbrod.weight}</p>
            <p className="gorbluda-desc">{buterbrod.desc}</p>
            <div className="gorbluda-footer">
              <span className="gorbluda-price">{buterbrod.price} ₽</span>
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

export default Buter;