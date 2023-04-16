import styled from 'styled-components'

interface IButtonLeftStyleProps {
  left: string
  top: string
}

export const ButtonLeftStyle = styled.button<IButtonLeftStyleProps>`
  display: flex;
  position: absolute;
  left: ${(props) => props.left};
  top: ${(props) => props.top};
  align-items: center;
  justify-content: center;
  z-index: 1;
  width: 32px;
  height: 32px;
  background-color: var(--gray-2);
  border-radius: 4px;
  border: none;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: var(--button-color);
  }

  svg {
    color: var(--black-1);
    font-size: 20px;
  }
`
