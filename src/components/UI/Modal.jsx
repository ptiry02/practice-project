import styled, { keyframes } from 'styled-components'
import { createPortal } from 'react-dom'
import { portalElement } from '../../helpers/constants'

const Backdrop = () => <BackDrop />

const ModalOverlay = ({ children }) => <ModalWrapper>{children}</ModalWrapper>

const Modal = ({ children }) => (
  <>
    {createPortal(<Backdrop />, portalElement)}
    {createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
  </>
)

export default Modal

const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`

const slideDown = keyframes`
  from {
    opacity: 0;
    transform: translateY(-3rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const ModalWrapper = styled.div`
  position: fixed;
  top: 10vh;
  left: 25%;
  width: 50%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slideDown} 300ms ease-out forwards;
`
