import { CardFreightCashbackStyle } from "./style"

interface ICardFreightCashbackProps {
  img: string
  textLink: string
  title: string
  highlight: string
  rotate: string
}

const CardFreightCashback = ({img, textLink, title, highlight, rotate}: ICardFreightCashbackProps) => (
  <CardFreightCashbackStyle rotate={rotate}>
    <div className="information-card">
      <p className="title-card">{title} <span>{highlight}</span></p>

      <a className="redirect-link" href="">{textLink}</a>
    </div>

    <figure>
      <img src={img} alt="" />
    </figure>
  </CardFreightCashbackStyle>
)

export default CardFreightCashback