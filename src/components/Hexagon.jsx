import styled from 'styled-components'

export const Shape = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #2b81f2;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
`

const Hexagon = () => {
  return (
    <>
      <Shape></Shape>
    </>
  )
}

export default Hexagon
