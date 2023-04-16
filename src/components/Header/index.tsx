import { HeaderStyle } from './style'
import { TbTruckDelivery } from 'react-icons/tb'
import { FiSearch } from 'react-icons/fi'
import { TbUserCircle } from 'react-icons/tb'
import { FiStar } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import logo from '../../assets/Logo.png'
import LinkHeader from '../LinkHeader'

const Header = () => (
  <HeaderStyle>

      <div className='header-informations'>
        <a id='contact-us' href=''>
          FALE CONOSCO
        </a>

        <p id='frete'>
          <TbTruckDelivery />
          frete grátis a partir de R$ 199,90 para todo brasil
        </p>

        <a id='blog' href=''>
          blog.blackskull
        </a>
      </div>

      <div className='header-content'>
        <figure>
          <img src={logo} alt="BlackSkull" />
        </figure>

        <nav>
          <ul>
            <LinkHeader text='categorias' />
            <LinkHeader text='vestuário' />
            <LinkHeader text='objetivos' />
            <LinkHeader text='promoções' />
            <LinkHeader text='atletas' />
            <LinkHeader text='assinatura' />
          </ul>
        </nav>

        <div className='search'>
          <input type="text" placeholder='Buscar' />
          <FiSearch />
        </div>

        <div className="buttons">
          <button type='button' id='user'>
          <TbUserCircle />
          </button>
          <button type='button' id='favorites'>
            <FiStar />
          </button>
          <button type='button' id='cart'>
            <HiOutlineShoppingCart />
            <div className='new-items'>03</div>
          </button>
        </div>
      </div>

  </HeaderStyle>
)

export default Header
