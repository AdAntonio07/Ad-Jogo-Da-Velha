import styled from 'styled-components'
import Link from 'next/link'

const StyledButton = styled.button`
  padding: 13px 50px;
  border-radius: 8px;
  font-size: 20px;
  font-weight: bold;
  border: 2px solid;
  cursor: pointer;
  color: ${(props) => props.theme.colors.green};
  background-color: ${(props) => props.theme.colors.purple};
`

function Button({ onClick }) {
  return <StyledButton onClick={onClick}>Jogar</StyledButton>
}

export default Button
