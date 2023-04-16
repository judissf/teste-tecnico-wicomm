import { ChangeItemStyle } from './style'

interface IChangeItemProps {
  margin: string
}

const ChangeItem = ({margin}: IChangeItemProps) => (
  <ChangeItemStyle margin={margin}>
    <span className='active'></span>
    <span className='inactive'></span>
    <span className='inactive'></span>
  </ChangeItemStyle>
)

export default ChangeItem
