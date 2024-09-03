import styled from 'styled-components'

import SelectIcon from '../selectIcon/SelectIcon'

const SyteledAligh = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`

function SelectPlayer({ onClick, handleSelectIcon }) {
  return (
    <>
      <SyteledAligh>
        <SelectIcon onClick={onClick} handleSelectIcon={handleSelectIcon} />
      </SyteledAligh>
    </>
  )
}

export default SelectPlayer
