import { useContext, useEffect, useState } from 'react'
import CartContext from '../../store/cart-context'
import styled, { css, keyframes } from 'styled-components'
import CartIcon from '../Cart/CartIcon'

const HeaderCartButton = ({ onClick }) => {
  const [animate, setAnimate] = useState(false)
  const cartCtx = useContext(CartContext)
  const { items } = cartCtx

  const numberOfItems = items.reduce((amount, item) => {
    return amount + item.amount
  }, 0)

  useEffect(() => {
    if (items.length !== 0) {
      setAnimate(true)
    }
    const timer = setTimeout(() => {
      setAnimate(false)
    }, 300)

    return () => {
      clearTimeout(timer)
    }
  }, [items])

  return (
    <Btn onClick={onClick} animate={animate}>
      <Icon>
        <CartIcon />
      </Icon>
      <span>Shopping cart</span>
      <Badge className="badge">{numberOfItems}</Badge>
    </Btn>
  )
}

export default HeaderCartButton

const bump = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`

const animation = ({ animate }) => css`
  animation: ${animate ? bump : 'none'} 300ms ease-out;
`

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
  ${animation}
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
