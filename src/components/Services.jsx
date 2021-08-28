import styled from 'styled-components'
import ServicesCard from './ServicesCard'
import { AiOutlineImport, AiOutlineExport } from 'react-icons/ai'
import { GrServices } from 'react-icons/gr'
import theme from '../styles/themes'

export const ServicesSection = styled.div`
  background: ${theme.colors.backgroundLight};
`
export const ServicesTitle = styled.h1`
  font-size: 1.4rem;
  color: #000;
  margin-bottom: 1rem;
`

export const ServicesContainer = styled.div`
  min-height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
`

export const ServiceCardContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  width: 100%;
`

export const HexContainer = styled.div`
  width: 300px;
  position: absolute;
`
const servicesData = [
  {
    icon: <AiOutlineImport size='2rem' />,
    title: 'IMPORT',
    desc: 'We import food, electronics, and machinery',
  },
  {
    icon: <AiOutlineExport size='2rem' />,
    title: 'EXPORT',
    desc: 'We export gold, cotton, dried hibiscus',
  },
  {
    icon: <GrServices size='2rem' />,
    title: 'OTHER SERVICES',
    desc: 'Business consultancy,trade facilitation and other services ',
  },
]
const Services = () => {
  return (
    <ServicesSection>
      <ServicesContainer>
        <ServicesTitle>What We Do</ServicesTitle>
        <ServiceCardContainer>
          {servicesData.map((item, i) => (
            <ServicesCard
              key={i}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </ServiceCardContainer>
      </ServicesContainer>
    </ServicesSection>
  )
}

export default Services
