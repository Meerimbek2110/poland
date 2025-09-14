import React from 'react'
import './App.css'

import { mypoland } from './Router'
import { RouterProvider } from 'react-router-dom'

function App() {
  return (
    <div>
      <RouterProvider router={mypoland}/>
    </div>
  )
}

export default App
