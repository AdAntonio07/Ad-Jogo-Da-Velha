import styled from 'styled-components'

const H3 = styled.h3`
  color: ${(props) => props.theme.colors.purple};
  font-size: 28px;
  font-weight: bold;

  @media screen and (max-width: 430px) {
    font-size: 22px;
  }
`

export default H3
