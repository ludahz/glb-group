import styled from 'styled-components'
import theme from '../styles/themes'
import { FcCheckmark } from 'react-icons/fc'
export const Section = styled.div`
	min-height: 100vh;
	max-width: 100%;
	display: flex;
	// align-items: center;
	justify-content: center;
	background: ${theme.colors.backgroundLight};
	position: relative;
`

export const Box = styled.div`
	// border: solid 1px;
	max-width: 300px;
	height: 300px;
	margin-top: 100px;
	padding: 1rem;
`

export const Icon = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`

export const P = styled.p`
	margin: 1rem;
`

const messageSent = () => {
	return (
		<Section>
			<Box>
				<Icon>
					<FcCheckmark size='3rem' />
				</Icon>
				{/* <CheckCircleOutlineIcon /> */}
				<P>
					Message sent successfully, We will get back to you at our earliest
					convenience. Thank you.
				</P>
			</Box>
		</Section>
	)
}

export default messageSent
