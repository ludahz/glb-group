import Head from 'next/head'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
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
import PageHero from '../components/PageHero'
import { sendEmail, mapFormDataToTemplate, initEmailJS } from '../utils/emailjs'

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
				setFormData({
					name: '',
					email: '',
					phone: '',
					company: '',
					subject: '',
					message: '',
				})
				// Auto-hide success message after 10 seconds
				setTimeout(() => setSubmitStatus(''), 10000)
				// Redirect to success page after 2 seconds
				setTimeout(() => {
					router.push('/messageSent')
				}, 2000)
			} else {
				setSubmitStatus('error')
				setTimeout(() => setSubmitStatus(''), 10000)
			}
		} catch (error) {
			console.error('Error sending message:', error)
			setSubmitStatus('error')
			setTimeout(() => setSubmitStatus(''), 10000)
		} finally {
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
				<PageHero
					title='Contact Us'
					subtitle='Get In Touch'
					description='Ready to take your business global? Get in touch with our expert team today.'
					variant='particles'
					breadcrumbs={[{ label: 'Contact' }]}
				/>

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
								<p className='text-gray-600 text-sm'>+22375450086</p>
							</div>

							<div className='text-center group'>
								<div className='w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300'>
									<IoMailOutline className='text-white text-2xl' />
								</div>
								<h3 className='text-lg font-bold text-gray-800 mb-2'>Email</h3>
								<p className='text-gray-600 text-sm'>
									<a
										href='mailto:glbgroup10@gmail.com'
										className='hover:text-primary-600'
									>
										glbgroup10@gmail.com
									</a>
								</p>
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
												className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-900 bg-white'
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
												className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-900 bg-white'
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
												className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-900 bg-white'
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
												className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-900 bg-white'
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
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 text-gray-900 bg-white'
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
											className='w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:border-transparent transition-all duration-200 resize-vertical text-gray-900 bg-white'
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
											<p className='font-semibold mb-2'>
												🚫 Oops! Something went wrong
											</p>
											<p className='mb-3'>
												We couldn&apos;t send your message right now. Don&apos;t
												worry, we still want to hear from you!
											</p>
											<p className='text-sm'>
												Please try again, or reach out to us directly at{' '}
												<a
													href='mailto:glbgroup10@gmail.com?subject=Contact%20Inquiry&body=Hello%20GL-B%20GROUP%20SARL,%0A%0A'
													className='font-semibold text-primary-600 hover:text-primary-800 underline transition-colors duration-200'
													title='Click to open your email client'
												>
													glbgroup10@gmail.com
												</a>
												📧
											</p>
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
										<div className='w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors cursor-pointer'>
											<FaFacebookF />
										</div>
										{/* <div className='w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white hover:bg-primary-600 transition-colors cursor-pointer'>
											<FaTwitter />
										</div>
										<div className='w-12 h-12 bg-primary-700 rounded-full flex items-center justify-center text-white hover:bg-primary-800 transition-colors cursor-pointer'>
											<FaLinkedinIn />
										</div>
										<div className='w-12 h-12 bg-secondary-600 rounded-full flex items-center justify-center text-white hover:bg-secondary-700 transition-colors cursor-pointer'>
											<FaInstagram />
										</div> */}
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
