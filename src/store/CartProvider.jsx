import { useReducer } from 'react'
import CartContext from './cart-context'
import { defaultCartState, cartReducer } from '../helpers/constants'

const CartProvider = ({ children }) => {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  )

  const addItemHandler = (item) => {
    dispatchCartAction({ type: 'ADD_ITEM', item: item })
  }

  const removeItemHandler = (item) => {
    dispatchCartAction({ type: 'REMOVE_ITEM', item: item })
  }

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }
  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  )
}

export default CartProvider
