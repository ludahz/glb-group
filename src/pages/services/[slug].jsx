import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { services } from '../../data/services'
import {
	FaGlobe,
	FaPassport,
	FaChalkboardTeacher,
	FaHandshake,
} from 'react-icons/fa'

const iconMap = {
	globe: FaGlobe,
	passport: FaPassport,
	chalkboard: FaChalkboardTeacher,
	handshake: FaHandshake,
}

export default function ServiceDetail({ service }) {
	if (!service) return null
	const Icon = iconMap[service.icon] ?? FaGlobe
	return (
		<>
			<Head>
				<title>{service.title} - GL-B GROUP SARL</title>
				<meta name='description' content={service.description} />
			</Head>
			<div className='min-h-screen bg-gray-50'>
				{/* Hero */}
				<section className='bg-gradient-to-br from-primary-800 to-primary-600 text-white py-16'>
					<div className='container-custom'>
						<nav className='text-sm text-primary-100 mb-4'>
							<Link href='/' className='hover:underline'>
								Home
							</Link>
							<span className='mx-2'>/</span>
							<Link href='/services' className='hover:underline'>
								Services
							</Link>
							<span className='mx-2'>/</span>
							<span className='text-white/90'>{service.title}</span>
						</nav>
						<div className='flex items-center gap-4'>
							<div className='w-14 h-14 rounded-full bg-white/15 flex items-center justify-center'>
								<Icon size='1.75rem' />
							</div>
							<h1 className='text-3xl md:text-5xl font-bold'>
								{service.title}
							</h1>
						</div>
					</div>
				</section>

				{/* Content */}
				<section className='section-padding'>
					<div className='container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
						<div className='space-y-6'>
							<p className='text-lg text-gray-700 leading-relaxed'>
								{service.description}
							</p>
							{service.longDescription && (
								<p className='text-base text-gray-700 leading-relaxed'>
									{service.longDescription}
								</p>
							)}
							<ul className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
								{service.features.map((f, i) => (
									<li key={i} className='flex items-center gap-2'>
										<span className='w-2 h-2 bg-primary-600 rounded-full' />
										<span className='text-gray-800 font-medium'>{f}</span>
									</li>
								))}
							</ul>
							{service.topics?.length > 0 && (
								<div>
									<h3 className='text-xl font-bold text-gray-900 mt-4 mb-2'>
										Key Topics Covered
									</h3>
									<ul className='list-disc pl-6 text-gray-700 space-y-1'>
										{service.topics.map((t, i) => (
											<li key={i}>{t}</li>
										))}
									</ul>
								</div>
							)}
							<div className='pt-2 flex gap-3'>
								<Link href='/contact' className='btn-primary'>
									Get Started
								</Link>
								<Link href='/services' className='btn-secondary'>
									Back to Services
								</Link>
							</div>
						</div>
						<div className='w-full'>
							<div className='relative w-full h-72 sm:h-96 rounded-2xl overflow-hidden shadow-xl'>
								<Image
									src={service.image}
									alt={service.title}
									fill
									className='object-cover'
								/>
								<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent' />
							</div>
						</div>
					</div>
				</section>

				{/* Highlights */}
				{service.highlights?.length > 0 && (
					<section className='py-10'>
						<div className='container-custom grid grid-cols-1 md:grid-cols-3 gap-6'>
							{service.highlights.map((h, i) => (
								<div
									key={i}
									className='bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-6'
								>
									<p className='text-gray-800 font-semibold'>{h}</p>
								</div>
							))}
						</div>
					</section>
				)}

				{/* Process Steps */}
				{service.steps?.length > 0 && (
					<section className='section-padding'>
						<div className='container-custom'>
							<h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>
								How We Work
							</h2>
							<ol className='grid grid-cols-1 md:grid-cols-4 gap-6'>
								{service.steps.map((step, i) => (
									<li
										key={i}
										className='bg-white rounded-xl shadow-sm ring-1 ring-gray-200 p-5'
									>
										<div className='w-8 h-8 rounded-full bg-primary-600 text-white flex items-center justify-center font-bold mb-3'>
											{i + 1}
										</div>
										<p className='text-gray-800 font-medium'>{step}</p>
									</li>
								))}
							</ol>
						</div>
					</section>
				)}

				{/* FAQs */}
				{service.faqs?.length > 0 && (
					<section className='pb-20'>
						<div className='container-custom'>
							<h2 className='text-2xl md:text-3xl font-bold text-gray-900 mb-6'>
								FAQs
							</h2>
							<div className='divide-y divide-gray-200 bg-white rounded-xl shadow-sm ring-1 ring-gray-200'>
								{service.faqs.map((qa, i) => (
									<div key={i} className='p-5'>
										<p className='font-semibold text-gray-900'>{qa.q}</p>
										<p className='text-gray-700 mt-1'>{qa.a}</p>
									</div>
								))}
							</div>
						</div>
					</section>
				)}
			</div>
		</>
	)
}

export async function getStaticPaths() {
	return {
		paths: services.map((s) => ({ params: { slug: s.slug } })),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const service = services.find((s) => s.slug === params.slug) || null
	return { props: { service } }
}
