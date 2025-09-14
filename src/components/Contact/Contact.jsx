import { useState } from "react";
import "./contact.css";
import tiramisu from '../../assets/hame.png'

export default function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    if (isValid) {
      setSubmitted(true);
    }
  };

  return (
    <div className="contact-container">
      {/* Левая часть */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Ваш вопрос, отзыв или пожелание:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          
        />

        <label>Email для получения ответа:</label>
        <input
          type="text"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            validateEmail(e.target.value);
          }}
          className={isValid ? "valid" : ""}
          
        />
        {error && <p className="error">{error}</p>}

        <button
          type="submit"
          className={submitted ? "sent" : ""}
          disabled={submitted}
        >
          {submitted ? "Отправлено" : "Отправить"}
        </button>
      </form>

      {/* Правая часть с картинками */}
      <div className="contact-images">
        <img src={tiramisu} alt="dessert1" className="img1" />
        <img src={tiramisu} alt="dessert2" className="img2" />
      </div>
    </div>
  );
}
