import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import { useState } from 'react'

const App = () => {
  const [showCart, setShowCart] = useState(false)
  const handleClick = () => {
    setShowCart(!showCart)
  }
  return (
    <>
      {showCart && <Cart onClose={handleClick} />}
      <Header handleCart={handleClick} />
      <main>
        <Meals />
      </main>
    </>
  )
}

export default App
