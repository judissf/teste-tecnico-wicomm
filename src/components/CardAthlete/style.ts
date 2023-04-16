import styled from 'styled-components'

interface ICardAthleteStyleProps {
  img: string
}

export const CardAthleteStyle = styled.li<ICardAthleteStyleProps>`
  display: flex;
  align-items: flex-end;
  width: 277px;
  height: 294px;
  background-image: url(${(props) => props.img});
  transition: 0.3s;

  &:hover {
    .athlete-information {
      width: 100%;
      background-color: rgba(45, 45, 45, 0.9);
      transition: 0.3s;

      .container-title-name-athlete {
        .title-name-athlete {
          bottom: 0;
          transition: 0.3s;
        }
      }

      .line {
        width: 245px;
      }

      .container-more-informations {
        .more-informations {
          bottom: 0;
          transition: 0.3s;
        }
      }
    }
  }

  .athlete-information {
    display: flex;
    position: relative;
    overflow: hidden;
    flex-direction: column;
    justify-content: space-between;
    width: 0;
    height: 104px;
    background-color: var(--button-color-hover);
    transition: 0.3s;

    .container-title-name-athlete {
      position: relative;
      top: 16px;
      overflow: hidden;
      height: 20px;
      transition: 0.3s;
      padding-left: 16px;
      cursor: default;

      .title-name-athlete {
        position: absolute;
        bottom: -50px;
        width: 100%;
        font-family: var(--font-roboto);
        font-style: italic;
        font-weight: 700;
        font-size: 16px;
        line-height: 20px;
        color: var(--button-color);
        transition: 0.3s;
        padding-top: 16px;
        text-transform: uppercase;
      }
    }

    .line {
      position: relative;
      left: 16px;
      right: 16px;
      width: 0;
      height: 1px;
      background-color: var(--gray-1);
      opacity: 0.5;
      transition: 0.3s;
    }

    .container-more-informations {
      display: flex;
      position: relative;
      align-items: flex-start;
      bottom: 16px;
      height: 20px;
      overflow: hidden;
      transition: 0.3s;

      .more-informations {
        display: flex;
        position: absolute;
        left: 16px;
        bottom: -50px;
        align-items: center;
        justify-content: flex-start;
        gap: 3px;
        width: 100%;
        height: 100%;
        color: white;
        font-family: var(--font-barlow);
        font-weight: 700;
        font-size: 12px;
        line-height: 14px;
        text-decoration: none;
        transition: 0.3s;
        text-transform: uppercase;

        svg {
          color: white;
          font-size: 22px;
        }
      }
    }
  }
`
