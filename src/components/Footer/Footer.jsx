import React from 'react'
import Logo from '../../assets/Logo (1).svg'
import './footer.css'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div className='footer'>
      <div className="foot">
        <img src={Logo} />
        <div className="foot-ctl">
          <ul>
            <li>
              <Link to="Contact">Обратная связь </Link>
            </li>
            <li>
              <a href="">Доставка</a>
            </li>
            <li>
              <a href="">Оплата</a>
            </li>
            <li>
              <a href="">Кoнтакты</a>
            </li>

          </ul>
        </div>
        <div className="foot-contact">
          <h2>+7 (499) 841-67-29</h2>
          <h4 className='gmail'>delivery@midas.rest</h4>
        </div>
        
      </div>
      <div className="foot-cnt">
        <h4>© 2009–2019, ООО «MIDAS», официальный сайт</h4>
        <h4>Политика конфиденциальности и оферта</h4>
        <h4 className='foot-one'>Пользовательское соглашение</h4>
      </div>
    
    </div>
  )
}

export default Footer
