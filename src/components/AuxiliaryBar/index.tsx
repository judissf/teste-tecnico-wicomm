import { AuxiliaryBarStyle } from './style'
import { IoIosArrowUp } from 'react-icons/io'
import { BsChatRightDotsFill } from 'react-icons/bs'

const AuxiliaryBar = () => (
  <AuxiliaryBarStyle>

    <a id='toUp' href='#'>
      <IoIosArrowUp />
    </a>

    <a id='contact' href=''>
      <BsChatRightDotsFill />
      Fale conosco
    </a>

  </AuxiliaryBarStyle>
)

export default AuxiliaryBar
