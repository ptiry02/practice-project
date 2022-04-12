import styled from 'styled-components'
import MealItemForm from './MealItemForm'

const MealItem = ({ title, description, price, id }) => {
  const priceAmount = `${price.toFixed(2)}€`

  return (
    <Meal>
      <div>
        <h3>{title}</h3>
        <Description>{description}</Description>
        <Price>{priceAmount}</Price>
      </div>
      <div>
        <MealItemForm id={id} />
      </div>
    </Meal>
  )
}

export default MealItem

const Meal = styled.li`
  display: flex;
  justify-content: space-between;
  margin: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ccc;
  h3 {
    margin: 0 0 0.25rem 0;
  }
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
