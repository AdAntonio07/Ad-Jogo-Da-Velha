import styled from 'styled-components'

const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`
const Children = styled.div`
  max-width: 650px;
  width: 100%;
`

function GameContainer({ children }) {
  return (
    <Container>
      <Children>{children}</Children>
    </Container>
  )
}

export default GameContainer
