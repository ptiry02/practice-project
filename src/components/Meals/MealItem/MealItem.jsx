import styled from 'styled-components'

const MealItem = ({ title, description, price }) => {
  const priceAmount = `${price.toFixed(2)}€`

  return (
    <li>
      <Meal>
        <h3>{title}</h3>
        <Description>{description}</Description>
        <Price>{priceAmount}</Price>
      </Meal>
      <div></div>
    </li>
  )
}

export default MealItem

const Meal = styled.div`
  display: flex;
  flex-direction: column;
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
