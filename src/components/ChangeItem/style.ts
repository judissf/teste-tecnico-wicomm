import styled from 'styled-components'

interface IChangeItemStyleProps {
  margin: string
}

export const ChangeItemStyle = styled.div<IChangeItemStyleProps>`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  width: 140px;
  height: 6px;
  margin: ${(props) => props.margin};

  .inactive {
    width: 40px;
    height: 2px;
    background-color: var(--gray-2);
  }

  .active {
    width: 40px;
    height: 6px;
    background-color: var(--button-color);
  }
`
