import { useRouter } from 'next/router'

const AboutUs = () => {
	const router = useRouter()

	return (
		<section className='section-padding bg-gradient-to-br from-blue-900 to-slate-800 text-white'>
			<div className='container-custom'>
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
					{/* Content */}
					<div className='space-y-8'>
						<div>
							<h2 className='text-4xl md:text-5xl font-bold mb-6 text-gradient'>
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
								<div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center'>
									<div className='text-3xl font-bold text-primary-300 mb-2'>
										10+
									</div>
									<div className='text-sm text-gray-300'>Years Experience</div>
								</div>
								<div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center'>
									<div className='text-3xl font-bold text-primary-300 mb-2'>
										500+
									</div>
									<div className='text-sm text-gray-300'>Happy Clients</div>
								</div>
							</div>
							<div className='space-y-4 mt-8'>
								<div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center'>
									<div className='text-3xl font-bold text-primary-300 mb-2'>
										50+
									</div>
									<div className='text-sm text-gray-300'>Countries Served</div>
								</div>
								<div className='bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 text-center'>
									<div className='text-3xl font-bold text-primary-300 mb-2'>
										24/7
									</div>
									<div className='text-sm text-gray-300'>Support</div>
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
