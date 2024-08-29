import { useState } from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  width: 150px;
  height: 50px;
  border-radius: 8px;
  font-size: 25px;
  font-weight: bold;
  border: 3px solid;
  cursor: pointer;
  color: ${(props) => props.theme.colors.green};
  background-color: ${(props) => props.theme.colors.purple};
`

function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>
}

export default Button
