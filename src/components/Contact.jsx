import { useState, useEffect } from 'react'
import {
	IoLocationOutline,
	IoCallOutline,
	IoMailOutline,
	IoTimeOutline,
} from 'react-icons/io5'
import { sendEmail, mapFormDataToTemplate, initEmailJS } from '../utils/emailjs'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState('')

	useEffect(() => {
		// Initialize EmailJS when component mounts
		initEmailJS()
	}, [])

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = async (e) => {
		e.preventDefault()
		setIsSubmitting(true)
		setSubmitStatus('')

		try {
			const templateParams = mapFormDataToTemplate(formData)
			const result = await sendEmail(templateParams)

			if (result.success) {
				setSubmitStatus('success')
				setFormData({ name: '', email: '', subject: '', message: '' })
				// Auto-hide success message after 30 seconds
				setTimeout(() => setSubmitStatus(''), 30000)
			} else {
				setSubmitStatus('error')
				setTimeout(() => setSubmitStatus(''), 30000)
			}
		} catch (error) {
			console.error('Error sending message:', error)
			setSubmitStatus('error')
			setTimeout(() => setSubmitStatus(''), 30000)
		} finally {
			setIsSubmitting(false)
		}
	}

	return (
		<section
			id='contact'
			className='section-padding bg-gradient-to-br from-primary-800 to-primary-600 text-white'
		>
			<div className='container-custom'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
						Contact Us
					</h2>
					<div className='w-24 h-1 bg-white mx-auto rounded-full'></div>
					<p className='text-white text-opacity-90 text-lg mt-6 max-w-2xl mx-auto'>
						Get in touch with us for any inquiries or business opportunities
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
					{/* Contact Form */}
					<div>
						<div className='mb-8'>
							<h3 className='text-3xl font-bold text-white mb-4'>
								Send us a Message
							</h3>
							<p className='text-white text-opacity-90'>
								Fill out the form below and we&apos;ll get back to you as soon
								as possible.
							</p>
						</div>{' '}
						{/* Status Messages */}
						{submitStatus === 'success' && (
							<div className='bg-green-500 bg-opacity-20 border border-green-400 text-green-200 px-4 py-3 rounded-lg mb-6 backdrop-blur-sm'>
								<p className='font-semibold'>✅ Message sent successfully!</p>
								<p className='text-sm'>We&apos;ll get back to you soon.</p>
							</div>
						)}{' '}
						{submitStatus === 'error' && (
							<div className='bg-red-500 bg-opacity-20 border border-red-400 text-red-200 px-4 py-3 rounded-lg mb-6 backdrop-blur-sm'>
								<p className='font-semibold'>🚫 Oops! Something went wrong</p>
								<p className='text-sm mb-3'>
									We couldn&apos;t send your message right now. Don&apos;t
									worry, we still want to hear from you!
								</p>
								<p className='text-xs'>
									Please try again, or reach out to us directly at{' '}
									<a
										href='mailto:glbgroup10@gmail.com?subject=Contact%20Inquiry&body=Hello%20GL-B%20GROUP%20SARL,%0A%0A'
										className='font-semibold text-white hover:text-red-100 underline transition-colors duration-200'
										title='Click to open your email client'
									>
										glbgroup10@gmail.com
									</a>
									📧
								</p>
							</div>
						)}{' '}
						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-white font-semibold mb-2'
									>
										Name *
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										placeholder='Your full name'
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-900 bg-white'
										required
									/>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-white font-semibold mb-2'
									>
										Email *
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										placeholder='your@email.com'
										className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-900 bg-white'
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='subject'
									className='block text-white font-semibold mb-2'
								>
									Subject *
								</label>
								<input
									type='text'
									id='subject'
									name='subject'
									value={formData.subject}
									onChange={handleChange}
									placeholder='What can we help you with?'
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-900 bg-white'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-white font-semibold mb-2'
								>
									Message *
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									rows='6'
									placeholder='Tell us more about your project or inquiry...'
									className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 resize-vertical text-gray-900 bg-white'
									required
								></textarea>
							</div>

							<button
								type='submit'
								disabled={isSubmitting}
								className={`w-full py-4 px-8 rounded-lg font-bold text-white transition-all duration-200 ${
									isSubmitting
										? 'bg-gray-400 cursor-not-allowed'
										: 'bg-primary-600 hover:bg-primary-700 transform hover:scale-105'
								}`}
							>
								{isSubmitting ? (
									<span className='flex items-center justify-center'>
										<svg
											className='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
											xmlns='http://www.w3.org/2000/svg'
											fill='none'
											viewBox='0 0 24 24'
										>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'
											></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
											></path>
										</svg>
										Sending...
									</span>
								) : (
									'Send Message'
								)}
							</button>
						</form>
					</div>

					{/* Contact Information */}
					<div className='space-y-8'>
						<div>
							<h3 className='text-3xl font-bold text-white mb-6'>
								Get in Touch
							</h3>
							<p className='text-white text-opacity-90 text-lg leading-relaxed mb-8'>
								We&apos;re here to help you succeed in international trade.
								Whether you&apos;re looking to import, export, or need business
								consultancy, our team of experts is ready to assist you.
							</p>
						</div>
						{/* Contact Details */}
						<div className='bg-white bg-opacity-10 rounded-2xl p-8 backdrop-blur-sm border border-white border-opacity-20'>
							<h4 className='text-xl font-bold text-white mb-6'>
								Contact Details
							</h4>

							{/* Contact Info Grid */}
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
								{/* Address */}
								<div>
									<div className='flex items-center space-x-3 mb-2'>
										<IoLocationOutline className='text-white text-lg flex-shrink-0' />
										<span className='text-white font-semibold'>Address</span>
									</div>
									<p className='text-white text-opacity-90 ml-6'>
										Sotuba ACI
										<br />
										Bamako, Mali
									</p>
								</div>

								{/* Phone */}
								<div>
									<div className='flex items-center space-x-3 mb-2'>
										<IoCallOutline className='text-white text-lg flex-shrink-0' />
										<span className='text-white font-semibold'>Phone</span>
									</div>
									<p className='text-white text-opacity-90 ml-6'>
										+223 75 45 00 86
									</p>
								</div>

								{/* Email */}
								<div>
									<div className='flex items-center space-x-3 mb-2'>
										<IoMailOutline className='text-white text-lg flex-shrink-0' />
										<span className='text-white font-semibold'>Email</span>
									</div>
									<p className='text-white text-opacity-90 ml-6'>
										<a
											href='mailto:glbgroup10@gmail.com'
											className='hover:text-white hover:text-opacity-100 transition-colors duration-200'
										>
											glbgroup10@gmail.com
										</a>
									</p>
								</div>

								{/* Business Hours */}
								<div>
									<div className='flex items-center space-x-3 mb-2'>
										<IoTimeOutline className='text-white text-lg flex-shrink-0' />
										<span className='text-white font-semibold'>
											Business Hours
										</span>
									</div>
									<div className='space-y-1 text-white text-opacity-90 ml-6 text-sm'>
										<div className='flex justify-between'>
											<span>Mon - Fri:</span>
											<span className='font-semibold'>8:00 - 18:00</span>
										</div>
										<div className='flex justify-between'>
											<span>Saturday:</span>
											<span className='font-semibold'>8:00 - 14:00</span>
										</div>
										<div className='flex justify-between'>
											<span>Sunday:</span>
											<span className='font-semibold'>Closed</span>
										</div>
									</div>
								</div>
							</div>
						</div>{' '}
						{/* Emergency Contact */}
						<div className='bg-white bg-opacity-10 rounded-2xl p-8 text-white backdrop-blur-sm border border-white border-opacity-20'>
							<h4 className='text-xl font-bold mb-4'>
								Need Urgent Assistance?
							</h4>
							<p className='mb-4 text-white text-opacity-90'>
								For urgent trade matters or time-sensitive inquiries, contact us
								directly:
							</p>
							<div className='flex items-center space-x-2'>
								<IoCallOutline className='text-2xl' />
								<span className='font-semibold'>+223 75 45 00 86</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
