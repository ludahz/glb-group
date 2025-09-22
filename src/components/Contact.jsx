import { useState } from 'react'
import {
	IoLocationOutline,
	IoCallOutline,
	IoMailOutline,
} from 'react-icons/io5'

const Contact = () => {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		subject: '',
		message: '',
	})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		// Handle form submission here
		console.log('Form submitted:', formData)
		// Reset form
		setFormData({ name: '', email: '', subject: '', message: '' })
	}

	return (
		<section
			id='contact'
			className='section-padding relative'
			style={{
				backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.6) 35%, rgba(0, 0, 0, 0.7) 100%), url('/images/banner/World.jpeg')`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
				backgroundAttachment: 'fixed',
			}}
		>
			<div className='container-custom'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-white mb-4'>
						Contact Us
					</h2>
					<div className='w-24 h-1 bg-primary-600 mx-auto rounded-full'></div>
					<p className='text-gray-200 text-lg mt-6 max-w-2xl mx-auto'>
						Get in touch with us for any inquiries or business opportunities
					</p>
				</div>

				<div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
					{/* Contact Information */}
					<div className='space-y-8'>
						<div className='bg-black bg-opacity-60 backdrop-blur-sm rounded-2xl p-8'>
							<h3 className='text-2xl font-bold text-white mb-6'>
								Get In Touch
							</h3>

							<div className='space-y-6'>
								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0'>
										<IoLocationOutline className='text-white text-xl' />
									</div>
									<div>
										<h4 className='text-white font-semibold mb-1'>Address</h4>
										<p className='text-gray-300'>Sotuba ACI, Bamako, Mali</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0'>
										<IoCallOutline className='text-white text-xl' />
									</div>
									<div>
										<h4 className='text-white font-semibold mb-1'>Phone</h4>
										<p className='text-gray-300'>+22375450086</p>
									</div>
								</div>

								<div className='flex items-start space-x-4'>
									<div className='w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0'>
										<IoMailOutline className='text-white text-xl' />
									</div>
									<div>
										<h4 className='text-white font-semibold mb-1'>Email</h4>
										<p className='text-gray-300'>
											<a
												href='mailto:glbgroup10@gmail.com'
												className='hover:text-primary-300'
											>
												glbgroup10@gmail.com
											</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Contact Form */}
					<div className='bg-black bg-opacity-60 backdrop-blur-sm rounded-2xl p-8'>
						<h3 className='text-2xl font-bold text-white mb-6'>Send Message</h3>

						<form onSubmit={handleSubmit} className='space-y-6'>
							<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
								<div>
									<label
										htmlFor='name'
										className='block text-secondary-300 font-semibold mb-2'
									>
										Name
									</label>
									<input
										type='text'
										id='name'
										name='name'
										value={formData.name}
										onChange={handleChange}
										placeholder='Your Name'
										className='w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200'
										required
									/>
								</div>

								<div>
									<label
										htmlFor='email'
										className='block text-secondary-300 font-semibold mb-2'
									>
										Email
									</label>
									<input
										type='email'
										id='email'
										name='email'
										value={formData.email}
										onChange={handleChange}
										placeholder='email@example.com'
										className='w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200'
										required
									/>
								</div>
							</div>

							<div>
								<label
									htmlFor='subject'
									className='block text-secondary-300 font-semibold mb-2'
								>
									Subject
								</label>
								<input
									type='text'
									id='subject'
									name='subject'
									value={formData.subject}
									onChange={handleChange}
									placeholder='Subject'
									className='w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200'
									required
								/>
							</div>

							<div>
								<label
									htmlFor='message'
									className='block text-secondary-300 font-semibold mb-2'
								>
									Message
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									rows='4'
									placeholder='Your message...'
									className='w-full px-4 py-3 bg-white bg-opacity-10 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 transition-all duration-200 resize-vertical'
									required
								></textarea>
							</div>

							<button
								type='submit'
								className='w-full bg-primary-600 hover:bg-primary-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg'
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Contact
