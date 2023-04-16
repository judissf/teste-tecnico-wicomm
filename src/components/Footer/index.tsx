import { FooterStyle } from './style'
import wicomm from '../../assets/Logo_Wicomm_WhiteBlue 1.png'
import vtex from '../../assets/VTEX_pink_RGB.png'
import logo from '../../assets/Logo.png'
import { FaFacebookF } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { SiYoutube } from 'react-icons/si'
import { BsInstagram } from 'react-icons/bs'
import { IoLogoTiktok } from 'react-icons/io5'
import mercado_pago from '../../assets/mercado_pago.png'
import visa from '../../assets/visa.png'
import master_card from '../../assets/master_card.png'
import hiper_card from '../../assets/hiper_card.png'
import pix from '../../assets/pix.png'
import amex from '../../assets/amex.png'
import o from '../../assets/o.png'
import elo from '../../assets/elo.png'
import boleto from '../../assets/boleto.png'
import vtex_pci from '../../assets/vtex_pci.png'
import ebit from '../../assets/ebit.png'


const Footer = () => (
  <FooterStyle>
    <div className='content-footer'>
      <div className='navigation'>
        <div className='logo-network'>
          <figure>
            <img src={logo} alt='BlackSkull' />
          </figure>

          <p id='follow-us'>Nos siga:</p>

          <div className='network'>
            <a id='facebook' href=''>
              <FaFacebookF />
            </a>
            <a id='instagram' href=''>
              <BsInstagram />
            </a>
            <a id='youtube' href=''>
              <SiYoutube />
            </a>
            <a id='twitter' href=''>
              <AiOutlineTwitter />
            </a>
            <a id='tiktok' href=''>
              <IoLogoTiktok />
            </a>
          </div>
        </div>

        <div className='links-payments'>
          <div className='links'>
            <div className='black-skull-usa'>
              <p id='title-black-skull'>BLACKSKULL USA</p>

              <nav>
                <ul>
                  <li>
                    <a href=''>Sobre Nós</a>
                  </li>
                  <li>
                    <a href=''>Black Skull é confiável?</a>
                  </li>
                  <li>
                    <a href=''>Atletas Black Skull</a>
                  </li>
                  <li>
                    <a href=''>Nosso Blog</a>
                  </li>
                  <li>
                    <a href=''>Seja um Revendedor</a>
                  </li>
                  <li>
                    <a href=''>Entre em contato</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='institucional'>
              <p id='title-institucional'>INSTITUCIONAL</p>
              <nav>
                <ul>
                  <li>
                    <a href=''>Trocas e Devoluções</a>
                  </li>
                  <li>
                    <a href=''>Política de Entrega</a>
                  </li>
                  <li>
                    <a href=''>Política de Privacidade</a>
                  </li>
                  <li>
                    <a href=''>Política de Cancelamentos</a>
                  </li>
                </ul>
              </nav>
            </div>

            <div className='afiliados'>
              <p id='title-afiliados'>AFILIADOS</p>
              <nav>
                <ul>
                  <li>
                    <a href=''>Programa de Afiliados</a>
                  </li>
                  <li>
                    <a href=''>Desconto para Militares</a>
                  </li>
                  <li>
                    <a href=''>Benefícios para Profissionais da Saúde</a>
                  </li>
                  <li>
                    <a href=''>Benefícios para Profs. de Educação Física</a>
                  </li>
                  <li>
                    <a href=''>Assinaturas</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>

          <div className="payments-security">
            <div className="payments">
              <p id='title-payments'>FORMAS DE PAGAMENTO</p>

              <div className='flags'>
                <img src={mercado_pago} alt="MercadoPago" />
                <img src={visa} alt="Visa" />
                <img src={master_card} alt="MasterCard" />
                <img src={hiper_card} alt="HiperCard" />
                <img src={pix} alt="Pix" />
                <img src={amex} alt="Amex" />
                <img src={o} alt="O" />
                <img src={elo} alt="Elo" />
                <img src={boleto} alt="Boleto" />
              </div>
            </div>

            <div className="security">
              <p id="title-security">SEGURANÇA</p>

              <div className='security-seals'>
                <img id='vtex_pci' src={vtex_pci} alt="Vtex/PCI" />
                <img id='ebit' src={ebit} alt="ebit" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='newsletter'>
        <h6>
          FIQUE POR <span>DENTRO</span>
        </h6>

        <p id='subscribe'>
          Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e
          muito mais!
        </p>

        <form>
          <input id='name' type='text' placeholder='Digite seu nome' />
          <input id='email' type='text' placeholder='Digite seu e-mail' />
          <button type='submit'>ENVIAR</button>
        </form>
      </div>
    </div>

    <div className='informations'>
      <p>Black Skull 2022. Todos os direitos reservados.</p>

      <div className='icons'>
        <figure id='wicomm'>
          <img src={wicomm} alt='WICOMM' />
        </figure>

        <figure id='vtex'>
          <img src={vtex} alt='VTEX' />
        </figure>
      </div>
    </div>
  </FooterStyle>
)

export default Footer
