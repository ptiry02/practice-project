import styled, { keyframes } from 'styled-components'
import { createPortal } from 'react-dom'
import { portalElement } from '../../helpers/constants'

const Backdrop = ({ onClose }) => <BackDrop onClick={onClose} />

const ModalOverlay = ({ children }) => (
  <ModalWrapper className="modal">
    <div>{children}</div>
  </ModalWrapper>
)

const Modal = ({ children, onClose }) => (
  <>
    {createPortal(<Backdrop onClose={onClose} />, portalElement)}
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
const slidedown = keyframes`
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
  top: 20vh;
  left: 35%;
  width: 30%;
  background-color: white;
  padding: 1rem;
  border-radius: 14px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  z-index: 30;
  animation: ${slidedown} 300ms ease-out forwards;
`
