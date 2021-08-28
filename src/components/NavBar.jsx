import Link from 'next/link'
import styled from 'styled-components'
import theme from '../styles/themes'
import { GiHamburgerMenu } from 'react-icons/gi'
import { useState } from 'react'

export const NavBarContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: rgb(15, 35, 52, 0.9);
  color: #000;
  padding: 5px 0;
  height: 65px;
  z-index: 3;
  @media ${theme.breakpoints.sm} {
    height: 52px;
  }
`

export const NavBarLogo = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  background-color: #fff;
  clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
  width: 110px;
  @media ${theme.breakpoints.sd} {
    width: 100px;
  }
  @media ${theme.breakpoints.sm} {
    width: 80px;
    height: 50px;
  }
`

export const LogoContainer = styled.div``

export const NavBarDiv = styled.div`
  width: 80%;
  position: absolute;
  right: 0;
`

export const NavBarLinks = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  color: #fff;
  li {
    font-weight: 600;
  }
  @media ${theme.breakpoints.md} {
    display: none;
  }
`

export const LogoImg = styled.img`
  height: 60px;
  @media ${theme.breakpoints.sm} {
    height: 40px;
  }
`
export const NavBarMenu = styled.div`
  position: absolute;
  right: 5px;
  color: #fff;
  cursor: pointer;
  display: none;

  @media ${theme.breakpoints.md} {
    display: block;
  }
`
export const Overlay = styled.div`
  height: calc(100vh - 50px);
  position: fixed;
  background-color: #0071b3;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 4;
`

export const OverlayContents = styled.div`
  border: solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.8rem;
  background: rgb(0, 0, 0, 0.8);
`

export const OverlayTitles = styled.h1`
  margin: 1.2rem 0;
  color: white;
  cursor: pointer;
`

const NavBar = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <NavBarContainer>
        <NavBarLogo>
          <Link href='/'>
            <a>
              <LogoImg src='/images/logo/glNavLogo.png' />
            </a>
          </Link>
        </NavBarLogo>
        <NavBarDiv>
          <NavBarLinks>
            <Link href='/products'>
              <a>
                <li>PRODUCTS</li>
              </a>
            </Link>
            <Link href='/services'>
              <a>
                <li>SERVICES</li>
              </a>
            </Link>
            <Link href='/about'>
              <a>
                <li>ABOUT US</li>
              </a>
            </Link>
            <li>CONTACT US</li>
          </NavBarLinks>
        </NavBarDiv>
        <NavBarMenu>
          <GiHamburgerMenu size='3rem' onClick={() => setActive(!active)} />
        </NavBarMenu>
      </NavBarContainer>
      {active && (
        <Overlay>
          <OverlayContents onClick={() => setActive(!active)}>
            <Link href='/' passHref>
              <OverlayTitles>HOME</OverlayTitles>
            </Link>
            <Link href='/products' passHref>
              <OverlayTitles>PRODUCTS</OverlayTitles>
            </Link>
            <Link href='/services' passHref>
              <OverlayTitles>SERVICES</OverlayTitles>
            </Link>
            <Link href='/about' passHref>
              <OverlayTitles>ABOUT US</OverlayTitles>
            </Link>
            <Link href='/contact' passHref>
              <OverlayTitles>CONTACT US</OverlayTitles>
            </Link>
          </OverlayContents>
        </Overlay>
      )}
    </>
  )
}

export default NavBar
