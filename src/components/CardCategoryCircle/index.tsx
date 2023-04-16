import { CardCategoryCircleStyle } from "./style"
import suplement from '../../assets/suplement.png'

interface ICardCategoryProps {
  text: string
}

const CardCategoryCircle = ({text}: ICardCategoryProps) => (
  <CardCategoryCircleStyle>
    <figure>
      <img src={suplement} alt="Embalagem de suplemento" />
    </figure>
    <p className="legend">{text}</p>
  </CardCategoryCircleStyle>
)

export default CardCategoryCircle