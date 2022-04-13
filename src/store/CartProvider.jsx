import CartContext from './cart-context'

const CartProvider = ({ children }) => {
  const addItemHandler = (item) => {}

  const removeItemHandler = (id) => {}

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }
  return <CartContext.Provider>{children}</CartContext.Provider>
}

export default CartProvider
