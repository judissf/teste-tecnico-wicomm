import { CardFlavorStyle } from './style'
import suplement from '../../assets/pote_suplemento.png'
import { FiStar } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import RadioOption from '../RadioOption'

interface ICardFlavorProps {
  groupName: string
}

const CardFlavor = ({ groupName }: ICardFlavorProps) => {
  return (
    <CardFlavorStyle>
      <div className='product-informations'>
        <figure>
          <img src={suplement} alt='Whey zero (com lactose) 900g' />
        </figure>

        <p className='product-title'>
          WHEY ZERO (COM LACTOSE) BLACK SKULL - 900G
        </p>

        <div className='product-prices'>
          <p className='cash-price'>R$ 349,90</p>
          <p className='installment-price'>ou 12x de R$ 29,16</p>
        </div>

        <div className='background-flavor'>

          <div className='flavor'>
            <p className='title-flavor'>SABOR</p>

            <div className='flavor-choices'>
              <RadioOption name={groupName} value='toffee' label='TOFFEE' width='80px' height='32px' />
              <RadioOption name={groupName} value='chocolate' label='CHOCOLATE' width='80px' height='32px' />
              <RadioOption name={groupName} value='morango' label='MORANGO'  width='80px' height='32px' />
              <RadioOption name={groupName} value='baunilha' label='BAUNILHA' width='80px' height='32px' />
            </div>

          </div>

        </div>

      </div>

      <div className='icons'>

        <button className='favorite' type='button'>
          <FiStar />
        </button>

        <button className='add-cart' type='button'>
          <HiOutlineShoppingCart />
        </button>
        
      </div>

      <button className='buy-button'>COMPRAR</button>
    </CardFlavorStyle>
  )
}

export default CardFlavor
