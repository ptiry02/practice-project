import { useEffect, useState } from 'react'
import { get, child } from 'firebase/database'
import { mealsRef } from '../firebase/firebaseConfig'

const useMeals = () => {
  const [meals, setMeals] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState()
  useEffect(() => {
    const availableMeals = async () => {
      const result = await get(child(mealsRef, 'meals'))
      if (!result.exists()) {
        throw new Error()
      }
      const avMeals = result.val()
      const mealslist = []
      for (const meal in result.val()) {
        mealslist.push({
          id: meal,
          name: avMeals[meal].name,
          description: avMeals[meal].description,
          price: avMeals[meal].price,
        })
      }
      setMeals(mealslist)
      setIsLoading(false)
    }
    const fetchHandler = () => {
      try {
        availableMeals()
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
