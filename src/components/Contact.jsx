import styled from 'styled-components'
import LocationOnIcon from '@material-ui/icons/LocationOn'
import PhoneIcon from '@material-ui/icons/Phone'
import MailOutlineIcon from '@material-ui/icons/MailOutline'
import theme from '../styles/themes'

export const ContactContainer = styled.div`
  color: #fff;
`

export const BgImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.3) 0%,
      rgba(0, 0, 0, 0.5) 35%,
      rgba(0, 0, 0, 0.6) 100%
    ),
    url('images/banner/World.jpeg') no-repeat;
  background-size: cover;
  background-position: center;
  width: 100%;
  min-height: 380px;
  padding: 1rem 0;
  position: relative;
`

export const SectionsContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  width: 100%;
  padding: 10px 20px;
`

export const LeftSection = styled.div`
  width: 50%;
  padding: 10px 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const RightSection = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding: 10px 1rem;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`
export const ContactInfo = styled.div`
  padding: 1rem 1rem;
  background: rgb(0, 0, 0, 0.6);
`
export const InfoDiv = styled.div`
  display: flex;
  padding: 1rem 0;
  p {
    margin-left: 10px;
  }
`

export const Icon = styled.div`
  color: ${theme.colors.compliment};
`

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem 0;
  background: rgb(0, 0, 0, 0.6);
  form {
    display: flex;
    flex-direction: column;
    width: 80%;
    input {
      height: 35px;
      outline: none;
      border-width: 0, 0, 2px, 0;
      margin: 8px 0 1rem 0;
      padding: 0 5px;
      font-size: 1rem;
    }
    label {
      color: ${theme.colors.compliment};
    }
  }
`
export const Button = styled.button`
  font-weight: 800;
  font-size: 1.2rem;
  padding: 0.5rem;
  margin-top: 1rem;
  width: 100px;
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

const Contact = () => {
  return (
    <ContactContainer id='contact'>
      <BgImage>
        <h1>Contact us</h1>
        <SectionsContainer>
          <LeftSection>
            {/* <h5>Contact Info</h5> */}
            <ContactInfo>
              <InfoDiv>
                <Icon>
                  <LocationOnIcon />
                </Icon>
                <p>sotuba aci, bamako mali</p>
              </InfoDiv>
              <InfoDiv>
                <Icon>
                  <PhoneIcon />
                </Icon>
                <p>0022375450086</p>
              </InfoDiv>
              <InfoDiv>
                <Icon>
                  <MailOutlineIcon />
                </Icon>
                <p>info@glbgroup10.com</p>
              </InfoDiv>
            </ContactInfo>
          </LeftSection>
          <RightSection>
            {/* <h5>Contact Form</h5> */}
            <FormContainer>
              <form action=''>
                <label htmlFor='name'>Name</label>
                <input type='text' placeholder='Your Name' />
                <label htmlFor='email'>E-mail</label>
                <input type='text' placeholder='email@example.com' />
              </form>
              <Button>Send</Button>
            </FormContainer>
          </RightSection>
        </SectionsContainer>
      </BgImage>
    </ContactContainer>
  )
}

export default Contact
