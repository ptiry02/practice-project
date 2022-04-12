import { DUMMY_MEALS } from '../../helpers/constants'
import styled from 'styled-components'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import '../../assets/animations/animations.module.css'

const AvailableMeals = () => {
  return (
    <Meals>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              title={meal.name}
              description={meal.description}
              price={meal.price}
            />
          ))}
        </ul>
      </Card>
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
