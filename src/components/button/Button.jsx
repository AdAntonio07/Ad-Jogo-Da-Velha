import styled from 'styled-components'

const StyledButton = styled.button`
  width: ${(props) => props.width || '200px'};
  height: ${(props) => props.height || '55px'};
  border-radius: 8px;
  font-size: 25px;
  font-weight: bold;
  border: 2px solid;
  cursor: pointer;
  color: ${(props) => props.theme.colors.green};
  background-color: ${(props) => props.theme.colors.purple};
`

function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
