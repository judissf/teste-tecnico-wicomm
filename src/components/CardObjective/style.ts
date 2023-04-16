import styled from 'styled-components'

interface ICardObjectiveStyleProps {
  img: string
}

export const CardObjectiveStyle = styled.li<ICardObjectiveStyleProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 277px;
  height: 340px;
  overflow: hidden;

  &:hover {
    .container-objective {
      transform: scale(1.11);
      filter: grayscale(0);
    }

    .background-title-objective {
      .title-objective {
        background-color: var(--button-color-hover);
      }

      .background-cutted {
        background-color: var(--button-color-hover);
      }

      .background-cutted-effect {
        opacity: 1;
        right: 45px;
      }
      
      .background-cutted-2-effect {
        opacity: 1;
        right: 27px;
      }
    }
  }

  .container-objective {
    position: relative;
    width: 100%;
    height: 100%;
    background: url(${(props) => props.img});
    filter: grayscale(100%);
    background-size: cover;
    background-position: center;
    transition: 0.25s;

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        180deg,
        rgba(11, 11, 11, 0) 67.94%,
        #0b0b0b 100%
      );
    }
  }

  .background-title-objective {
    display: flex;
    align-items: center;
    position: absolute;
    bottom: 0;
    z-index: 1;
    width: 100%;
    height: 40px;
    transition: 0.25s;
    
    .title-objective {
      display: flex;
      align-items: center;
      clip-path: polygon(0 0, 100% 0, 170px 100px, 0 50px);
      background-color: var(--button-color);
      width: 212px;
      height: 40px;
      font-family: var(--font-barlow);
      font-style: italic;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
      color: var(--black-1);
      padding-left: 16px;
      transition: 0.2s;
      text-transform: uppercase;
      cursor: default;
    }

    .background-cutted {
      position: absolute;
      right: 65px;
      width: 32.5px;
      height: 40px;
      background-color: var(--button-color);
      clip-path: polygon(62% 0, 100% 0%, 48% 100%, 10% 100%);
      transition: 0.3s;
    }

    .background-cutted-effect {
      position: absolute;
      right: 65px;
      width: 32.5px;
      height: 40px;
      background-color: var(--button-color);
      clip-path: polygon(62% 0, 100% 0%, 48% 100%, 10% 100%);
      transition: 0.3s;
      opacity: 0;
    }

    .background-cutted-2-effect {
      position: absolute;
      right: 65px;
      width: 28px;
      height: 40px;
      background-color: var(--button-color);
      clip-path: polygon(62% 0, 100% 0%, 40% 100%, 1% 100%);
      transition: 0.3s;
      opacity: 0;
    }


  }
`
