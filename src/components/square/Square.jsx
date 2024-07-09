import styled from 'styled-components'

const Square = styled.div`
  width: ${(props) => props.size || '70px'};
  height: ${(props) => props.size || '70px'};
  border: 4px solid;
  border-color: ${(props) => props.theme.colors.purple};
  border-radius: 15px;
`

export default Square
