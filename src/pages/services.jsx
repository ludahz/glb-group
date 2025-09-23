import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import {
	FaGlobe,
	FaPassport,
	FaChalkboardTeacher,
	FaHandshake,
	FaShippingFast,
	FaBusinessTime,
} from 'react-icons/fa'
import { services as servicesData } from '../data/services'
import PageHero from '../components/PageHero'

const additionalServices = [
	{
		icon: <FaGlobe className='text-primary-600' size='3rem' />,
		title: 'Global Network',
		description:
			'Extensive international partnerships across multiple continents',
	},
	{
		icon: <FaShippingFast className='text-primary-600' size='3rem' />,
		title: 'Fast Delivery',
		description: 'Efficient logistics and shipping solutions worldwide',
	},
	{
		icon: <FaBusinessTime className='text-primary-600' size='3rem' />,
		title: '24/7 Support',
		description: 'Round-the-clock customer service and business support',
	},
]

const ServiceCard = ({ service, index }) => (
	<div
		className={`flex flex-col lg:flex-row items-center gap-12 ${
			index % 2 === 1 ? 'lg:flex-row-reverse' : ''
		}`}
	>
		{/* Content */}
		<div className='flex-1 space-y-6'>
			<div className='flex items-center space-x-4'>
				<div className='w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 bg-primary-600 rounded-full flex items-center justify-center text-white'>
					{service.icon === 'globe' && (
						<FaGlobe className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
					)}
					{service.icon === 'passport' && (
						<FaPassport className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
					)}
					{service.icon === 'chalkboard' && (
						<FaChalkboardTeacher className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
					)}
					{service.icon === 'handshake' && (
						<FaHandshake className='w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10' />
					)}
				</div>
				<h3 className='text-2xl sm:text-3xl font-bold text-gray-800'>
					{service.title}
				</h3>
			</div>

			<p className='text-gray-600 text-lg leading-relaxed'>
				{service.description}
			</p>

			<div className='grid grid-cols-2 gap-4'>
				{service.features.map((feature, idx) => (
					<div key={idx} className='flex items-center space-x-2'>
						<div className='w-2 h-2 bg-primary-600 rounded-full'></div>
						<span className='text-gray-700 font-medium'>{feature}</span>
					</div>
				))}
			</div>

			<Link
				href={`/services/${service.slug}`}
				className='btn-primary mt-2 md:mt-4 self-start'
			>
				Learn More
			</Link>
		</div>

		{/* Image */}
		<div className='flex-1 w-full'>
			<div className='relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl'>
				<Image
					src={service.image}
					alt={service.title}
					fill
					sizes='(min-width: 1024px) 50vw, 100vw'
					className='object-cover'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
			</div>
		</div>
	</div>
)

const Services = () => {
	return (
		<>
			<Head>
				<title>Services - GL-B GROUP SARL</title>
				<meta
					name='description'
					content='Comprehensive international trade services including import, export, business consultancy, and trade facilitation.'
				/>
			</Head>

			<div className='min-h-screen bg-gray-50'>
				<PageHero
					title='Our Services'
					subtitle='Global Solutions'
					description='Comprehensive international trade solutions designed to connect businesses across borders and facilitate global commerce.'
					variant='gradient'
					breadcrumbs={[{ label: 'Services' }]}
				/>

				{/* Main Services */}
				<section className='section-padding'>
					<div className='container-custom'>
						<div className='space-y-24'>
							{servicesData.map((service, index) => (
								<ServiceCard key={index} service={service} index={index} />
							))}
						</div>
					</div>
				</section>

				{/* Additional Services */}
				<section className='bg-white section-padding'>
					<div className='container-custom'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
								Why Choose Us
							</h2>
							<div className='w-24 h-1 bg-primary-600 mx-auto rounded-full'></div>
							<p className='text-gray-600 text-lg mt-6 max-w-2xl mx-auto'>
								Our commitment to excellence and years of experience make us
								your ideal partner
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							{additionalServices.map((service, index) => (
								<div key={index} className='text-center group'>
									<div className='mb-6 flex justify-center'>
										<div className='w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-primary-50 transition-colors duration-300'>
											<div className='text-primary-600'>
												{/* Icon is a React element with size prop; wrap to keep color, scale with text size */}
												<span className='inline-block text-2xl sm:text-3xl md:text-4xl'>
													{service.icon}
												</span>
											</div>
										</div>
									</div>
									<h3 className='text-xl font-bold text-gray-800 mb-4'>
										{service.title}
									</h3>
									<p className='text-gray-600 leading-relaxed'>
										{service.description}
									</p>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className='bg-primary-700 text-white py-20'>
					<div className='container-custom'>
						<div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
							<div>
								<div className='text-4xl md:text-5xl font-bold mb-2'>10+</div>
								<div className='text-primary-100'>Years Experience</div>
							</div>
							<div>
								<div className='text-4xl md:text-5xl font-bold mb-2'>500+</div>
								<div className='text-primary-100'>Happy Clients</div>
							</div>
							<div>
								<div className='text-4xl md:text-5xl font-bold mb-2'>50+</div>
								<div className='text-primary-100'>Countries Served</div>
							</div>
							<div>
								<div className='text-4xl md:text-5xl font-bold mb-2'>1000+</div>
								<div className='text-primary-100'>Successful Trades</div>
							</div>
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className='section-padding bg-gray-100'>
					<div className='container-custom text-center'>
						<h2 className='text-3xl md:text-4xl font-bold text-gray-800 mb-6'>
							Ready to Expand Your Business Globally?
						</h2>
						<p className='text-xl text-gray-600 mb-8 max-w-2xl mx-auto'>
							Let us help you navigate the complexities of international trade
							and unlock new opportunities for your business.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<Link href='/contact' className='btn-primary'>
								Get Started Today
							</Link>
							<Link href='/about' className='btn-secondary'>
								Learn More About Us
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Services
