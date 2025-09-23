import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import {
	foodItems,
	machinery,
	electronics,
	exports as exportItems,
	hygiene,
} from '../../data/products'
import PageHero from '../../components/PageHero'

const categories = {
	food: {
		name: 'Food Items',
		description: 'High-quality food products sourced from around the world',
		items: foodItems,
		bgColor: 'from-primary-600 to-primary-700',
	},
	machinery: {
		name: 'Machinery',
		description:
			'Industrial and agricultural machinery for various applications',
		items: machinery,
		bgColor: 'from-primary-600 to-primary-700',
	},
	electronics: {
		name: 'Electronics',
		description: 'Modern electronics and technology products',
		items: electronics,
		bgColor: 'from-primary-600 to-primary-700',
	},
	hygiene: {
		name: 'Hygiene & Baby Care',
		description: 'Everyday essentials including sanitary pads and baby diapers',
		items: hygiene,
		bgColor: 'from-primary-600 to-primary-700',
	},
	exports: {
		name: 'Exports',
		description: 'Premium commodities for international markets',
		items: exportItems,
		bgColor: 'from-primary-600 to-primary-700',
	},
}

export default function CategoryPage({ id, data }) {
	const { name, description, items, bgColor } = data
	const uniqueItems = [
		...new Map(
			items.map((it) => [it.id ?? `${it.title}-${it.img}`, it])
		).values(),
	]

	return (
		<>
			<Head>
				<title>{name} - GL-B GROUP SARL</title>
				<meta name='description' content={description} />
			</Head>

			<div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100'>
				<PageHero
					title={name}
					subtitle='Product Category'
					description={description}
					variant='gradient'
					breadcrumbs={[
						{ label: 'Products', href: '/products' },
						{ label: name },
					]}
				/>

				{/* Products Grid */}
				<section className='section-padding'>
					<div className='container-custom'>
						<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
							{uniqueItems.map((item, index) => (
								<div
									key={item.id ?? `${item.title}-${index}`}
									className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2'
									style={{ animationDelay: `${index * 100}ms` }}
								>
									<div className='aspect-square relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100'>
										<Image
											src={item.img}
											alt={
												item.description
													? `${item.title} — ${item.description}`
													: item.title
											}
											title={item.title}
											fill
											sizes='(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
											className='object-contain p-4 group-hover:scale-110 transition-transform duration-500'
										/>

										{/* Overlay on hover */}
										<div className='absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>

										{/* Product description overlay */}
										{item.description && (
											<div className='absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
												<p className='text-sm font-medium'>
													{item.description}
												</p>
											</div>
										)}
									</div>

									<div className='p-6'>
										<h4 className='font-bold text-lg text-gray-800 text-center group-hover:text-primary-600 transition-colors duration-300 mb-2'>
											{item.title}
										</h4>

										{/* Category badge */}
										<div className='flex justify-center'>
											<span className='inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full'>
												{name}
											</span>
										</div>
									</div>

									{/* Subtle glow effect */}
									<div className='absolute inset-0 rounded-2xl ring-1 ring-gray-200 group-hover:ring-primary-300 transition-colors duration-300'></div>
								</div>
							))}
						</div>

						{/* Enhanced Navigation */}
						<div className='mt-16 flex flex-col sm:flex-row gap-4 justify-center'>
							<Link
								href='/#products'
								className='btn-primary flex items-center justify-center gap-2'
							>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M7 16l-4-4m0 0l4-4m-4 4h18'
									/>
								</svg>
								Back to Products
							</Link>
							<Link
								href='/contact'
								className='btn-secondary flex items-center justify-center gap-2'
							>
								<svg
									className='w-5 h-5'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z'
									/>
								</svg>
								Inquire About Products
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}

export async function getStaticPaths() {
	return {
		paths: Object.keys(categories).map((id) => ({ params: { category: id } })),
		fallback: false,
	}
}

export async function getStaticProps({ params }) {
	const id = params.category
	const data = categories[id] || null
	if (!data) {
		return { notFound: true }
	}
	return {
		props: { id, data },
	}
}
