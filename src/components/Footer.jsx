import styled from 'styled-components'
import Link from 'next/link'

export const FooterContainer = styled.div`
  padding: 1rem calc((100vw - 1300px) / 2);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  color: #000;
  background: #fafafb;
`
export const FooterLinksWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`
export const FooterDesc = styled.div`
  padding: 0 2rem;
  h1 {
    font-size: 1.2rem;
    margin-bottom: 1rem;
    color: #2b81f2;
  }
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
`
export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 1rem 2rem;
  @media screen and (max-width: 480px) {
    padding: 1rem;
  }
  Link {
    color: black;
  }
`
export const FooterLinkTitle = styled.h2`
  font-size: 14px;
  margin-bottom: 1rem;
`
export const FooterLink = styled.a`
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: #3d3d4e;
  transition: all 0.3s ease;
  :hover {
    color: #2b81f2;
  }
`
const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksWrapper>
        <FooterDesc>
          <h1>GL-B GROUP SARL</h1>
          <p>We strive to create the best experinces for our customers</p>
        </FooterDesc>
        <FooterLinkItems>
          <FooterLinkTitle>Quick Links</FooterLinkTitle>
          <Link href='/products' passHref>
            <FooterLink>Products</FooterLink>
          </Link>
          <Link href='/services' passHref>
            <FooterLink href='/'>Services</FooterLink>
          </Link>
          <Link href='/about' passHref>
            <FooterLink href='/'>About Us</FooterLink>
          </Link>
          <Link href='/contact' passHref>
            <FooterLink href='/'>Contact Us</FooterLink>
          </Link>
        </FooterLinkItems>
      </FooterLinksWrapper>
    </FooterContainer>
  )
}

export default Footer
