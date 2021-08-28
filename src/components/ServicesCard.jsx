import styled from 'styled-components'
import Hexagon from './Hexagon'

export const Card = styled.div`
  position: relative;

  height: 220px;
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem 10px;
  padding: 0.3rem;

  h3 {
    margin: 10px 0;
  }
  p {
    text-align: center;
    margin-bottom: 1rem;
  }
`
export const HexDiv = styled.div`
  display: block;
  height: 90px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
`

export const Hex = styled.div`
  position: relative;
  height: 60px;
  width: 80px;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const IconDiv = styled.div`
  position: absolute;
  color: white;
`

export const DescContainer = styled.div`
  position: absolute;

  width: 100%;
  bottom: 0;
  height: 130px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ServicesCard = ({ title, icon, desc }) => {
  return (
    <Card>
      <HexDiv>
        <Hex>
          <Hexagon />
          <IconDiv>{icon}</IconDiv>
        </Hex>
      </HexDiv>
      <DescContainer>
        <h3>{title}</h3>
        <p>{desc}</p>
      </DescContainer>
    </Card>
  )
}

export default ServicesCard
