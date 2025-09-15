import { useState } from "react";
import "./contact.css";
import tiramisu from "../../assets/hame.png";
import { Link, useNavigate } from "react-router-dom";

export default function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const navigate = useNavigate(); // хук для перехода

  const validateEmail = (value) => {
    if (value.endsWith("@gmail.com")) {
      setError("");
      setIsValid(true);
    } else {
      setError("Неверный Gmail");
      setIsValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid && message.trim() !== "") {
      // сохраняем отзыв
      const newReview = { email, message };
      const saved = JSON.parse(localStorage.getItem("reviews")) || [];
      localStorage.setItem("reviews", JSON.stringify([...saved, newReview]));

      // очистка формы
      setMessage("");
      setEmail("");
      setSubmitted(true);

      // ⏳ переход через 1 секунду
      setTimeout(() => {
        navigate("/otzuv");
      }, 1000);
    }
  };

  return (
    <div className="cw">
      {/* Заголовок и хлебные крошки */}
      <h1 className="ct">Обратная связь</h1>
      <div className="navi">
        <Link to="/">Главная </Link>
        <p className="niva">/ Обратная связь</p>
      </div>

      {/* Контент */}
      <div className="cc">
        {/* Левая часть */}
        <form className="cf" onSubmit={handleSubmit}>
          <label>Ваш вопрос, отзыв или пожелание:</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <label>EMAIL для получения ответа:</label>
          <input
            type="text"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validateEmail(e.target.value);
            }}
            className={isValid ? "ok" : ""}
          />
          {error && <p className="err">{error}</p>}

          <button
            type="submit"
            className={submitted ? "sent" : ""}
            disabled={submitted}
          >
            {submitted ? "Отправлено" : "Отправить"}
          </button>
        </form>

        {/* Правая часть с картинками */}
        <div className="ci">
          <img src={tiramisu} alt="dessert1" className="i1" />
          <img src={tiramisu} alt="dessert2" className="i2" />
        </div>
      </div>
    </div>
  );
}
