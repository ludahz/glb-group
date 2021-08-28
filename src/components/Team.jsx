import styled from 'styled-components'

export const TeamCard = styled.div`
  width: 280px;
  min-height: 350px;
  border: solid 1px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px 5px;
  h4 {
    margin-bottom: 10px;
  }
  h6 {
    margin-bottom: 10px;
  }

  p {
    text-align: center;
  }
`

export const ImgContainer = styled.div`
  height: 130px;
  width: 130px;
  border-radius: 50%;
  margin-bottom: 10px;
`

export const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`

const Team = ({ img, name, title, desc }) => {
  return (
    <TeamCard>
      <ImgContainer>
        <Img src={img} alt='Our Team' />
      </ImgContainer>
      <h4>{name}</h4>
      <h6>{title}</h6>
      <p>{desc}</p>
    </TeamCard>
  )
}

export default Team
