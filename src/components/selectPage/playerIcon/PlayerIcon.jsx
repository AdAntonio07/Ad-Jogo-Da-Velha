import styled from 'styled-components'
import H6 from '../../typography/H6'
import BoxSelect from '../boxSelect/BoxSelec'

const AlighChoice = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`

const BoxOfChoice = styled.div`
  text-align: center;
`

function PlayerIcon() {
  return (
    <AlighChoice>
      <BoxOfChoice>
        <BoxSelect iconName="Triangulo" />
        <H6>Triangulo</H6>
      </BoxOfChoice>
      <BoxOfChoice>
        <BoxSelect iconName="Quadrado" />
        <H6>Quadrado</H6>
      </BoxOfChoice>
      <BoxOfChoice>
        <BoxSelect iconName="Circulo" />
        <H6>Circulo</H6>
      </BoxOfChoice>
      <BoxOfChoice>
        <BoxSelect iconName="X" />
        <H6>X</H6>
      </BoxOfChoice>
    </AlighChoice>
  )
}

export default PlayerIcon
