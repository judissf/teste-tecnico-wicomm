import styled from 'styled-components'

export const LinkHeaderStyle = styled.li`
  display: flex;
  flex-direction: column;
  width: 103px;
  height: 72px;
  transition: 0.3s;

  &:hover {
    a {
      background-color: var(--dark-2);
      color: white;
    }

    .charge-bar {
      width: 103px;
      background-color: var(--button-color);
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 70px;
    text-decoration: none;
    font-family: var(--font-barlow);
    font-size: 14px;
    font-weight: 700;
    line-height: 16px;
    color: var(--gray-1);
    background-color: var(--black-1);
    transition: 0.3s;
    text-transform: uppercase;
  }

  .charge-bar {
    width: 0px;
    height: 2px;
    background-color: var(--black-1);
    transition: 0.4s;
  }
`
