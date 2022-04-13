import { forwardRef } from 'react'
import styled from 'styled-components'

const Input = forwardRef(({ label, input }, ref) => {
  return (
    <InputWrapper>
      <Label htmlFor={input.id}>{label}</Label>
      <TheInput ref={ref} {...input} />
    </InputWrapper>
  )
})

export default Input

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
`

const Label = styled.label`
  font-weight: bold;
  margin-right: 1rem;
`

const TheInput = styled.input`
  width: 3rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  font: inherit;
  padding-left: 0.5rem;
`
