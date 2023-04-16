import styled from 'styled-components'

interface CardFreightCashbackStyleProps {
  rotate: string
}

export const CardFreightCashbackStyle = styled.div<CardFreightCashbackStyleProps>`
  display: flex;
  position: relative;
  width: 475px;
  height: 280px;
  background: linear-gradient(213.8deg, #9a9a9a -17.86%, #0b0b0b 73%);

  &:hover {
    figure {
      bottom: 60px;
      transform: rotate(${(props) => props.rotate});
    }
  }

  .information-card {
    display: flex;
    flex-direction: column;
    padding-top: 40px;
    padding-left: 40px;

    .title-card {
      font-family: var(--font-roboto);
      font-style: italic;
      font-weight: 700;
      font-size: 40px;
      line-height: 46.88px;
      color: white;
      text-transform: uppercase;
      color: white;
      margin-bottom: 24px;

      span {
        display: flex;
        color: var(--button-color);
      }
    }

    .redirect-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 123px;
      height: 40px;
      background-color: var(--button-color);
      font-family: var(--font-barlow);
      font-weight: 700;
      font-size: 14px;
      line-height: 20px;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      text-decoration: none;
      border-radius: 4px;
      color: var(--black-1);
      transition: 0.2s;

      &:hover {
        background-color: var(--button-color-hover);
      }
    }
  }

  figure {
    position: absolute;
    right: 20px;
    bottom: 20px;
    width: 180px;
    height: 180px;
    transition: 0.25s;
  }
`
