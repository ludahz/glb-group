import styled from 'styled-components'
import theme from '../styles/themes'

export const BannerSection = styled.div`
  font-family: 'Lato', sans-serif;
`

export const BannerContainer = styled.div``

export const BgImage = styled.div`
  background: linear-gradient(
      160deg,
      rgba(0, 0, 0, 0.1) 0%,
      rgba(0, 0, 0, 0.2) 35%,
      rgba(0, 0, 0, 0.1) 100%
    ),
    url('images/plane.jpeg') no-repeat;
  background-size: cover;
  background-position: center;
  min-height: 480px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${theme.breakpoints.sm} {
    min-height: 280px;
  }
`

export const Info = styled.div`
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.4);
  h1 {
    font-weight: 500;
    font-size: clamp(2rem, 6vw, 4rem);
    margin-bottom: 8px;
  }
  p {
    font-weight: 300;
    font-size: clamp(1rem, 2vw, 1.5rem);
    margin-bottom: 1.8rem;
    color: #dee0e3;
  }
`

export const Button = styled.button`
  font-weight: 800;
  font-size: 1.2rem;
  padding: 0.6rem;
  margin-bottom: 1rem;
  background: #000;
  color: ${theme.colors.compliment};
  border: solid 2px ${theme.colors.compliment};
  border-radius: 5px;
  transition: ease 0.3s;
  cursor: pointer;
  :hover {
    background: transparent;
  }
`

const Banner = () => {
  return (
    <BannerSection>
      <BannerContainer>
        <BgImage>
          <Info>
            <h1>GL-B GROUP SARL</h1>
            <p>Your Key to Global Market</p>
            <Button>CONTACT US</Button>
          </Info>
        </BgImage>
      </BannerContainer>
    </BannerSection>
  )
}

export default Banner
