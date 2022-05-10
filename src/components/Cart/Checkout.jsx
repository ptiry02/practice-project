import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import { mealsDB } from '../../firebase/firebaseConfig'
import { ref, set } from 'firebase/database'
import { useContext, useState } from 'react'
import CartContext from '../../store/cart-context'

const Checkout = ({ onCancel }) => {
  const [confirmed, setConfirmed] = useState(false)
  const cartCtx = useContext(CartContext)
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      street: '',
      postal: '',
      city: '',
    },
  })

  const myHandler = (data) => {
    set(ref(mealsDB, 'orders/' + data.name), {
      directions: { street: data.street, postal: data.postal, city: data.city },
      order: cartCtx.items,
      price: cartCtx.totalAmount.toFixed(2),
    })
    cartCtx.updateCart(() => {})
    setConfirmed(true)
  }
  const reset = () => {
    onCancel()
    setConfirmed(false)
  }

  return (
    <>
      {confirmed ? (
        <>
          <Thx>Thank you for your order</Thx>
          <Actions>
            <ButtonAlt onClick={reset}>Close</ButtonAlt>
          </Actions>
        </>
      ) : (
        <Form onSubmit={handleSubmit(myHandler)}>
          <Control>
            <label htmlFor="name">Your Name</label>
            <section>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Please enter your name.' })}
              />
              <ErrorMessage>{errors.name?.message}</ErrorMessage>
            </section>
          </Control>
          <Control>
            <label htmlFor="street">Street</label>
            <section>
              <input
                type="text"
                id="street"
                {...register('street', {
                  required: 'Please give us an adress.',
                })}
              />
              <ErrorMessage>{errors.street?.message}</ErrorMessage>
            </section>
          </Control>
          <Control>
            <label htmlFor="postal">Postal Code</label>
            <section>
              <input
                type="text"
                id="postal"
                {...register('postal', {
                  required: 'A postal code is required.',
                })}
              />
              <ErrorMessage>{errors.postal?.message}</ErrorMessage>
            </section>
          </Control>
          <Control>
            <label htmlFor="city">City</label>
            <section>
              <input
                type="text"
                id="city"
                {...register('city', {
                  required: 'We need a city to complete the adress.',
                })}
              />
              <ErrorMessage>{errors.city?.message}</ErrorMessage>
            </section>
          </Control>
          <Actions>
            <ButtonAlt onClick={onCancel}>Cancel</ButtonAlt>
            <ButtonOrder type="submit">Confirm</ButtonOrder>
          </Actions>
        </Form>
      )}
    </>
  )
}

export default Checkout

const Form = styled.form`
  margin: 1rem 0;
  height: 19rem;
  overflow: auto;
`
const Control = styled.div`
  margin-bottom: 0.5rem;
  label {
    font-weight: bold;
    margin-bottom: 0.25rem;
    display: block;
  }
  input {
    font: inherit;
    border: 1px solid #ccc;
    border-radius: 4px;
    width: 20rem;
    max-width: 100%;
  }
  section {
    display: flex;
    height: 1.8rem;
    align-items: center;
    column-gap: 0.5rem;
  }
`
const ButtonAlt = styled.button`
  background-color: transparent;
  color: #8a2b06;
`

const ButtonOrder = styled.button`
  background-color: #8a2b06;
  color: white;
`

const Actions = styled.div`
  text-align: right;
  button {
    font: inherit;
    cursor: pointer;
    border: 1px solid #8a2b06;
    padding: 0.5rem 2rem;
    border-radius: 25px;
    margin-left: 1rem;
  }
  button:hover,
  button:active {
    background-color: #5a1a01;
    border-color: #5a1a01;
    color: white;
  }
`

const ErrorMessage = styled.p`
  font-size: 0.8rem;
  color: red;
`
const Thx = styled.h2`
  text-align: center;
`
