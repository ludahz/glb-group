import styled from 'styled-components'
import theme from '../styles/themes'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { useRouter } from 'next/router'

export const ContactSection = styled.div`
	min-height: 100vh;
	max-width: 100%;
	position: relative;
	// padding: 24px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background: ${theme.colors.backgroundLight};
`

export const ContactDesc = styled.div`
	// padding: 24px;
`

export const Sections = styled.div`
	// margin-top: 1rem;
	width: 100%;
`

export const LeftSection = styled.div`
	h1 {
		text-align: center;
		font-weight: 500;
		font-size: clamp(2rem, 5vw, 3rem);
	}
	margin-bottom: 4rem;
	// border: 2px solid red;
	padding: 0rem;
	P {
		text-align: center;
		padding: 0 5rem;
		margin-top: 1rem;
	}
`

export const RightSection = styled.div`
	h1 {
		margin-left: 24px;
		margin-bottom: 12px;
	}
`

export const ContactInfo = styled.div`
	margin: 1rem;
	padding: 1rem;
`
export const InfoDiv = styled.div`
	display: flex;
	align-items: center;
	p {
		margin-bottom: 12px;
	}
`
export const Icon = styled.div`
	margin-right: 12px;
	margin-bottom: 12px;
`

export const FormContainer = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	padding: 1rem 0;
	// background: rgb(0, 0, 0, 0.6);
	form {
		display: flex;
		flex-direction: column;
		width: 350px;
		height: 440px;
		background: #e6e6e6;
		border-radius: 8px;
		box-shadow: 0 0 40px -10px #000;
		// margin: calc(50vh - 220px) auto;
		padding: 20px 30px;
		max-width: calc(100vw - 40px);
		box-sizing: border-box;
		font-family: 'Montserrat', sans-serif;
		position: relative;
		input {
			height: 35px;
			outline: none;
			border: none;
			background: none;
			border-bottom: 2px solid #78788c;
			margin: 8px 0 1rem 0;
			padding: 1px 5px;
			font-size: 1rem;
			:focus {
				border-bottom: 2px solid ${theme.colors.compliment};
			}
		}
		label {
			color: ${theme.colors.compliment};
			// color: #2b81f2;
		}
		textarea {
			resize: vertical;
			padding: 5px;
			margin: 8px 0 4rem 0;
			outline: none;
			border: none;
			background: none;
			font-size: 1rem;
			border-bottom: 2px solid #78788c;
			:focus {
				border-bottom: 2px solid ${theme.colors.compliment};
			}
		}
		h2 {
			margin: 10px 0;
			padding-bottom: 5px;
			width: 120px;
			color: #78788c;
			border-bottom: 3px solid #78788c;
		}
	}
`

export const Button = styled.button`
	font-weight: 800;
	font-size: 1.2rem;
	padding: 0.5rem;
	bottom: 2rem;
	width: 100px;
	background: #000;
	color: ${theme.colors.compliment};
	border: solid 2px ${theme.colors.compliment};
	border-radius: 5px;
	transition: ease 0.3s;
	cursor: pointer;
	position: absolute;
	:hover {
		background: transparent;
	}
`

export const Logo = styled.div`
	position: relative;
	img {
		height: 250px;
	}
`

const Contact = () => {
	const [success, setSuccess] = useState(false)
	const router = useRouter()
	const sendEmail = (e) => {
		e.preventDefault()

		emailjs
			.sendForm(
				'service_20wzgin',
				'template_rq9v4bc',
				e.target,
				'user_N1BOgYgW3cDmEJxoe3AZ2'
			)
			.then(
				(res) => {
					console.log('SUCCESS!', res.status, res.text)
					setSuccess(true)
				},
				(err) => {
					console.log('FAILED...', err)
				}
			)
	}
	return (
		<ContactSection>
			{/* <h1>CONTACT US</h1> */}
			<Logo>
				<img src='images/logo/glb-group-logo-2.png' alt='' />
			</Logo>
			<ContactDesc></ContactDesc>
			<Sections>
				<LeftSection>
					<h1>Contact Us</h1>

					<p>
						If you have any questions or queries a member of staff will always
						be happy to help. Feel free to contact us by telephone or email and
						we will be sure to get back to you as soon as possible.
					</p>
				</LeftSection>
				<RightSection>
					<FormContainer>
						<form action='' onSubmit={sendEmail}>
							<h2>Email Us</h2>
							<label htmlFor='name'>Name</label>
							<input
								type='text'
								name='name'
								placeholder='Your Name'
								required='true'
							/>
							<label htmlFor='email'>E-mail</label>
							<input
								type='email'
								placeholder='email@example.com'
								name='email'
								required='true'
							/>
							<label htmlFor='email'>Your Message</label>
							<textarea
								name='message'
								id=''
								cols='30'
								rows='10'
								placeholder='What would you like to tell us'
								required='true'
							/>
							<Button
								type='submit'
								onSubmit={success && router.push('messageSent')}
							>
								Send
							</Button>
						</form>
					</FormContainer>
				</RightSection>
			</Sections>
		</ContactSection>
	)
}

export default Contact
