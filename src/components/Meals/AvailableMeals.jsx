import styled, { keyframes } from 'styled-components'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import useMeals from '../../hooks/useMeals'

const AvailableMeals = () => {
  const meals = useMeals()
  return (
    <Meals>
      <Card>
        <ul>
          {meals.map((meal) => (
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

const mealsAppear = keyframes`
  from {
    opacity: 0;
    transform: translateY(3rem);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const Meals = styled.section`
  max-width: 60rem;
  width: 90%;
  margin: 2rem auto;
  animation: ${mealsAppear} 1s ease-out forwards;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
`
