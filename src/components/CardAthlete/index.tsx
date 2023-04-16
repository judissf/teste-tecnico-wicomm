import { CardAthleteStyle } from './style'
import { TbArrowRight } from 'react-icons/tb'

interface ICardAthleteProps {
  img: string
}

const CardAthlete = ({ img }: ICardAthleteProps) => (
  <CardAthleteStyle img={img}>
    <div className='athlete-information'>
      <span className='container-title-name-athlete'>
        <p className='title-name-athlete'>cedric mcmillan</p>
      </span>

      <div className='line' />

      <span className='container-more-informations'>
        <a className='more-informations' href=''>
          mais informação
          <TbArrowRight />
        </a>
      </span>
    </div>
  </CardAthleteStyle>
)

export default CardAthlete
