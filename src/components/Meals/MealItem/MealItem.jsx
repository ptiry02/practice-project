import { useContext } from 'react'
import styled from 'styled-components'
import CartContext from '../../../store/cart-context'
import MealItemForm from './MealItemForm'

const MealItem = ({ title, description, price, id }) => {
  const cartCtx = useContext(CartContext)

  const priceAmount = `${price.toFixed(2)}€`

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: title,
      amount: amount,
      price: price,
    })
  }

  return (
    <MealWrapper>
      <Meal>
        <h3>{title}</h3>
        <Description>{description}</Description>
        <Price>{priceAmount}</Price>
      </Meal>
      <MealItemForm id={id} onAddToCart={addToCartHandler} />
    </MealWrapper>
  )
}

export default MealItem

const MealWrapper = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  h3 {
    margin: 0 0 0.25rem 0;
  }
`

const Meal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Description = styled.div`
  font-style: italic;
`

const Price = styled.div`
  margin-top: 0.25rem;
  font-weight: bold;
  color: #ad5502;
  font-size: 1.25rem;
`
