
import Tochka1 from '../../assets/Union.svg'
import header from '../../assets/header.jpg'
import redcap from '../../assets/Group 3.svg'
import Tochka2 from '../../assets/Union.png'
import { LiaShoppingBasketSolid } from "react-icons/lia";
import tiramisu from '../../assets/hame.png'
import './home.css'

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from '../slider/Slider';
import Product from '../Product/Product';



const API = 'https://689eaab93fed484cf877a6fe.mockapi.io/fruit'


function Home() {
   const [product, setProduct] = useState([]);

    async function getpro() {
        try {
            const res = await axios.get(API);
            setProduct(res.data);
        } catch (error) {
            console.log(error);
        }
    }

    
    useEffect(() => {
        getpro();
    }, []);
  return (
    <div className='Home'>
      <div className="home-two">
        <div className="home-text">
          <h1>Доставка готовой еды <br /> из фермерских <br /> продуктов!</h1>
          <img src={Tochka1} />
          <h2>+7 (499) 841-67-29</h2>
          <h3>delivery@midas.rest</h3>
        </div>
        <div className="home-header">
          <img className='home-head1' src={header} />
 <div className="home-head2-wrapper">
    <img className='home-head2' src={redcap} />
    <div className="redcap-text">
      <h2>Стейк из лосося <br /> с овощами</h2>
      <h4>250 г</h4>
      <p>Нежный стейк дикого <br /> лосося, пропитанный соком <br /> и ароматом слегка <br /> обжаренных фермерских <br /> овощей</p>
      
      <div className="losos-shop">
          <h1>1200 ₽</h1>
          <LiaShoppingBasketSolid className='losos-img' />
        </div>
    </div>
  </div>
         
          <img className='home-head3' src={Tochka2} />
        </div>
      </div>
      <div className="tiramisu">
        <div className="tiramisu-zam">
          <img src={tiramisu} />
          <h2>Тирамису</h2>
          <h3 className='ash3'>430г</h3>
        </div>
        <div className="tiramisu-shop">
          <h1>370 ₽</h1>
          <LiaShoppingBasketSolid className='shop-img' />
        </div>
      </div>
      <h1 className='popular-meko'>Популярные <br /> блюда</h1>
      <div className="container">
  {/* Один заголовок для всей секции */}


  {/* Сетка карточек */}
  <div className="flower">
    {product.slice(0, 12).map((el) => (
      <Product key={el.id} data={el} />
    ))}
  </div>
</div>






    <Slider/>
 


















    </div>
  )
}

export default Home
