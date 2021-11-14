import styled from 'styled-components'
import Image from 'next/image'
import theme from '../styles/themes'

export const ServicesContainer = styled.div`
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
export const ServicesDescription = styled.div`
	width: 100%;
	margin: 20px 0;

	padding: 0 50px;
	@media ${theme.breakpoints.lg} {
		padding: 0;
	}
`
export const ServicesDescriptionContainer = styled.div`
	display: flex;
	width: 100%;

	@media ${theme.breakpoints.md} {
		flex-direction: column;
	}
`
export const ServicesInfo = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 20px 0;
`
export const ServiceTitle = styled.h1`
	font-size: clamp(1rem, 3vw, 1.5rem);
	padding: 12px 0 0 0;
	margin-bottom: 12px;
	text-align: center;
`

export const ImageContainer = styled.div`
	display: flex;
	width: 45%;
	justify-content: center;
	padding: 20px 0;
	@media ${theme.breakpoints.md} {
		width: 100%;
	}
`
export const DescriptionContainer = styled.div`
	width: 55%;
	@media ${theme.breakpoints.md} {
		width: 100%;
	}
`

export const ServiceImgDiv = styled.div`
	max-height: 200px;
	max-width: 300px;
	border-radius: 10%;
	margin-bottom: 12px;
	@media ${theme.breakpoints.md} {
		margin: 0 auto;
	}
`

export const Img = styled.img`
	width: 100%;
	height: 100%;
	border-radius: 10%;
	object-fit: fill;
`

export const ServiceDesc = styled.div`
	padding: 1rem;
	ul {
		padding-left: 24px;
	}
`
const consultancy = [
	// 'Company Registrations (Close Corporations, PTYs, NGOs, etc.)',
	// 'Obtaining of other tender compliant documents (Tax, Social Security Certificates, Good Standings, Affirmative Action Compliance Certificates, BEE Certificates, Fitness Certificates, and Small Medium Enterprise Certificates, etc.)',
	// 'Tax calculations, submissions, and maintenance',
	'Market and feasibility Studies',
	// 'SME mentorships',
	'Customer Relationship Management',
	'Outsourcing',
	'Startup and Expansion Business Plans',
	'Strategic Plans',
	'Project Management',
	'Change Management',
	'Enterprise Applications',
	// 'Financial Statements and Audits',
	'Accounting and bookkeeping',
	'Financial Management & Control',
	'Merger & Acquisition Advisory Services',
	'Supply Chain Management',
	'Travel Services',
	'International Trade',
	'Logistics',
]

const otherServices = [
	{
		title: 'TRAINING AND CAPACITY BUILDING',
		img: '/images/servicess/training-capacity.jpeg',
		alt: 'Training and Capacity Building',
		desc: 'We recognize the need for our Malian businesses to be equipped with sufficient skills and knowledge to run their firms efficiently. One such crucial knowledge is tax laws and regulations. We offer tax training, giving the much-needed emphasis on Income Tax and Provisional tax, VAT on Import, Value Added Tax for different businesses in different industries, and PAYE for personal tax. We also offer training in accounting and bookkeeping as well as business-related acumens. For group bookings and tailor-made training for your organization, please do not hesitate to contact us.',
	},
	{
		title: 'INTERNATIONAL TRADE FACILITATION AND DEVELOPMENT',
		img: '/images/servicess/International-trade.jpeg',
		alt: 'International trade and development',
		desc: 'Trade facilitation involves a wide range of activities centered on lowering trade transaction costs for global commerce firms. These costs include the price of moving freight from the factory to final destinations. Firms must manage border clearance procedures and pay trade services fees, among many other steps after goods and services are produced. As such, trade facilitation involves much more than trucking goods across national borders or shipping a package by sea transport. As a consulting firm, it is our job to run by taking over these operations, leaving companies to focus on other more imperative and tenacious factors of running their business.',
	},
	{
		title: 'OTHER SERVICES',
		img: '/images/servicess/visa-consult.jpeg',
		alt: 'Other Services',
		desc: 'Visa Consultations – we strive to provide one of the best visa consultation service to our clients. We provide advice for various types of visas, such as business visa, tourist visa, school visa, and all other forms of visa applications you might have. Our team is well-trained and has many years of experience to offer the best service to you.',
	},
]

const Services = () => {
	return (
		<ServicesContainer>
			<h1>Services</h1>
			<ServicesDescription>
				<p>
					The services we offer at GL-B GROUP SARL are not limited to a
					geographical area. We accept clients globally and we are constantly
					expanding our physical offices. We can help our clients in their
					businesses with the following services.
				</p>
			</ServicesDescription>
			<ServicesInfo>
				<ServiceTitle>BUSINESS CONSULTANCY</ServiceTitle>
				<ServicesDescriptionContainer>
					<ImageContainer>
						<ServiceImgDiv>
							<Img src='/images/servicess/consult.jpg' alt='Services' />
						</ServiceImgDiv>
					</ImageContainer>
					<DescriptionContainer>
						<ServiceDesc>
							<ul>
								{consultancy.map((item, i) => (
									<li key={i}>{item}</li>
								))}
							</ul>
						</ServiceDesc>
					</DescriptionContainer>
				</ServicesDescriptionContainer>
			</ServicesInfo>
			{otherServices.map((item, i) => (
				<ServicesInfo key={i}>
					<ServiceTitle>{item.title}</ServiceTitle>
					<ServicesDescriptionContainer>
						<ImageContainer>
							<ServiceImgDiv>
								<Img
									src={item.img}
									alt={item.alt}
									width='300px'
									height='200px'
								/>
							</ServiceImgDiv>
						</ImageContainer>
						<DescriptionContainer>
							<ServiceDesc>
								<p>{item.desc}</p>
							</ServiceDesc>
						</DescriptionContainer>
					</ServicesDescriptionContainer>
				</ServicesInfo>
			))}
		</ServicesContainer>
	)
}

export default Services
