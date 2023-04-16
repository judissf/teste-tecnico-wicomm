import styled from 'styled-components'

export const CardFlavorStyle = styled.li`
  display: flex;
  position: relative;
  align-items: center;
  flex-direction: column;
  width: 277px;
  height: 388px;
  transition: 0.25s;
  border-radius: 4px;

  &:hover {
    background-color: var(--background);

    .buy-button {
      opacity: 1;
    }

    .product-informations {
      .background-flavor {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 1;
        height: 200px;

        .flavor {
          opacity: 1;
        }
      }
    }
  }

  .product-informations {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    height: 341px;
    border: 1px solid var(--background);
    border-radius: 4px;
    padding-top: 32px;

    figure {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 165px;
      margin-bottom: 24px;
      padding-right: 21px;
      padding-left: 24px;

      img {
        width: 165px;
        height: 100%;
      }
    }

    .product-title {
      font-family: var(--font-barlow);
      font-weight: 600;
      font-size: 12px;
      line-height: 16px;
      width: 182px;
      height: 32px;
      color: var(--black-1);
      margin-bottom: 16px;
      padding-left: 24px;
    }

    .product-prices {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 132px;
      height: 47px;
      padding-left: 24px;

      .cash-price {
        font-family: var(--font-barlow);
        font-weight: 700;
        font-size: 22px;
        line-height: 26px;
        color: var(--button-color);
      }

      .installment-price {
        font-family: var(--font-barlow);
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        color: var(--dark-3);
      }
    }

    .background-flavor {
      display: flex;
      position: absolute;
      bottom: 47px;
      align-items: center;
      justify-content: center;
      width: 275px;
      height: 0px;
      opacity: 0;
      border-radius: 4px;
      background-color: rgba(255, 255, 255, 0.96);
      transition: 0.2s;

      .flavor {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        width: 170px;
        height: 106px;
        opacity: 1;
        transition: 0.25s;
        border-radius: 4px;

        .title-flavor {
          font-family: var(--font-barlow);
          font-weight: 700;
          font-size: 14px;
          line-height: 16px;
          cursor: default;
        }

        .flavor-choices {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          gap: 6px;
          width: 100%;
          height: 75px;
        }
      }
    }
  }

  .icons {
    display: flex;
    flex-direction: column;
    position: absolute;
    align-items: center;
    justify-content: space-between;
    top: 20px;
    right: 16px;
    height: 65px;
    width: 24px;

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 24px;
      height: 24px;
      background: none;
      border: none;

      svg {
        transition: 0.2s;
        color: var(--gray-1);
        font-size: 22px;
      }
    }

    .favorite {
      cursor: pointer;
      transition: 0.2s;

      &:hover {
        svg {
          color: var(--black-1);
        }
      }
    }
  }

  .buy-button {
    opacity: 0;
    width: 100%;
    height: 47px;
    border: none;
    border-radius: 4px;
    background-color: var(--button-color);
    color: var(--black-1);
    font-weight: 700;
    font-family: var(--font-barlow);
    font-size: 16px;
    transition: 0.25s;
    cursor: pointer;

    &:hover {
      background-color: var(--button-color-hover);
    }
  }
`
