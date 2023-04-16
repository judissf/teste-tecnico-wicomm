import { LinkHeaderStyle } from "./style"

interface ILinkHeader {
  text: string
} 

const LinkHeader = ({text}: ILinkHeader) => (
  <LinkHeaderStyle>
    <a href="">
      {text}
    </a>
    <div className="charge-bar"/>
  </LinkHeaderStyle>
)

export default LinkHeader