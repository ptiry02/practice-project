import { createContext } from 'react'

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  updateCart: (item) => {},
})

export default CartContext
