import styled, { keyframes } from 'styled-components'
import Card from '../UI/Card'
import MealItem from './MealItem/MealItem'
import useMeals from '../../hooks/useMeals'

const AvailableMeals = () => {
  const { meals, isLoading, error } = useMeals()
  if (isLoading) {
    return (
      <Loading>
        <p>Loading...</p>
      </Loading>
    )
  }
  return (
    <Meals>
      <Card>
        {meals && (
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
        )}
        {error && (
          <ErrorMessage>
            <p>{error.message}</p>
            <p>Something went wrong...</p>
          </ErrorMessage>
        )}
      </Card>
    </Meals>
  )
}

export default AvailableMeals

const Loading = styled.section`
  text-align: center;
  font-weight: bold;
  color: white;
`

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

const ErrorMessage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: red;
  font-size: x-large;
`
