import Head from 'next/head'
import { useState } from 'react'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'
import {
	IoLocationOutline,
	IoCallOutline,
	IoMailOutline,
	IoTimeOutline,
} from 'react-icons/io5'
import {
	FaFacebookF,
	FaTwitter,
	FaLinkedinIn,
	FaInstagram,
} from 'react-icons/fa'

const Contact = () => {
	const router = useRouter()
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		subject: '',
		message: '',
	})
	const [isSubmitting, setIsSubmitting] = useState(false)
	const [submitStatus, setSubmitStatus] = useState('')

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
			// You can configure EmailJS here or use your preferred form handling service
			// await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData, 'YOUR_USER_ID')

			// For now, we'll simulate a successful submission
			setTimeout(() => {
				setSubmitStatus('success')
				setIsSubmitting(false)
				setFormData({
					name: '',
					email: '',
					phone: '',
					company: '',
					subject: '',
					message: '',
				})
				// Redirect to success page after 2 seconds
				setTimeout(() => {
					router.push('/messageSent')
				}, 2000)
			}, 1000)
		} catch (error) {
			console.error('Error sending message:', error)
			setSubmitStatus('error')
			setIsSubmitting(false)
		}
	}

	return (
		<>
			<Head>
				<title>Contact Us - GL-B GROUP SARL</title>
				<meta
					name='description'
					content="Get in touch with GL-B GROUP SARL for all your international trade needs. We're here to help you expand your business globally."
				/>
			</Head>

			<div className='min-h-screen bg-gray-50'>
				{/* Hero Section */}
				<section className='bg-gradient-to-br from-blue-900 to-slate-800 text-white pt-24 pb-20'>
					<div className='container-custom text-center'>
						<h1 className='text-5xl md:text-6xl font-bold mb-6 text-gradient'>
							Contact Us
						</h1>
						<div className='w-32 h-1 bg-primary-600 mx-auto rounded-full mb-8'></div>
						<p className='text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
							Ready to take your business global? Get in touch with our expert
							team today.
						</p>
					</div>
				</section>

				{/* Contact Information Cards */}
				<section className='py-16 bg-white'>
					<div className='container-custom'>
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
							<div className='text-center group'>
								<div className='w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<IoLocationOutline className='text-white text-2xl' />
								</div>
								<h3 className='text-lg font-bold text-gray-800 mb-2'>
									Address
								</h3>
								<p className='text-gray-600 text-sm'>
									Sotuba ACI
									<br />
									Bamako, Mali
								</p>
							</div>

							<div className='text-center group'>
								<div className='w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<IoCallOutline className='text-white text-2xl' />
								</div>
								<h3 className='text-lg font-bold text-gray-800 mb-2'>Phone</h3>
								<p className='text-gray-600 text-sm'>+223 75 45 00 86</p>
							</div>

							<div className='text-center group'>
								<div className='w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<IoMailOutline className='text-white text-2xl' />
								</div>
								<h3 className='text-lg font-bold text-gray-800 mb-2'>Email</h3>
								<p className='text-gray-600 text-sm'>info@glbgroup10.com</p>
							</div>

							<div className='text-center group'>
								<div className='w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<IoTimeOutline className='text-white text-2xl' />
								</div>
								<h3 className='text-lg font-bold text-gray-800 mb-2'>
									Business Hours
								</h3>
								<p className='text-gray-600 text-sm'>
									Mon - Fri: 8:00 - 18:00
									<br />
									Sat: 8:00 - 14:00
								</p>
							</div>
						</div>
					</div>
				</section>

				{/* Main Contact Section */}
				<section className='section-padding'>
					<div className='container-custom'>
						<div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
							{/* Contact Form */}
							<div>
								<div className='mb-8'>
									<h2 className='text-3xl font-bold text-gray-800 mb-4'>
										Send us a Message
									</h2>
									<p className='text-gray-600'>
										Fill out the form below and we&apos;ll get back to you as
										soon as possible.
									</p>
								</div>

								<form onSubmit={handleSubmit} className='space-y-6'>
									<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
										<div>
											<label
												htmlFor='name'
												className='block text-gray-700 font-semibold mb-2'
											>
												Name *
											</label>
											<input
												type='text'
												id='name'
												name='name'
												value={formData.name}
												onChange={handleChange}
												required
												className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
												placeholder='Your full name'
											/>
										</div>

										<div>
											<label
												htmlFor='email'
												className='block text-gray-700 font-semibold mb-2'
											>
												Email *
											</label>
											<input
												type='email'
												id='email'
												name='email'
												value={formData.email}
												onChange={handleChange}
												required
												className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
												placeholder='your@email.com'
											/>
										</div>
									</div>

									<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
										<div>
											<label
												htmlFor='phone'
												className='block text-gray-700 font-semibold mb-2'
											>
												Phone
											</label>
											<input
												type='tel'
												id='phone'
												name='phone'
												value={formData.phone}
												onChange={handleChange}
												className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
												placeholder='+1 (555) 123-4567'
											/>
										</div>

										<div>
											<label
												htmlFor='company'
												className='block text-gray-700 font-semibold mb-2'
											>
												Company
											</label>
											<input
												type='text'
												id='company'
												name='company'
												value={formData.company}
												onChange={handleChange}
												className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
												placeholder='Your company name'
											/>
										</div>
									</div>

									<div>
										<label
											htmlFor='subject'
											className='block text-gray-700 font-semibold mb-2'
										>
											Subject *
										</label>
										<input
											type='text'
											id='subject'
											name='subject'
											value={formData.subject}
											onChange={handleChange}
											required
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200'
											placeholder='What can we help you with?'
										/>
									</div>

									<div>
										<label
											htmlFor='message'
											className='block text-gray-700 font-semibold mb-2'
										>
											Message *
										</label>
										<textarea
											id='message'
											name='message'
											value={formData.message}
											onChange={handleChange}
											required
											rows='6'
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 resize-vertical'
											placeholder='Tell us more about your project or inquiry...'
										></textarea>
									</div>

									{submitStatus === 'success' && (
										<div className='bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg'>
											Thank you! Your message has been sent successfully.
											We&apos;ll get back to you soon.
										</div>
									)}

									{submitStatus === 'error' && (
										<div className='bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg'>
											Sorry, there was an error sending your message. Please try
											again.
										</div>
									)}

									<button
										type='submit'
										disabled={isSubmitting}
										className={`w-full py-4 px-8 rounded-lg font-bold text-white transition-all duration-200 ${
											isSubmitting
												? 'bg-gray-400 cursor-not-allowed'
												: 'bg-primary-600 hover:bg-primary-700 transform hover:scale-105'
										}`}
									>
										{isSubmitting ? 'Sending...' : 'Send Message'}
									</button>
								</form>
							</div>

							{/* Contact Information */}
							<div className='space-y-8'>
								<div>
									<h2 className='text-3xl font-bold text-gray-800 mb-6'>
										Get in Touch
									</h2>
									<p className='text-gray-600 text-lg leading-relaxed mb-8'>
										We&apos;re here to help you succeed in international trade.
										Whether you&apos;re looking to import, export, or need
										business consultancy, our team of experts is ready to assist
										you.
									</p>
								</div>

								{/* Office Hours */}
								<div className='bg-gray-100 rounded-2xl p-8'>
									<h3 className='text-xl font-bold text-gray-800 mb-4'>
										Office Hours
									</h3>
									<div className='space-y-2 text-gray-600'>
										<div className='flex justify-between'>
											<span>Monday - Friday:</span>
											<span className='font-semibold'>8:00 AM - 6:00 PM</span>
										</div>
										<div className='flex justify-between'>
											<span>Saturday:</span>
											<span className='font-semibold'>8:00 AM - 2:00 PM</span>
										</div>
										<div className='flex justify-between'>
											<span>Sunday:</span>
											<span className='font-semibold'>Closed</span>
										</div>
									</div>
								</div>

								{/* Social Media */}
								<div>
									<h3 className='text-xl font-bold text-gray-800 mb-4'>
										Follow Us
									</h3>
									<div className='flex space-x-4'>
										<div className='w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-colors cursor-pointer'>
											<FaFacebookF />
										</div>
										<div className='w-12 h-12 bg-sky-500 rounded-full flex items-center justify-center text-white hover:bg-sky-600 transition-colors cursor-pointer'>
											<FaTwitter />
										</div>
										<div className='w-12 h-12 bg-blue-700 rounded-full flex items-center justify-center text-white hover:bg-blue-800 transition-colors cursor-pointer'>
											<FaLinkedinIn />
										</div>
										<div className='w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors cursor-pointer'>
											<FaInstagram />
										</div>
									</div>
								</div>

								{/* Emergency Contact */}
								<div className='bg-primary-700 rounded-2xl p-8 text-white'>
									<h3 className='text-xl font-bold mb-4'>
										Need Urgent Assistance?
									</h3>
									<p className='mb-4'>
										For urgent trade matters or time-sensitive inquiries,
										contact us directly:
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

				{/* Map Section Placeholder */}
				<section className='bg-gray-200 py-16'>
					<div className='container-custom text-center'>
						<h2 className='text-3xl font-bold text-gray-800 mb-4'>
							Visit Our Office
						</h2>
						<p className='text-gray-600 mb-8'>
							Located in the heart of Bamako, Mali
						</p>
						<div className='bg-gray-300 h-64 rounded-2xl flex items-center justify-center'>
							<p className='text-gray-600 text-lg'>
								Interactive Map Coming Soon
							</p>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export default Contact
