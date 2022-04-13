import styled from 'styled-components'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = ({ onClick }) => {
  return (
    <Btn onClick={onClick}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Shopping cart</span>
      <Badge className="badge">3</Badge>
    </Btn>
  )
}

export default HeaderCartButton

const Btn = styled.button`
  cursor: pointer;
  font: inherit;
  border: none;
  background-color: #4d1601;
  color: white;
  padding: 0.75rem 3rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-radius: 25px;
  font-weight: bold;
  &:hover,
  &:active {
    background-color: #2c0d00;
  }
  &:hover .badge,
  &:active .badge {
    background-color: #92320c;
  }
`
const Icon = styled.span`
  width: 1.35rem;
  height: 1.35rem;
  margin-right: 0.5rem;
`

const Badge = styled.span`
  background-color: #b94517;
  padding: 0.25rem 1rem;
  border-radius: 25px;
  margin-left: 1rem;
  font-weight: bold;
`
