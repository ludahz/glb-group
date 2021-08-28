import styled from 'styled-components'
import Team from '../components/Team'
import teamData from '../data/team'
import theme from '../styles/themes'

export const AboutSection = styled.div`
  min-height: 100vh;
  max-width: 100%;
  position: relative;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${theme.colors.backgroundLight};
`

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 50px;
  position: relative;
  z-index: 1;
  h1 {
    margin-bottom: 20px;
    font-size: 1.5rem;
  }
`

export const Description = styled.div`
  margin-bottom: 20px;
`
export const TeamSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 60px;
`

export const TeamContainer = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  padding: 0 0 4rem;
  div {
    margin: 5px;
  }
`

const About = () => {
  return (
    <AboutSection>
      <AboutContainer>
        <h1>About Us</h1>
        <Description>
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
        </Description>
        <TeamSection>
          <h1>Meet Our Team</h1>
          <TeamContainer>
            {teamData.map((item) => (
              <div key={item.id}>
                <Team
                  img={item?.img}
                  name={item.name}
                  title={item.title}
                  desc={item.desc}
                />
              </div>
            ))}
          </TeamContainer>
        </TeamSection>
      </AboutContainer>
    </AboutSection>
  )
}

export default About
