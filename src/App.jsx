import React from 'react'
import './App.css'
import Cart from "./components/Cart/Cart";
import { mypoland } from './Router'
import { RouterProvider } from 'react-router-dom'
import { CartProvider } from './contex/CartContex';

function App() {
  return (
    <div>
       <CartProvider>
      <RouterProvider router={mypoland}/>
      </CartProvider>
    </div>
  )
}

export default App
