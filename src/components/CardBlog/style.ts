import styled from 'styled-components'

export const CardBlogStyle = styled.li`
  display: flex;
  flex-direction: column;
  width: 376px;
  height: 380px;
  background-color: var(--dark-1);

  &:hover {
    figure {
      img {
        transform: scale(1.17);
      }
    }

    .informations-article {
      background-color: var(--dark-2);

      .read-more {
        svg {
          right: 0;
        }
      }
    }
  }

  figure {
    width: 376px;
    height: 200px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      transition: 0.2s;
    }
  }

  .informations-article {
    display: flex;
    flex-direction: column;
    height: 180px;
    transition: 0.2s;
    padding-left: 24px;
    padding-top: 15px;
    border: 1px solid var(--dark-3);
    border-top: none;

    .date-article {
      font-family: var(--font-barlow);
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      color: var(--gray-2);
      cursor: default;
      margin-bottom: 16px;
    }

    .title-article {
      width: 320px;
      height: 44px;
      font-family: var(--font-barlow);
      font-weight: 700;
      font-size: 18px;
      line-height: 22px;
      color: white;
      cursor: default;
      text-transform: uppercase;
      margin-bottom: 24px;
    }

    .read-more {
      display: flex;
      align-items: center;
      position: relative;
      width: 165px;

      .redirect-read-more {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 138px;
        height: 40px;
        z-index: 1;
        background-color: var(--button-color);
        border-radius: 4px;
        border: none;
        cursor: pointer;
        font-family: var(--font-barlow);
        font-weight: 700;
        font-size: 14px;
        line-height: 20px;
        text-decoration: none;
        letter-spacing: 0.08em;
        color: var(--black-1);
        transition: 0.2s;

        &:hover {
          background-color: var(--button-color-hover);
        }
      }

      svg {
        position: absolute;
        right: 50px;
        font-size: 20px;
        color: var(--button-color);
        transition: 0.2s;
      }
    }
  }
`
