import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Team from '../components/Team'
import teamData from '../data/team'

const About = () => {
	return (
		<>
			<Head>
				<title>About Us - GL-B GROUP SARL</title>
				<meta
					name='description'
					content='Learn about GL-B GROUP SARL, your trusted partner in international trade with over 10 years of experience in import, export, and business consultancy.'
				/>
			</Head>

			<div className='min-h-screen bg-gray-50'>
				{/* Hero Section */}
				<section className='bg-gradient-to-br from-blue-900 to-slate-800 text-white pt-24 pb-20'>
					<div className='container-custom text-center'>
						<h1 className='text-5xl md:text-6xl font-bold mb-6 text-gradient'>
							About GL-B GROUP
						</h1>
						<div className='w-32 h-1 bg-primary-600 mx-auto rounded-full mb-8'></div>
						<p className='text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
							Your trusted partner in international trade, connecting businesses
							across borders since 2014.
						</p>
					</div>
				</section>

				{/* Company Story */}
				<section className='section-padding bg-white'>
					<div className='container-custom'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-16 items-center'>
							<div className='space-y-8'>
								<div>
									<h2 className='text-4xl font-bold text-gray-800 mb-6'>
										Our Story
									</h2>
									<div className='w-24 h-1 bg-primary-600 rounded-full'></div>
								</div>

								<div className='space-y-6 text-gray-600 leading-relaxed'>
									<p className='text-lg'>
										At{' '}
										<span className='text-primary-300 font-semibold'>
											GL-B GROUP SARL
										</span>
										, our journey began in Bamako, Mali, with a simple yet
										powerful vision: to bridge the gap between local businesses
										and global markets.
									</p>

									<p>
										Founded as a small business with big dreams, we have grown
										into a trusted international trade partner, specializing in
										the import of high-quality food products, modern
										electronics, and industrial machinery, while also
										facilitating the export of premium commodities including
										gold, cotton, and agricultural products.
									</p>

									<p>
										Our commitment goes beyond mere transactions. We believe in
										building lasting relationships with our clients,
										understanding their unique needs, and providing tailored
										solutions that drive their success in the global
										marketplace.
									</p>
								</div>
							</div>

							<div className='relative'>
								<div className='relative h-96 rounded-2xl overflow-hidden shadow-xl'>
									<Image
										src='/images/banner/Container.jpeg'
										alt='GL-B Group Operations'
										fill
										sizes='(min-width: 1024px) 50vw, 100vw'
										className='object-cover'
									/>
									<div className='absolute inset-0 bg-gradient-to-t from-black/30 to-transparent'></div>
								</div>

								{/* Floating Stats */}
								<div className='absolute -bottom-8 -left-8 bg-white rounded-xl shadow-lg p-6'>
									<div className='text-center'>
										<div className='text-3xl font-bold text-primary-600 mb-1'>
											10+
										</div>
										<div className='text-sm text-gray-600'>
											Years Experience
										</div>
									</div>
								</div>

								<div className='absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-6'>
									<div className='text-center'>
										<div className='text-3xl font-bold text-primary-300 mb-1'>
											50+
										</div>
										<div className='text-sm text-gray-600'>
											Countries Served
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Mission & Vision */}
				<section className='section-padding bg-gray-100'>
					<div className='container-custom'>
						<div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
							{/* Mission */}
							<div className='bg-white rounded-2xl p-8 shadow-lg'>
								<div className='w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6'>
									<svg
										className='w-8 h-8 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z'
										/>
									</svg>
								</div>
								<h3 className='text-2xl font-bold text-gray-800 mb-4'>
									Our Mission
								</h3>
								<p className='text-gray-600 leading-relaxed'>
									To provide exceptional international trade services that
									empower businesses to thrive in the global marketplace, while
									maintaining the highest standards of quality, integrity, and
									customer satisfaction.
								</p>
							</div>

							{/* Vision */}
							<div className='bg-white rounded-2xl p-8 shadow-lg'>
								<div className='w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6'>
									<svg
										className='w-8 h-8 text-white'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
										/>
									</svg>
								</div>
								<h3 className='text-2xl font-bold text-gray-800 mb-4'>
									Our Vision
								</h3>
								<p className='text-gray-600 leading-relaxed'>
									To become the leading international trade facilitator in West
									Africa, recognized for our expertise, reliability, and
									commitment to connecting businesses across continents.
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Values */}
				<section className='section-padding bg-white'>
					<div className='container-custom'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
								Our Values
							</h2>
							<div className='w-24 h-1 bg-primary-600 mx-auto rounded-full'></div>
							<p className='text-gray-600 text-lg mt-6 max-w-2xl mx-auto'>
								The principles that guide everything we do
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
							<div className='text-center group'>
								<div className='w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300'>
									<svg
										className='w-10 h-10 text-primary-600'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
										/>
									</svg>
								</div>
								<h3 className='text-xl font-bold text-gray-800 mb-4'>
									Integrity
								</h3>
								<p className='text-gray-600'>
									We conduct business with the highest ethical standards and
									transparency
								</p>
							</div>

							<div className='text-center group'>
								<div className='w-20 h-20 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary-200 transition-colors duration-300'>
									<svg
										className='w-10 h-10 text-primary-600'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
										/>
									</svg>
								</div>
								<h3 className='text-xl font-bold text-gray-800 mb-4'>
									Excellence
								</h3>
								<p className='text-gray-600'>
									We strive for excellence in every aspect of our service
									delivery
								</p>
							</div>

							<div className='text-center group'>
								<div className='w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 transition-colors duration-300'>
									<svg
										className='w-10 h-10 text-green-600'
										fill='none'
										stroke='currentColor'
										viewBox='0 0 24 24'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											strokeWidth={2}
											d='M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
										/>
									</svg>
								</div>
								<h3 className='text-xl font-bold text-gray-800 mb-4'>
									Partnership
								</h3>
								<p className='text-gray-600'>
									We build long-lasting relationships based on trust and mutual
									success
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Team Section */}
				<section className='section-padding bg-gray-100'>
					<div className='container-custom'>
						<div className='text-center mb-16'>
							<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
								Meet Our Team
							</h2>
							<div className='w-24 h-1 bg-primary-600 mx-auto rounded-full'></div>
							<p className='text-gray-600 text-lg mt-6 max-w-2xl mx-auto'>
								The dedicated professionals behind our success
							</p>
						</div>

						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{teamData.map((member, index) => (
								<Team key={index} member={member} />
							))}
						</div>
					</div>
				</section>

				{/* CTA Section */}
				<section className='bg-primary-700 text-white py-20'>
					<div className='container-custom text-center'>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Ready to Work With Us?
						</h2>
						<p className='text-xl mb-8 max-w-2xl mx-auto'>
							Join hundreds of satisfied clients who trust GL-B GROUP for their
							international trade needs.
						</p>
						<Link
							className='inline-block bg-white text-primary-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105'
							href='/contact'
						>
							Start Your Journey
						</Link>
					</div>
				</section>
			</div>
		</>
	)
}

export default About
