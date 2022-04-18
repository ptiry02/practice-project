import { useEffect, useState } from 'react'

const useMeals = () => {
  const [meals, setMeals] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    const availableMeals = async () => {
      const result = await fetch(
        'https://practice-database-14ea7-default-rtdb.europe-west1.firebasedatabase.app/meals.json/'
      )
      if (!result.ok) {
        throw new Error()
      }
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
      setIsLoading(false)
    }
    const fetchHandler = async () => {
      try {
        await availableMeals()
      } catch (err) {
        setIsLoading(false)
        setError({ ...err, message: 'Ups...' })
      }
    }
    fetchHandler()
  }, [])
  return { meals, isLoading, error }
}

export default useMeals
