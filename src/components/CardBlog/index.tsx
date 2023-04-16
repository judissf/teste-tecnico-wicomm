import { CardBlogStyle } from './style'
import { RiExternalLinkLine } from 'react-icons/ri'

interface ICardBlogProps {
  img: string
}

const CardBlog = ({ img }: ICardBlogProps) => (
  <CardBlogStyle>
    <figure>
      <img src={img} alt='Foto de capa do artigo' />
    </figure>

    <div className='informations-article'>
      <p className='date-article'>03.05.21</p>

      <p className='title-article'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className='read-more'>
        <a className='redirect-read-more' href=''>
          LER MAIS
        </a>
        <RiExternalLinkLine />
      </div>
    </div>
  </CardBlogStyle>
)

export default CardBlog
