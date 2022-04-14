import { useContext } from 'react'
import CartContext from '../../store/cart-context'
import styled from 'styled-components'
import Modal from '../UI/Modal'
import CartItem from './CartItem'

const Cart = ({ onClose }) => {
  const cartCtx = useContext(CartContext)

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)}€`
  const hasItems = cartCtx.items.length > 0

  const addHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 })
  }
  const removeHandler = (item) => {
    cartCtx.removeItem(item)
  }

  return (
    <Modal onClose={onClose}>
      <CartItems>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onAdd={() => addHandler(item)}
            onRemove={() => removeHandler(item)}
          />
        ))}
      </CartItems>
      <Total>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </Total>
      <Actions>
        <ButtonAlt onClick={onClose}>Close</ButtonAlt>
        {hasItems && <ButtonOrder onClick={onClose}>Order</ButtonOrder>}
      </Actions>
    </Modal>
  )
}

export default Cart

const CartItems = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  max-height: 20rem;
  overflow: auto;
`
const Total = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 1.5rem;
  margin: 1rem 0;
`

const ButtonAlt = styled.button`
  background-color: transparent;
  color: #8a2b06;
`

const ButtonOrder = styled.button`
  background-color: #8a2b06;
  color: white;
`

const Actions = styled.div`
  text-align: right;
  button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }
  button:hover,
  button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`
