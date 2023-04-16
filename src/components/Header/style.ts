import styled from 'styled-components'

export const HeaderStyle = styled.header`
  display: flex;
  position: sticky;
  top: 0;
  z-index: 2;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1280px;
  width: 100%;
  height: 104px;
  margin: auto;
  border-bottom: 1px solid var(--dark-3);

  .header-informations {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 32px;
    width: 100%;
    background-color: var(--dark-1);
    padding: 9px 56px;

    #contact-us {
      color: var(--button-color);
      font-family: var(--font-barlow);
      font-weight: 700;
      line-height: 14px;
      font-size: 12px;
      text-decoration: none;
      width: 83px;
      height: 14px;
      transition: 0.2s;
      text-transform: uppercase;

      &:hover {
        color: var(--button-color-hover);
      }
    }

    #frete {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 282px;
      height: 20px;
      color: var(--gray-2);
      font-family: var(--font-barlow);
      font-size: 10px;
      font-weight: 500;
      cursor: default;
      text-transform: uppercase;

      svg {
        font-size: 20px;
        color: var(--button-color);
      }
    }

    #blog {
      font-family: var(--font-barlow);
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: var(--button-color);
      text-decoration: none;
      transition: 0.2s;
      text-transform: uppercase;

      &:hover {
        color: var(--button-color-hover);
      }
    }
  }

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 72px;
    padding-left: 56px;
    padding-right: 56px;
    background-color: var(--black-1);

    figure {
      width: 166px;
      height: 32px;

      img {
        width: 100%;
        height: 100%;
      }
    }

    nav {
      width: 618px;
      height: 100%;

      ul {
        display: flex;
        align-items: center;
      }
    }

    .search {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 216px;
      height: 40px;
      border-radius: 4px;
      border: 1px solid var(--dark-3);
      background-color: var(--dark-1);
      padding: 13px 8px 13px 16px;
      transition: 0.2s;

      &:hover {
        background-color: var(--dark-2);
        cursor: pointer;
      }

      input {
        border: none;
        background: none;
        color: var(--gray-1);
        font-size: 12px;
        font-weight: 500;
        line-height: 14px;
        width: 160px;
        cursor: pointer;

        &::placeholder {
          color: var(--gray-1);
          font-size: 12px;
          font-weight: 500;
        }

        &:focus {
          outline: none;
        }
      }

      svg {
        color: var(--gray-1);
        font-size: 24px;
      }
    }

    .buttons {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100px;
      height: 100%;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 24px;
        height: 24px;
        border: none;
        background: none;
        cursor: pointer;

        &:hover {
          svg {
            color: white;
          }
        }

        svg {
          font-size: 24px;
          color: var(--gray-1);
          transition: 0.2s;
        }
      }

      #cart {
        position: relative;

        &:hover {
          .new-items {
            background-color: var(--button-color-hover);
          }
        }

        .new-items {
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          top: -4px;
          right: -5px;
          width: 14px;
          height: 14px;
          border-radius: 50%;
          background-color: var(--button-color);
          font-size: 10px;
          font-weight: 700;
          line-height: 12px;
          font-family: var(--font-barlow);
          transition: 0.2s;
        }
      }
    }
  }
`
