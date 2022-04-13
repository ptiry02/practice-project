import { useState } from 'react'
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals'
import Cart from './components/Cart/Cart'
import CartProvider from './store/CartProvider'

const App = () => {
  const [showCart, setShowCart] = useState(false)
  const handleClick = () => {
    setShowCart(!showCart)
  }
  return (
    <CartProvider>
      {showCart && <Cart onClose={handleClick} />}
      <Header handleCart={handleClick} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  )
}

export default App
