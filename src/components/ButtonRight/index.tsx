import { ButtonLeftStyle } from "./style"
import { HiArrowRight } from 'react-icons/hi'

interface IButtonLeftProps {
  right: string
  top: string
}

const ButtonRight = ({right, top}: IButtonLeftProps) => (
  <ButtonLeftStyle
    right={right}
    top={top}
  >
     <HiArrowRight />
  </ButtonLeftStyle>
)

export default ButtonRight