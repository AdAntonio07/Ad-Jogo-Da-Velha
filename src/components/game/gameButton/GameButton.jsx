import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 5px 25px;
  border-radius: 8px;
  font-size: 25px;
  font-weight: bold;
  border: 3px solid;
  cursor: pointer;
  color: ${(props) => props.theme.colors.green};
  background-color: ${(props) => props.theme.colors.purple};
`

function Button({ onClick }) {
  return <StyledButton onClick={onClick}>Reiniciar</StyledButton>
}

export default Button
