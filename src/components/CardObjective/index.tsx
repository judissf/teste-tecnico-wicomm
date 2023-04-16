import { CardObjectiveStyle } from "./style"

interface ICardObjectiveProps {
  objective: string
  img: string
}

const CardObjective = ({objective, img}: ICardObjectiveProps) => (
  <CardObjectiveStyle img={img}>
    <div className="container-objective"/>

    <div className="background-title-objective">
      <p className="title-objective">{objective}</p>
      <div className="background-cutted" />
      <div className="background-cutted-effect" />
      <div className="background-cutted-2-effect" />
    </div>
  </CardObjectiveStyle>
)

export default CardObjective