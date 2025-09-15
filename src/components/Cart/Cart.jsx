import React, { useContext } from 'react';
import { CartContext } from '../../contex/CartContex';
import './cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  // Итоговая сумма
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart-page-container">
      <div className="cart-header-section">
        
        <div className="cart-main-title">
          <h1>
            Корзина <span className="item-count">{cartItems.length} шт</span>
          </h1>
        </div>
        <div className="navi">
                <Link to="/">Главная </Link>
                <p className="niva">/ Горячие блюда</p>
              </div>
      </div>

      <div className="cart-container">
        <div className="cart-list-header">
          <span className="header-item">Блюдо:</span>
          <span className="header-item">Цена:</span>
          <span className="header-item">Кол-во:</span>
          <span className="header-item">Сумма:</span>
        </div>

        {cartItems.length === 0 ? (
          <p className="empty-cart-message">Корзина пуста</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-info">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="cart-item-img"
                    />
                    <div className="item-details">
                      <h3>{item.title}</h3>
                      <p className="item-weight">{item.weight}</p>
                    </div>
                  </div>

                  <div className="cart-item-price-container">
                    {/* Цена за штуку */}
                    <span className="price">{item.price} ₽</span>

                    {/* Управление количеством */}
                    <div className="quantity-controls">
                      <button
                        onClick={() =>
                          item.quantity > 1 &&
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        –
                      </button>
                      <span className="quantity-display">{item.quantity} шт</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                    </div>

                    {/* Общая сумма за этот товар */}
                    <span className="total-item-price">
                      {item.price * item.quantity} ₽
                    </span>

                    {/* Удаление товара */}
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <div className="promo-code">
                <input type="text" placeholder="Применить промокод" />
                <button>Применить</button>
              </div>
              <div className="total-checkout">
                <span className="total-label">Итого к оплате:</span>
                <span className="total-amount">{total} ₽</span>
              </div>
              <button className="checkout-btn">ОФОРМИТЬ ЗАКАЗ</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Cart;
