import styled from 'styled-components'
import H6 from '../../typography/H6'
import BoxSelect from '../boxSelect/BoxSelec'

const AlighChoice = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;

  @media screen and (max-width: 570px) {
    gap: 20px;
  }

  @media screen and (max-width: 430px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`

const BoxOfChoice = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

function PlayerIcon() {
  return (
    <AlighChoice>
      <BoxOfChoice>
        <BoxSelect iconName="Triangulo" onClick={console.log('Clicou em triangulo')} />
        <H6>Triangulo</H6>
      </BoxOfChoice>
      <BoxOfChoice>
        <BoxSelect iconName="Quadrado" onClick={console.log('Clicou em quadrado')} />
        <H6>Quadrado</H6>
      </BoxOfChoice>
      <BoxOfChoice>
        <BoxSelect iconName="Circulo" onClick={console.log('Clicou em circulo')} />
        <H6>Circulo</H6>
      </BoxOfChoice>
      <BoxOfChoice>
        <BoxSelect iconName="X" onClick={console.log('Clicou em x')} />
        <H6>X</H6>
      </BoxOfChoice>
    </AlighChoice>
  )
}

export default PlayerIcon
