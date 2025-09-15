// import React, { useState } from "react";
// import fire from "../../assets/fire.png";
// import Logo from "../../assets/Logo (1).svg";
// import { IoIosSearch } from "react-icons/io";
// import { GoPerson } from "react-icons/go";
// import { LiaShoppingBasketSolid } from "react-icons/lia";
// import "./header.css";
// import { Link } from "react-router-dom";

// function Header() {
//   const [isHotMenuOpen, setIsHotMenuOpen] = useState(false);
//   const [isColdMenuOpen, setIsColdMenuOpen] = useState(false);

//   // 🔍 поиск
//   const [openSearch, setOpenSearch] = useState(false);
//   const [query, setQuery] = useState("");

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (query.trim()) {
//       console.log("Поиск:", query); // тут можешь прикрутить navigate(`/search?query=${query}`)
//     }
//   };

//   return (
//     <div className="header">
//       <div className="header-zam">
//         <div className="header-menu">
//           <img src={Logo} alt="Midas Logo" />

//           {/* Меню */}
//           <div className="header-comp">
//             <ul>
//               <li>
//                 <Link to="/aksii">Акции</Link>
//                 <img src={fire} alt="Fire Icon" />
//               </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => setIsHotMenuOpen(true)}
//                 onMouseLeave={() => setIsHotMenuOpen(false)}
//               >
//                 <Link to="">Горячее</Link>
//                 {isHotMenuOpen && (
//                   <ul className="dropdown-menu">
//                     <li><Link to="Gorbluda">Горячие блюда</Link></li>
//                     <li><Link to="Supi">Супы</Link></li>
//                     <li><Link to="Hinkali">Хинкали</Link></li>
//                   </ul>
//                 )}
//               </li>
//               <li
//                 className="dropdown"
//                 onMouseEnter={() => setIsColdMenuOpen(true)}
//                 onMouseLeave={() => setIsColdMenuOpen(false)}
//               >
//                 <Link to="">Холодные</Link>
//                 {isColdMenuOpen && (
//                   <ul className="dropdown-menu">
//                     <li><Link to="Salati">Салаты</Link></li>
//                     <li><Link to="Buter">Бутерброды</Link></li>
//                     <li><Link to="Zakuski">Закуски</Link></li>
//                   </ul>
//                 )}
//               </li>
//               <li><Link to="Vipech">Свежая выпечка</Link></li>
//               <li><Link to="Deserts">Десерты</Link></li>
//               <li><Link to="Napitki">Напитки</Link></li>
//             </ul>
//           </div>

//           {/* Правая часть */}
//           <div className="header-right">
//             <form
//               onSubmit={handleSearch}
//               className={`search-form ${openSearch ? "open" : ""}`}
//             >
//               <input
//                 type="text"
//                 placeholder="Поиск..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 className="search-input"
//               />
//             </form>

//             <div className="icons">
//               <div className="icon" onClick={() => setOpenSearch((p) => !p)}>
//                 <IoIosSearch className="icon-react" />
//               </div>
//               <Link to="">
//                 <div className="icon">
//                   <GoPerson className="icon-react" />
//                 </div>
//               </Link>
//               <Link to="CardPage">
//                 <div className="icon">
//                   <LiaShoppingBasketSolid className="icon-react" />
//                 </div>
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;
import React, { useState } from "react";
import fire from "../../assets/fire.png";
import Logo from "../../assets/Logo (1).svg";
import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { LiaShoppingBasketSolid } from "react-icons/lia";
import "./header.css";
import { Link } from "react-router-dom";
import { useCart } from "../../contex/CartContex"; // ⚡ CartContext колдонулат

function Header() {
  const [isHotMenuOpen, setIsHotMenuOpen] = useState(false);
  const [isColdMenuOpen, setIsColdMenuOpen] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState("");

  const { cartItems } = useCart(); // ✅ Корзинадагы товарлар

  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      console.log("Поиск:", query);
      // Мисалы navigate(`/search?query=${query}`) кошсоң болот
    }
  };

  return (
    <div className="header">
      <div className="header-zam">
        <div className="header-menu">
          <img src={Logo} alt="Midas Logo" />

          {/* Меню */}
          <div className="header-comp">
            <ul>
              <li>
                <Link to="/aksii">Акции</Link>
                <img src={fire} alt="Fire Icon" />
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => setIsHotMenuOpen(true)}
                onMouseLeave={() => setIsHotMenuOpen(false)}
              >
                <Link to="">Горячее</Link>
                {isHotMenuOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="Gorbluda">Горячие блюда</Link></li>
                    <li><Link to="Supi">Супы</Link></li>
                    <li><Link to="Hinkali">Хинкали</Link></li>
                  </ul>
                )}
              </li>
              <li
                className="dropdown"
                onMouseEnter={() => setIsColdMenuOpen(true)}
                onMouseLeave={() => setIsColdMenuOpen(false)}
              >
                <Link to="">Холодные</Link>
                {isColdMenuOpen && (
                  <ul className="dropdown-menu">
                    <li><Link to="Salati">Салаты</Link></li>
                    <li><Link to="Buter">Бутерброды</Link></li>
                    <li><Link to="Zakuski">Закуски</Link></li>
                  </ul>
                )}
              </li>
              <li><Link to="Vipech">Свежая выпечка</Link></li>
              <li><Link to="Deserts">Десерты</Link></li>
              <li><Link to="Napitki">Напитки</Link></li>
            </ul>
          </div>

          {/* Правая часть */}
          <div className="header-right">
            <form
              onSubmit={handleSearch}
              className={`search-form ${openSearch ? "open" : ""}`}
            >
              <input
                type="text"
                placeholder="Поиск..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="search-input"
              />
            </form>

            <div className="icons">
              <div className="icon" onClick={() => setOpenSearch((p) => !p)}>
                <IoIosSearch className="icon-react" />
              </div>
              <Link to="">
                <div className="icon">
                  <GoPerson className="icon-react" />
                </div>
              </Link>
              <Link to="CardPage">
                <div className="icon cart-icon">
                  <LiaShoppingBasketSolid className="icon-react" />
                  {cartItems.length > 0 && (
                    <span className="cart-count">{cartItems.length}</span>
                  )}
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
