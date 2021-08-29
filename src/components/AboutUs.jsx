import { useRouter } from 'next/router'
import styled from 'styled-components'
import theme from '../styles/themes'

export const AboutSection = styled.div`
  background: #203856;
`
export const AboutContainer = styled.div`
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 1rem 0;
`

export const AboutTitle = styled.h1`
  font-size: 1.4rem;
  color: ${theme.colors.backgroundLight};
`

export const AboutDesc = styled.div`
  margin: 1rem 1rem;
  padding: 1rem 5rem;
  color: ${theme.colors.backgroundLight};

  @media ${theme.breakpoints.md} {
    padding: 1rem;
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

const AboutUs = () => {
  const router = useRouter()
  return (
    <AboutSection>
      <AboutContainer>
        <AboutTitle>About Us</AboutTitle>
        <AboutDesc>
          <p>
            At GL-B GROUP SARL, our aim is to offer you services that show you
            that we really care! Not only have we got the trendiest products,
            but we can also guarantee that they are of the finest quality. We
            started as a small business in Bamako , Mali, and our aim is to
            continue providing our customers with products that keep them happy,
            at prices that keep them happy. Our customers are our top priority
            and through our products we work hard towards building long-lasting
            and meaningful relations with them.
          </p>
        </AboutDesc>
        <Button onClick={() => router.push('/about')}>MORE ABOUT US</Button>
      </AboutContainer>
    </AboutSection>
  )
}

export default AboutUs
