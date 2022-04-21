import { useRef } from 'react'
import styled from 'styled-components'

const Checkout = ({ onCancel, onConfirm }) => {
  const nameInputRef = useRef()
  const streetInputRef = useRef()
  const postalCodeInputRef = useRef()
  const cityInputRef = useRef()

  const confirmHandler = (event) => {
    event.preventDefault()

    onConfirm({
      name: nameInputRef.current.value,
      street: streetInputRef.current.value,
      city: postalCodeInputRef.current.value,
      postalCode: cityInputRef.current.value,
    })
  }
  return (
    <Form onSubmit={confirmHandler}>
      <Control>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameInputRef} />
      </Control>
      <Control>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetInputRef} />
      </Control>
      <Control>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
      </Control>
      <Control>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityInputRef} />
      </Control>
      <Actions>
        <ButtonAlt onClick={onCancel}>Close</ButtonAlt>
        <ButtonOrder>Confirm</ButtonOrder>
      </Actions>
    </Form>
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
