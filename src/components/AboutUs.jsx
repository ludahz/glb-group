import { useRouter } from 'next/router'

const AboutUs = () => {
	const router = useRouter()

	// Dynamic experience since company start (2019)
	const startYear = 2019
	const currentYear = new Date().getFullYear()
	const yearsExperience = Math.max(1, currentYear - startYear)

	return (
		<section className='section-padding bg-gradient-to-br from-primary-800 to-primary-600 text-white'>
			<div className='container-custom'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Content */}
					<div className='space-y-8'>
						<div>
							<h2 className='text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]'>
								About Us
							</h2>
							<div className='w-24 h-1 bg-primary-600 rounded-full'></div>
						</div>

						<div className='space-y-6 text-gray-200 leading-relaxed'>
							<p className='text-lg'>
								At{' '}
								<span className='text-primary-300 font-semibold'>
									GL-B GROUP SARL
								</span>
								, our aim is to offer you services that show you that we really
								care! Not only have we got the trendiest products, but we can
								also guarantee that they are of the finest quality.
							</p>

							<p>
								We started as a small business in Bamako, Mali, and our aim is
								to continue providing our customers with products that keep them
								happy, at prices that keep them happy.
							</p>

							<p>
								Our customers are our top priority and through our products we
								work hard towards building long-lasting and meaningful relations
								with them.
							</p>
						</div>

						<button
							onClick={() => router.push('/about')}
							className='btn-primary transform hover:scale-105 transition-transform duration-200'
						>
							MORE ABOUT US
						</button>
					</div>

					{/* Visual Elements */}
					<div className='relative'>
						<div className='grid grid-cols-2 gap-4'>
							<div className='space-y-4'>
								{/* Years Experience (dynamic) */}
								<div className='bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center ring-1 ring-white/15 transition-colors'>
									<div className='flex justify-center mb-2'>
										{/* Clock icon */}
										<svg
											className='w-6 h-6 text-primary-300'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
										>
											<circle cx='12' cy='12' r='9' />
											<path d='M12 7v5l3 3' />
										</svg>
									</div>
									<div
										className='text-3xl md:text-4xl font-extrabold text-primary-300 mb-1'
										aria-label={`Years of experience: ${yearsExperience}+`}
									>
										{yearsExperience}+
									</div>
									<div className='text-sm text-gray-200/90'>
										Years Experience
									</div>
								</div>

								{/* Happy Clients */}
								<div className='bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center ring-1 ring-white/15 transition-colors'>
									<div className='flex justify-center mb-2'>
										{/* Users icon */}
										<svg
											className='w-6 h-6 text-primary-300'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
										>
											<path d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2' />
											<circle cx='9' cy='7' r='4' />
											<path d='M22 21v-2a4 4 0 0 0-3-3.87' />
											<path d='M16 3.13a4 4 0 0 1 0 7.75' />
										</svg>
									</div>
									<div className='text-3xl md:text-4xl font-extrabold text-primary-300 mb-1'>
										500+
									</div>
									<div className='text-sm text-gray-200/90'>Happy Clients</div>
								</div>
							</div>
							<div className='space-y-4 mt-8'>
								{/* Primary Market (reflects no exports yet) */}
								<div className='bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center ring-1 ring-white/15 transition-colors'>
									<div className='flex justify-center mb-2'>
										{/* Map pin icon */}
										<svg
											className='w-6 h-6 text-primary-300'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
										>
											<path d='M12 21s-6-4.35-6-10a6 6 0 1 1 12 0c0 5.65-6 10-6 10z' />
											<circle cx='12' cy='11' r='2' />
										</svg>
									</div>
									<div className='text-xl md:text-2xl font-extrabold text-primary-300 mb-1'>
										Mali
									</div>
									<div className='text-sm text-gray-200/90'>Primary Market</div>
								</div>

								{/* Support */}
								<div className='bg-white/10 hover:bg-white/15 backdrop-blur-sm rounded-2xl p-6 text-center ring-1 ring-white/15 transition-colors'>
									<div className='flex justify-center mb-2'>
										{/* Headset icon */}
										<svg
											className='w-6 h-6 text-primary-300'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
										>
											<path d='M3 18v-6a9 9 0 1 1 18 0v6' />
											<path d='M21 19a2 2 0 0 1-2 2h-3' />
											<path d='M3 19a2 2 0 0 0 2 2h3' />
											<path d='M7 13v6' />
											<path d='M17 13v6' />
										</svg>
									</div>
									<div className='text-3xl md:text-4xl font-extrabold text-primary-300 mb-1'>
										24/7
									</div>
									<div className='text-sm text-gray-200/90'>Support</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default AboutUs
