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

  &:disabled {
    cursor: default;
    color: #256240;
    background-color: #3a1844;
  }
`

function Button({ onClick, disabled }) {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      Jogar
    </StyledButton>
  )
}

export default Button
