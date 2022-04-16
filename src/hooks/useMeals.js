import { useEffect, useState } from 'react'

const useMeals = () => {
  const [meals, setMeals] = useState([])
  useEffect(() => {
    const availableMeals = async () => {
      const result = await fetch(
        'https://practice-database-14ea7-default-rtdb.europe-west1.firebasedatabase.app/meals.json/'
      )
      const dummyMeals = await result.json()
      const mealslist = []
      for (const meal in dummyMeals) {
        mealslist.push({
          id: meal,
          name: dummyMeals[meal].name,
          description: dummyMeals[meal].description,
          price: dummyMeals[meal].price,
        })
      }
      setMeals(mealslist)
    }
    availableMeals()
  }, [])
  return meals
}

export default useMeals
