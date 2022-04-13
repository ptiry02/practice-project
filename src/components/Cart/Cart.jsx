import styled from 'styled-components'
import Modal from '../UI/Modal'
import { DUMMY_CART_ITEMS } from '../../helpers/constants'

const Cart = ({ onClose }) => {
  return (
    <Modal onClose={onClose}>
      <CartItems>
        {DUMMY_CART_ITEMS.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </CartItems>
      <Total>
        <span>Total Amount</span>
        <span>35.62€</span>
      </Total>
      <Actions>
        <ButtonAlt onClick={onClose}>Close</ButtonAlt>
        <ButtonOrder onClick={onClose}>Order</ButtonOrder>
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
