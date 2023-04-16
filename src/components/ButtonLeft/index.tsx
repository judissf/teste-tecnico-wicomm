import { ButtonLeftStyle } from "./style"
import { HiArrowLeft } from 'react-icons/hi'

interface IButtonLeftProps {
  left: string
  top: string
}

const ButtonLeft = ({left, top}: IButtonLeftProps) => (
  <ButtonLeftStyle
    left={left}
    top={top}
  >
     <HiArrowLeft />
  </ButtonLeftStyle>
)

export default ButtonLeft