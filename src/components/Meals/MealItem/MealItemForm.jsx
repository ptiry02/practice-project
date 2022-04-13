import { useRef, useState } from 'react'
import styled from 'styled-components'
import Input from '../../UI/Input'

const MealItemForm = ({ id, onAddToCart }) => {
  const [validAmount, setValidAmount] = useState(true)
  const amountInputRef = useRef()

  const submitHandler = (event) => {
    event.preventDefault()
    const enteredAmount = +amountInputRef.current.value

    if (enteredAmount.length === 0 || enteredAmount < 1 || enteredAmount > 5) {
      return setValidAmount(false)
    }
    setValidAmount(true)
    onAddToCart(enteredAmount)
  }

  return (
    <Form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: 'amount_' + id,
          type: 'number',
          step: 1,
          defaultValue: 1,
        }}
      />
      {!validAmount && (
        <UnvalidAmount>Please enter a valid amount (1-5).</UnvalidAmount>
      )}
      <Button>+ Add</Button>
    </Form>
  )
}

export default MealItemForm

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  row-gap: 0.5rem;
`

const Button = styled.button`
  font: inherit;
  cursor: pointer;
  background-color: #8a2b06;
  border: 1px solid #8a2b06;
  color: white;
  padding: 0.25rem 2rem;
  border-radius: 20px;
  font-weight: bold;
  :hover,
  :active {
    background-color: #641e03;
    border-color: #641e03;
  }
`

const UnvalidAmount = styled.p`
  margin: 0;
  color: red;
  font-size: 0.8rem;
`
