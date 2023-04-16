import { CardSizeColorStyle } from './style'
import suplement from '../../assets/pote_suplemento.png'
import { FiStar } from 'react-icons/fi'
import { HiOutlineShoppingCart } from 'react-icons/hi'
import RadioOption from '../RadioOption'
import RadioOptionColor from '../RadioOptionColor'

interface ICardSizeColorProps {
  groupName: string
  groupNameColor: string
}

const CardSizeColor = ({ groupName, groupNameColor }: ICardSizeColorProps) => {
  return (
    <CardSizeColorStyle>
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

        <div className='background-size-color'>
          <div className='size-color'>
            <p className='title-size'>TAMANHO</p>

            <div className='size-choices'>
              <RadioOption name={groupName} width='48px' height='32px' value='p' label='P' />
              <RadioOption
                name={groupName} width='48px' height='32px'
                value='m'
                label='M'
              />
              <RadioOption name={groupName} width='48px' height='32px' value='g' label='G' />
              <RadioOption name={groupName} width='48px' height='32px' value='gg' label='GG' />
              <RadioOption name={groupName} width='48px' height='32px' value='exgg2_1' label='EXGG2' />
              <RadioOption name={groupName} width='48px' height='32px' value='exgg2_2' label='EXGG2' />
            </div>

            <div className='colors'>
              <RadioOptionColor name={groupNameColor} value='red' background_color='#CD3232'/>
              <RadioOptionColor name={groupNameColor} value='blue' background_color='#596DB3'/>
              <RadioOptionColor name={groupNameColor} value='green' background_color='#66CA64'/>
              <RadioOptionColor name={groupNameColor} value='yellow' background_color='#ECBD17'/>
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
    </CardSizeColorStyle>
  )
}

export default CardSizeColor
