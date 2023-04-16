import styled from 'styled-components'

interface IRadioOptionStyleProps {
  width: string
  height: string
}

export const RadioOptionStyle = styled.div<IRadioOptionStyleProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
  height: ${(props) => props.height};

  input {
    display: none;

    &:checked + label {
      transition: 0.2s;
      background-color: var(--black-1);
      border-color: var(--black-1);
      color: white;
    }
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    height: 32px;
    background-color: transparent;
    color: var(--gray-1);
    font-family: var(--font-barlow);
    font-size: 10px;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0.08em;
    border-radius: 4px;
    border: 1px solid var(--gray-1);
    cursor: pointer;
    transition: 0.2s;

    &:hover {
      background-color: var(--background);
      color: var(--black-1);
      border-color: var(--black-1);
    }
  }
`
