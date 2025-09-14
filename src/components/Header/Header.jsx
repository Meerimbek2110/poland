import React, { useState } from 'react'
import fire from '../../assets/fire.png'
import Logo from '../../assets/Logo (1).svg'
// import { IoIosSearch } from "react-icons/io";
import { GoPerson } from "react-icons/go";
// import { LiaShoppingBasketSolid } from "react-icons/Lia";
import './header.css'
import { Link } from "react-router-dom";


function Header() {
    const [isHotMenuOpen, setIsHotMenuOpen] = useState(false);
    const [isColdMenuOpen, setIsColdMenuOpen] = useState(false);

    return (
        <div className='header'>
            <div className="header-zam">
                <div className="header-menu">
                    <img src={Logo} alt="Midas Logo" />
                    <div className="header-comp">
                        <ul>
                            <li>
                                <Link to="/aksii">Акции</Link>
                                <img src={fire} alt="Fire Icon" />
                            </li>
                            {/* Выпадающее меню для "Горячее" */}
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
                            {/* Выпадающее меню для "Холодные" */}
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
                            <li>
                                <Link to="Vipech">Свежая выпечка</Link>
                            </li>
                            <li>
                                <Link to="Deserts">Десерты</Link>
                            </li>
                            <li>
                                <Link to="Napitki">Напитки</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header-right">
                        <div className="icons">
                            <Link to="">
                                <div className="icon">
                                    {/* <IoIosSearch className='icon-react' /> */}
                                </div>
                            </Link>
                            <Link to="/profile\">
                                <div className="icon">
                                    <GoPerson className='icon-react' />
                                </div>
                            </Link>
                            <Link to="CardPage">
                                <div className="icon">
                                    {/* <LiaShoppingBasketSolid className='icon-react' /> */}
                                    {/* <div className="count">{length}</div> */}
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;