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

const categories = {
	food: {
		name: 'Food Items',
		description: 'High-quality food products sourced from around the world',
		items: foodItems,
		bgColor: 'from-green-500 to-emerald-600',
	},
	machinery: {
		name: 'Machinery',
		description:
			'Industrial and agricultural machinery for various applications',
		items: machinery,
		bgColor: 'from-blue-500 to-indigo-600',
	},
	electronics: {
		name: 'Electronics',
		description: 'Modern electronics and technology products',
		items: electronics,
		bgColor: 'from-purple-500 to-pink-600',
	},
	hygiene: {
		name: 'Hygiene & Baby Care',
		description: 'Everyday essentials including sanitary pads and baby diapers',
		items: hygiene,
		bgColor: 'from-rose-500 to-pink-600',
	},
	exports: {
		name: 'Exports',
		description: 'Premium commodities for international markets',
		items: exportItems,
		bgColor: 'from-amber-500 to-yellow-600',
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

			<div className='min-h-screen bg-gray-50'>
				<section className='section-padding'>
					<div className='container-custom'>
						{/* Breadcrumbs */}
						<nav className='text-sm text-gray-500 mb-4' aria-label='Breadcrumb'>
							<ol className='list-none p-0 inline-flex space-x-2'>
								<li>
									<Link href='/' className='hover:text-primary-600'>
										Home
									</Link>
								</li>
								<li>/</li>
								<li>
									<Link href='/#products' className='hover:text-primary-600'>
										Products
									</Link>
								</li>
								<li>/</li>
								<li className='text-gray-700'>{name}</li>
							</ol>
						</nav>
						<div
							className={`p-8 rounded-2xl bg-gradient-to-br ${bgColor} text-white mb-10`}
						>
							<h1 className='text-3xl md:text-4xl font-bold mb-3'>{name}</h1>
							<p className='opacity-90'>{description}</p>
						</div>

						<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
							{uniqueItems.map((item, index) => (
								<div
									key={item.id ?? `${item.title}-${index}`}
									className='group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300'
								>
									<div className='aspect-square relative overflow-hidden'>
										<Image
											src={item.img}
											alt={
												item.description
													? `${item.title} — ${item.description}`
													: item.title
											}
											title={item.title}
											fill
											sizes='(min-width: 1280px) 25vw, (min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw'
											className='object-contain bg-white group-hover:scale-110 transition-transform duration-300'
										/>
									</div>
									<div className='p-4'>
										<h4 className='font-semibold text-gray-800 text-center group-hover:text-primary-600 transition-colors duration-300'>
											{item.title}
										</h4>
									</div>
								</div>
							))}
						</div>

						<div className='mt-10 flex gap-3'>
							<Link href='/' className='btn-secondary'>
								Back to Home
							</Link>
							<Link href='/#products' className='btn-primary'>
								Back to Products
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
