import AuxiliaryBar from '../../components/AuxiliaryBar'
import ButtonLeft from '../../components/ButtonLeft'
import ButtonRight from '../../components/ButtonRight'
import CardCategoryCircle from '../../components/CardCategoryCircle'
import CardFlavor from '../../components/CardFlavor'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import { HomeStyle } from './style'
import CardSizeColor from '../../components/CardSizeColor'
import ChangeItem from '../../components/ChangeItem'
import CardAthlete from '../../components/CardAthlete'
import CardBlog from '../../components/CardBlog'
import CardObjective from '../../components/CardObjective'
import CardFreightCashback from '../../components/CardFreightCashback'
import athlete1 from '../../assets/athlete1.png'
import athlete2 from '../../assets/athlete2.png'
import athlete3 from '../../assets/athlete3.png'
import blog1 from '../../assets/blog1.png'
import blog2 from '../../assets/blog2.png'
import blog3 from '../../assets/blog3.png'
import objective1 from '../../assets/objective1.jpeg'
import objective2 from '../../assets/objective2.jpeg'
import objective3 from '../../assets/objective3.jpeg'
import objective4 from '../../assets/objective4.jpeg'
import packageBox from '../../assets/package.png'
import dollar from '../../assets/dollar.png'

const Home = () => {
  return (
    <>
      <Header />
      <HomeStyle>
        <div className='introduction'>
          <h1 id='introduction-title'>
            ajudando você a ter <span>mais performance</span>
          </h1>

          <p id='introduction-description'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>

          <a id='check' href=''>
            confira
          </a>

          <ChangeItem margin='auto auto 32px 415px' />
        </div>

        <section className='category-suplements'>
          <ul className='list-category-suplements'>
            <ButtonLeft top='73px' left='-17px' />
            <CardCategoryCircle text='proteínas' />
            <CardCategoryCircle text='hipercalóricos' />
            <CardCategoryCircle text='creatina' />
            <CardCategoryCircle text='packs' />
            <CardCategoryCircle text='aminoácidos' />
            <CardCategoryCircle text='saúde' />
            <ButtonRight top='73px' right='-17px' />
          </ul>
        </section>

        <section className='releases'>
          <h2 id='title-releases'>lançamentos</h2>

          <ul className='list-products-releases'>
            <ButtonLeft top='155px' left='-17px' />
            <CardFlavor groupName='group1' />
            <CardFlavor groupName='group2' />
            <CardSizeColor groupName='group3' groupNameColor='color1' />
            <CardSizeColor groupName='group4' groupNameColor='color2' />
            <ButtonRight top='155px' right='-17px' />
          </ul>

          <ChangeItem margin='auto' />
        </section>

        <section className='our-athletes'>
          <h3 id='title-our-athletes'>
            conheça a tropa <span>black skull</span>
          </h3>

          <ul className='list-athletes'>
            <ButtonLeft top='135px' left='-62px' />
            <CardAthlete img={athlete1} />
            <CardAthlete img={athlete2} />
            <CardAthlete img={athlete3} />
            <ButtonRight top='135px' right='-62px' />
          </ul>

          <button id='see-all' type='button'>
            ver todos
          </button>
        </section>

        <section className='promotions'>
          <h4 id='title-promotions'>promoções</h4>

          <ul className='list-products-promotions'>
            <ButtonLeft top='155px' left='-17px' />
            <CardFlavor groupName='group5' />
            <CardFlavor groupName='group6' />
            <CardSizeColor groupName='group7' groupNameColor='color3' />
            <CardSizeColor groupName='group8' groupNameColor='color4' />
            <ButtonRight top='155px' right='-17px' />
          </ul>

          <ChangeItem margin='auto' />
        </section>

        <section className='check-blog'>
          <div className='container-title'>
            <h5 id='title-check-blog'>
              confira o <span>nosso blog</span>
            </h5>

            <button id='read-all' type='button'>
              ler todos
            </button>
          </div>

          <ul className='list-articles-blog'>
            <ButtonLeft top='175px' left='40px' />
            <CardBlog img={blog1} />
            <CardBlog img={blog2} />
            <CardBlog img={blog3} />
            <ButtonRight top='175px' right='40px' />
          </ul>
        </section>

        <section className='objectives'>
          <h6 id='title-objectives'>objetivos</h6>

          <ul className='list-objectives'>
            <CardObjective
              objective='ganho de masa'
              img={objective1}
            />
            <CardObjective
              objective='energia'
              img={objective2}
            />
            <CardObjective
              objective='recuperação muscular'
              img={objective3}
            />
            <CardObjective
              objective='emagrecimento'
              img={objective4}
            />
          </ul>
        </section>

        <div className='freight-cashback'>
          <CardFreightCashback
            img={packageBox}
            title='garanto o'
            highlight='frete grátis'
            textLink='consulte'
            rotate='80deg'
          />

          <CardFreightCashback
            img={dollar}
            title='seu dinheiro'
            highlight='de volta'
            textLink='entenda'
            rotate='-170deg'
          />
        </div>

        <section className='about-us'>
          <h6 id='title-about-us'>sobre a black skull</h6>

          <p id='description-about-us'>
            A Black Skull USA é uma marca de suplementos alimentares com foco em
            atletas de alta performance. Nossa sede no Brasil está alocada em
            Embu das Artes – SP, com mais de 12.000 m² de área construída, com
            alta capacidade produtiva. Nossos produtos trabalham com as melhores
            matérias-primas do mercado e tem como principal característica maior
            concentração de insumos, que proporcionam níveis de pureza mais
            altos e por consequência otimizam a qualidade de nossos produtos.
          </p>
        </section>

        <AuxiliaryBar />
      </HomeStyle>
      <Footer />
    </>
  )
}

export default Home
