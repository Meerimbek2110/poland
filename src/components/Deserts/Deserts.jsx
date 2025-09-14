import React, { useState } from "react";
// import { LiaShoppingBasketSolid } from "react-icons/Lia";

// Короткие имена файлов
import des1 from "../../assets/des1.jpg";
import des2 from "../../assets/des2.jpg";
import des3 from "../../assets/des3.jpg";
import des4 from "../../assets/des4.jpg";
import des5 from "../../assets/des5.jpg";
import des6 from "../../assets/des6.jpg";

// Используем тот же CSS-файл для стилей
import "./deserts.css";

const desertsData = [
  {
    id: 1,
    name: "Чизкейк Нью-Йорк",
    weight: "180 г",
    desc: "Классический сливочный чизкейк на песочной основе",
    price: 350,
    img: des1,
  },
  {
    id: 2,
    name: "Медовик",
    weight: "200 г",
    desc: "Тонкие медовые коржи с нежным сметанным кремом",
    price: 320,
    img: des2,
  },
  {
    id: 3,
    name: "Тирамису",
    weight: "150 г",
    desc: "Итальянский десерт с кофе, сыром маскарпоне и печеньем",
    price: 410,
    img: des3,
  },
  {
    id: 4,
    name: "Брауни с мороженым",
    weight: "250 г",
    desc: "Шоколадный пирог с грецкими орехами и ванильным мороженым",
    price: 480,
    img: des4,
  },
  {
    id: 5,
    name: "Фондан",
    weight: "120 г",
    desc: "Горячий шоколадный кекс с жидким центром",
    price: 390,
    img: des5,
  },
  {
    id: 6,
    name: "Наполеон",
    weight: "220 г",
    desc: "Слоёные коржи с нежным заварным кремом",
    price: 360,
    img: des6,
  },
];

function Deserts() {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedDeserts = [...desertsData].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="gorbluda">
      <h1 className="gorbluda-title">Десерты</h1>

      {/* Блок сортировки */}
      <div className="gorbluda-sort" onClick={toggleSort}>
        <span className="sort-label">СОРТИРОВАТЬ:</span>
        <span className="sort-value">
          {sortOrder === "asc" ? "ПО ВОЗРАСТАНИЮ ЦЕНЫ ▼" : "ПО УБЫВАНИЮ ЦЕНЫ ▲"}
        </span>
      </div>

      <div className="gorbluda-grid">
        {sortedDeserts.map((item) => (
          <div key={item.id} className="gorbluda-card">
            <img src={item.img} alt={item.name} className="gorbluda-img" />
            <h2 className="gorbluda-name">{item.name}</h2>
            <p className="gorbluda-weight">{item.weight}</p>
            <p className="gorbluda-desc">{item.desc}</p>
            <div className="gorbluda-footer">
              <span className="gorbluda-price">{item.price} ₽</span>
              <button className="gorbluda-btn">
                {/* <LiaShoppingBasketSolid className="basket-icon" /> */}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Deserts;