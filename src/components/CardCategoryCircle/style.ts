import styled from 'styled-components'

export const CardCategoryCircleStyle = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 178px;
  height: 210px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.2s;

  &:hover {
    figure {
      background: radial-gradient(
        circle at center,
        var(--button-color) 67.5%,
        var(--button-color-hover) 5%
      );
      background-size: 100% 100%;
      background-position: center;
      background-repeat: no-repeat;
      transition: 0.2s;

      img {
        transform: scale(1.52);
      }
    }
  }

  figure {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 178px;
    height: 178px;
    border-radius: 50%;
    background-position: center;
    background-color: var(--background);
    background-size: 20% 20%;
    background-repeat: no-repeat;
    transition: 0.2s;

    img {
      width: 108px;
      height: 108px;
      transition: 0.2s;
    }
  }

  .legend {
    font-family: var(--font-barlow);
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    color: var(--black-1);
    text-transform: uppercase;
  }
`
