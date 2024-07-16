import styled from 'styled-components'

const Box = styled.div`
  width: ${(props) => props.size || '80px'};
  height: ${(props) => props.size || '80px'};
  border: 4px solid;
  border-color: ${(props) => props.theme.colors.purple};
  border-radius: 15px;

  @media screen and (max-width: 430px) {
    width: 80px;
    height: 80px;
  }
`

export default Box
