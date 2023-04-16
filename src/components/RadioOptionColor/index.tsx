import { RadioOptionColorStyle } from './style'

interface IRadioOptionProps {
  name: string
  value: string
  background_color: string
}

const RadioOptionColor = ({name, value, background_color}: IRadioOptionProps) => {
  
  const inputId = `radio_${name}_${value}`
  
  return (
  <RadioOptionColorStyle
    background_color={background_color}
  >
    <input 
    type='radio' 
    name={name}
    id={inputId}
    /> 
    <label htmlFor={inputId} />
  </RadioOptionColorStyle>
)
}

export default RadioOptionColor
