import { useRef, useState, useEffect } from "react";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";
import './slider.css'

// Ваши импорты
import aksia1 from '../../assets/aksia1.png'
import aksia2 from '../../assets/aksia2.png'
import aksia3 from '../../assets/aksia3.png'
import aksia4 from '../../assets/aksia4.png'
import aksia5 from '../../assets/aksia5.png'
import aksia6 from '../../assets/aksia6.png'
import aksia7 from '../../assets/aksia7.png'
import aksia8 from '../../assets/aksia8.png'
import aksia9 from '../../assets/aksia9.png'
import aksia10 from '../../assets/aksia10.png'
import aksia11 from '../../assets/aksia11.jpg'
import aksia12 from '../../assets/aksia12.jpg'
import aksia13 from '../../assets/aksia13.jpg'
import aksia14 from '../../assets/aksia14.jpg'

const Categories = [
  {
    id: 1,
    title: "Акции 🔥",
    color: "red"
  },
  {
    id: 2,
    title: "Горячие блюда",
    img1: aksia1,
    img2: aksia2,
  },
  {
    id: 3,
    title: "Супы",
    img1: aksia3,
    img2: aksia4,
  },
  {
    id: 4,
    title: "Хинкали",
    img1: aksia5,
    img2: aksia6,
  },
  {
    id: 5,
    title: "Холодные закуски",
    img1: aksia7,
    img2: aksia8,
  },
  {
    id: 6,
    title: "Салаты",
    img1: aksia9,
    img2: aksia10,
  },
  
  

];
// Для демонстрации я сократил массив, чтобы не повторять код.

const Slider = () => {
  const sliderRef = useRef(null);
  const [disableLeft, setDisableLeft] = useState(true);
  const [disableRight, setDisableRight] = useState(false);
  const [activeCard, setActiveCard] = useState(5); // Установим активную карточку (например, "Холодные закуски")

  const scroll = (direction) => {
    const container = sliderRef.current;
    const scrollAmount = 320; 
    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const checkButtons = () => {
    const container = sliderRef.current;
    if (!container) return;
    setDisableLeft(container.scrollLeft === 0);
    setDisableRight(
      container.scrollWidth - container.scrollLeft <= container.clientWidth + 1
    );
  };

  useEffect(() => {
    const container = sliderRef.current;
    container.addEventListener("scroll", checkButtons);
    checkButtons();
    return () => container.removeEventListener("scroll", checkButtons);
  }, []);

  return (
    <div className="menu-container">
      <h1 className="menu-title">Меню</h1>

      <div className="arrows">
        <button
          className={`arrow-btn ${disableLeft ? "disabled" : ""}`}
          onClick={() => scroll("left")}
          disabled={disableLeft}
        >
          <GoArrowLeft />
        </button>
        <button
          className={`arrow-btn ${disableRight ? "disabled" : ""}`}
          onClick={() => scroll("right")}
          disabled={disableRight}
        >
          <GoArrowRight />
        </button>
      </div>

      <div className="slider" ref={sliderRef}>
        {Categories.map((cat) => (
          <div
            key={cat.id}
            className={`card ${cat.color === "red" ? "red-card" : ""} ${cat.id === activeCard ? "active-card" : ""}`}
          >
            {cat.img1 ? (
              <>
                <div className="half-img top-half">
                  <img src={cat.img1} alt={cat.title} />
                </div>
                <p className="title">{cat.title}</p>
                <div className="half-img bottom-half">
                  <img src={cat.img2} alt={cat.title} />
                </div>
              </>
            ) : (
              <div className="promo">
                <p>30%</p>
                <span>{cat.title}</span>
                <p>20%</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;