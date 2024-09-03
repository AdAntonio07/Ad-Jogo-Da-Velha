import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 5px 20px;
  border-radius: 8px;
  font-size: 22px;
  font-weight: bold;
  border: 2px solid;
  cursor: pointer;
  color: ${(props) => props.theme.colors.green};
  background-color: ${(props) => props.theme.colors.purple};
`

function Button({ onClick }) {
  return <StyledButton onClick={onClick}>Reiniciar</StyledButton>
}

export default Button
