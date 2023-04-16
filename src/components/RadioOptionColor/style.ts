import styled from 'styled-components'

interface IRadioOptionColorStyleProps {
  background_color: string
}

export const RadioOptionColorStyle = styled.div<IRadioOptionColorStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 32px;

  input {
    display: none;

    &:checked + label {
      transition: 0.2s;
      color: white;
      outline: 1px solid var(--black-1);
    }
  }

  label {
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.background_color};
    border-radius: 50%;
    cursor: pointer;
    padding: 5px;
    border: 2px solid white;
    outline: 1px solid transparent;
    transition: 0.2s;
  }
`
