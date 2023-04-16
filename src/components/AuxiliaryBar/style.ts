import styled from "styled-components";

export const AuxiliaryBarStyle = styled.div`
  display: flex;
  position: fixed;
  top: 557px;
  z-index: 5;
  margin-left: 1116px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  height: 106px;
  width: 124px;

  #toUp {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 56px;
    background-color: var(--dark-3);
    border: 1px solid var(--gray-1);
    border-radius: 4px;
    text-decoration: none;
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: var(--button-color);
      border-color: black;

      svg {
        color: black;
      }
    }

    svg {
      color: var(--gray-1);
      font-size: 32px;
      transition: 0.2s;
    }
  }

  #contact {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 7.5px;
    width: 124px;
    height: 40px;
    background-color: var(--button-color);
    border: 1px solid var(--dark-3);
    color: var(--black-1);
    font-size: 14px;
    text-decoration: none;
    font-family: var(--font-barlow);
    font-weight: 700;
    line-height: 20px;
    border-radius: 6px 6px 0px 6px;
    transition: 0.2s;

    &:hover {
      background-color: var(--button-color-hover);
    }

    svg {
      font-size: 14px;
      color: var(--black-1);
    }
  }
`
