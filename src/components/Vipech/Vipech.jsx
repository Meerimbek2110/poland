import React, { useState } from "react";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import { Link } from "react-router-dom";

// Короткие имена файлов, как вы и просили
import vipech1 from "../../assets/vipech1.jpg";
import vipech2 from "../../assets/vipech2.jpg";
import vipech3 from "../../assets/vipech3.jpg";
import vipech4 from "../../assets/vipech4.jpg";
import vipech5 from "../../assets/vipech5.jpg";
import vipech6 from "../../assets/vipech6.jpg";

// Используем тот же CSS-файл для стилей
import "./Vipech.css";

const vipechkaData = [
  {
    id: 1,
    name: "Круассан классический",
    weight: "80 г",
    desc: "Слоёное тесто, масло сливочное",
    price: 150,
    img: vipech1,
  },
  {
    id: 2,
    name: "Круассан с шоколадом",
    weight: "100 г",
    desc: "Слоёное тесто, тёмный шоколад",
    price: 180,
    img: vipech2,
  },
  {
    id: 3,
    name: "Улитка с корицей",
    weight: "120 г",
    desc: "Сдобное тесто, корица, сахар, глазурь",
    price: 170,
    img: vipech3,
  },
  {
    id: 4,
    name: "Ватрушка с творогом",
    weight: "110 г",
    desc: "Дрожжевое тесто, творожная начинка",
    price: 140,
    img: vipech4,
  },
  {
    id: 5,
    name: "Булочка с маком",
    weight: "90 г",
    desc: "Сдобная булочка, много мака",
    price: 130,
    img: vipech5,
  },
  {
    id: 6,
    name: "Слойка с вишней",
    weight: "130 г",
    desc: "Слоёное тесто, вишнёвая начинка",
    price: 160,
    img: vipech6,
  },
];

function Vipech() {
  const [sortOrder, setSortOrder] = useState("asc");

  const sortedVipechka = [...vipechkaData].sort((a, b) => {
    return sortOrder === "asc" ? a.price - b.price : b.price - a.price;
  });

  const toggleSort = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div className="gorbluda">
      <h1 className="gorbluda-title">Свежая выпечка</h1>
      <div className="navi">
                    <Link to="/">Главная </Link>
                    <p className="niva">/ Свежая выпечка</p>
                  </div>

      {/* Блок сортировки */}
      <div className="gorbluda-sort" onClick={toggleSort}>
        <span className="sort-label">СОРТИРОВАТЬ:</span>
        <span className="sort-value">
          {sortOrder === "asc" ? "ПО ВОЗРАСТАНИЮ ЦЕНЫ ▼" : "ПО УБЫВАНИЮ ЦЕНЫ ▲"}
        </span>
      </div>

      <div className="gorbluda-grid">
        {sortedVipechka.map((item) => (
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
        ))}
      </div>
    </div>
  );
}

export default Vipech;