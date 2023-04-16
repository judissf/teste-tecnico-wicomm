import { RadioOptionStyle } from './style'

interface IRadioOptionProps {
  name: string
  value: string
  label: string
  width: string
  height: string
}

const RadioOption = ({name, value, label, width, height}: IRadioOptionProps) => {
  
  const inputId = `radio_${name}_${value}`
  
  return (
  <RadioOptionStyle
    width={width}  
    height={height}
  >
    <input 
    type='radio' 
    name={name}
    id={inputId}
    /> 
    <label htmlFor={inputId}>
      {label}
    </label>
  </RadioOptionStyle>
)
}

export default RadioOption
