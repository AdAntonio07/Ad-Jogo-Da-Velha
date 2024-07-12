import styled from 'styled-components'

const H6 = styled.h6`
  color: ${(props) => props.theme.colors.purple};
  font-size: 20px;

  @media screen and (max-width: 430px) {
    font-size: 18px;
  }
`
export default H6
