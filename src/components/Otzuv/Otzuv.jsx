import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./otzuv.css";

export default function Otzuv() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("reviews")) || [];
    setReviews(saved);
  }, []);

  const toggleReview = (index) => {
    setReviews((prev) =>
      prev.map((rev, i) =>
        i === index ? { ...rev, open: !rev.open } : rev
      )
    );
  };

  return (
    <div className="ow">
      <h1 className="ot">Отзывы и пожелания</h1>
      <div className="navi">
        <Link to="/">Главная </Link>
        <p className="niva">/ Отзывы</p>
      </div>

      <div className="olist">
        {reviews.length === 0 ? (
          <p className="empty">Список пуст</p>
        ) : (
          reviews.map((rev, i) => (
            <div key={i} className="orev">
              <div className="otop">
                <span className="email">{rev.email}</span>
                <button
                  className="toggle"
                  onClick={() => toggleReview(i)}
                >
                  {rev.open ? "−" : "+"}
                </button>
              </div>
              <div className={`msgWrap ${rev.open ? "open" : ""}`}>
                <p className="msg">{rev.message}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
