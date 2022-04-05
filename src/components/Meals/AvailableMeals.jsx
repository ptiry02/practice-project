import { DUMMY_MEALS } from '../../helpers/constants'
import styled from 'styled-components'
import '../../assets/animations/animations.module.css'

const AvailableMeals = () => {
  return (
    <Meals>
      <ul>
        {DUMMY_MEALS.map((meal) => (
          <li key={meal.id}>{meal.name}</li>
        ))}
      </ul>
    </Meals>
  )
}

export default AvailableMeals

const Meals = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: meals-appear 1s ease-out forwards;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
