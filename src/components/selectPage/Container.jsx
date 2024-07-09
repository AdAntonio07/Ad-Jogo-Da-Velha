import styled from 'styled-components'

const StyledContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
const StyledChildren = styled.div`
  max-width: 600px;
  width: 100%;
`

function Container({ children }) {
  return (
    <StyledContainer>
      <StyledChildren>{children}</StyledChildren>
    </StyledContainer>
  )
}

export default Container
