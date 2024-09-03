import styled from 'styled-components'

const StyledButton = styled.button`
  padding: 5px 30px;
  border-radius: 8px;
  font-size: 30px;
  font-weight: 800;
  border: 3px solid;
  cursor: pointer;
  color: ${(props) => props.theme.colors.green};
  background-color: ${(props) => props.theme.colors.purple};
`

function Button({ onClick }) {
  return <StyledButton onClick={onClick}>Jogar</StyledButton>
}

export default Button
