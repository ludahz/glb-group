import Link from 'next/link'

const Footer = () => {
	return (
		<footer className='bg-gray-50 text-gray-800 py-12'>
			<div className='container-custom'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
					{/* Company Description */}
					<div className='space-y-4'>
						<h1 className='text-2xl font-bold text-primary-600 mb-4'>
							GL-B GROUP SARL
						</h1>
						<p className='text-gray-600 leading-relaxed max-w-md'>
							We strive to create the best experiences for our customers by
							providing quality products and exceptional service in
							international trade and business development.
						</p>
						<div className='flex space-x-4 mt-6'>
							{/* Social Media Icons - You can add actual social links here */}
							<div className='w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors cursor-pointer'>
								<span className='text-sm font-bold'>f</span>
							</div>
							<div className='w-10 h-10 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors cursor-pointer'>
								<span className='text-sm font-bold'>in</span>
							</div>
						</div>
					</div>

					{/* Quick Links */}
					<div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
						<div>
							<h2 className='text-lg font-semibold text-gray-800 mb-4'>
								Quick Links
							</h2>
							<ul className='space-y-2'>
								<li>
									<Link
										href='/products'
										className='text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm'
									>
										Products
									</Link>
								</li>
								<li>
									<Link
										href='/services'
										className='text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm'
									>
										Services
									</Link>
								</li>
								<li>
									<Link
										href='/about'
										className='text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm'
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										href='/contact'
										className='text-gray-600 hover:text-primary-600 transition-colors duration-200 text-sm'
									>
										Contact Us
									</Link>
								</li>
							</ul>
						</div>

						<div>
							<h2 className='text-lg font-semibold text-gray-800 mb-4'>
								Contact Info
							</h2>
							<div className='space-y-2 text-sm text-gray-600'>
								<p>
									📧{' '}
									<a
										href='mailto:glbgroup10@gmail.com'
										className='hover:text-primary-600'
									>
										glbgroup10@gmail.com
									</a>
								</p>
								<p>
									📞{' '}
									<a href='tel:+22375450086' className='hover:text-primary-600'>
										+22375450086
									</a>
								</p>
								<p>📍 sotuba aci, bamako mali</p>
							</div>
						</div>
					</div>
				</div>

				{/* Copyright */}
				<div className='border-t border-gray-200 mt-8 pt-6 text-center'>
					<p className='text-sm text-gray-500'>
						© {new Date().getFullYear()} GL-B GROUP SARL. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
