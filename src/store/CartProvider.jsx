import { useReducer } from 'react'
import CartContext from './cart-context'
import { defaultCartState, cartReducer } from '../helpers/constants'

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const updateCartHandler = (item, type) => {
    dispatchCartAction({ type: type, item: item })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    updateCart: updateCartHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider
