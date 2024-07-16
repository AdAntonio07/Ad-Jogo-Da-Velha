import styled from 'styled-components'

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

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>
}

export default Button
