import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import PageHero from '../components/PageHero'
import {
	foodItems,
	machinery,
	electronics,
	exports as exportGoods,
	hygiene,
} from '../data/products'

// Build product categories from data exports
const productCategories = [
	{
		id: 'food',
		name: 'Food Items',
		description: 'High-quality food products sourced from around the world',
		items: foodItems,
		bgColor: 'from-primary-600 to-primary-700',
	},
	{
		id: 'machinery',
		name: 'Machinery',
		description:
			'Industrial and agricultural machinery for various applications',
		items: machinery,
		bgColor: 'from-primary-600 to-primary-700',
	},
	{
		id: 'hygiene',
		name: 'Hygiene & Baby Care',
		description: 'Everyday essentials including sanitary pads and baby diapers',
		items: hygiene,
		bgColor: 'from-primary-600 to-primary-700',
	},
	{
		id: 'electronics',
		name: 'Electronics',
		description: 'Modern electronics and technology products',
		items: electronics,
		bgColor: 'from-primary-600 to-primary-700',
	},
	{
		id: 'exports',
		name: 'Export Products',
		description:
			'Premium export quality products including gold, cotton, and agricultural goods',
		items: exportGoods,
		bgColor: 'from-primary-600 to-primary-700',
	},
]

function ProductCard({ product }) {
	return (
		<div className='group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl ring-1 ring-gray-200 hover:ring-primary-200 transition-all duration-300 transform hover:-translate-y-1'>
			<div className='aspect-[4/3] relative overflow-hidden bg-gray-50'>
				<Image
					src={product.img}
					alt={
						product.description
							? `${product.title} — ${product.description}`
							: product.title
					}
					title={product.title}
					fill
					sizes='(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw'
					className='object-contain p-2 md:p-3 group-hover:scale-105 transition-transform duration-300'
				/>
				<div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
			</div>
			<div className='p-3 md:p-4 lg:p-6'>
				<h3 className='text-base md:text-lg lg:text-xl font-semibold md:font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2'>
					{product.title}
				</h3>
				{product.description && (
					<p className='text-gray-600 mt-1 md:mt-2 text-xs md:text-sm leading-relaxed line-clamp-3'>
						{product.description}
					</p>
				)}
			</div>
		</div>
	)
}

export default function Products() {
	const [activeCategory, setActiveCategory] = useState(0)
	const [searchTerm, setSearchTerm] = useState('')

	const filteredProducts = productCategories[activeCategory].items.filter(
		(item) => {
			const term = searchTerm.trim().toLowerCase()
			if (!term) return true
			return (
				item.title.toLowerCase().includes(term) ||
				(item.description
					? item.description.toLowerCase().includes(term)
					: false)
			)
		}
	)

	return (
		<>
			<Head>
				<title>Products - GLB Group</title>
				<meta
					name='description'
					content='Explore our comprehensive range of high-quality products including food items, machinery, electronics, hygiene, and export goods.'
				/>
			</Head>

			<div className='min-h-screen bg-gray-50'>
				<PageHero
					title='Our Products'
					subtitle='Discover our comprehensive range of quality products'
					backgroundImage='/images/banner/Container.jpeg'
				/>

				{/* Search and Filter Section */}
				<section className='py-6 md:py-8 bg-white shadow-sm'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='max-w-md mx-auto mb-6'>
							<div className='relative'>
								<input
									type='text'
									placeholder='Search products...'
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className='w-full px-5 py-3 pl-12 border-2 border-primary-800/70 rounded-full bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-primary-700 focus:border-primary-700 text-base transition-colors'
								/>
								<div className='absolute left-4 top-1/2 -translate-y-1/2 text-primary-800/70'>
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
											d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
										/>
									</svg>
								</div>
							</div>
						</div>

						{/* Category Tabs */}
						<div className='flex flex-wrap justify-center gap-2 md:gap-3'>
							{productCategories.map((category, index) => (
								<button
									key={category.id}
									onClick={() => setActiveCategory(index)}
									className={`px-3 md:px-4 lg:px-5 py-2 md:py-2.5 rounded-full font-medium text-xs md:text-sm transition-all ${
										activeCategory === index
											? 'bg-primary-600 text-white shadow'
											: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
									}`}
								>
									{category.name}
								</button>
							))}
						</div>
					</div>
				</section>

				{/* Products Grid */}
				<section className='py-6 md:py-10'>
					<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='text-center mb-6 md:mb-10'>
							<div
								className={`inline-block px-5 md:px-6 py-2.5 md:py-3 rounded-2xl bg-gradient-to-br ${productCategories[activeCategory].bgColor} text-white`}
							>
								<h2 className='text-lg md:text-2xl font-bold'>
									{productCategories[activeCategory].name}
								</h2>
							</div>
							<p className='text-gray-600 text-sm md:text-base max-w-2xl mx-auto mt-3'>
								{productCategories[activeCategory].description}
							</p>
						</div>

						{filteredProducts.length > 0 ? (
							<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6'>
								{filteredProducts.map((product) => (
									<ProductCard key={product.id} product={product} />
								))}
							</div>
						) : (
							<div className='text-center py-12'>
								<div className='text-gray-400 text-5xl mb-3'>🔍</div>
								<h3 className='text-xl font-semibold text-gray-700 mb-1'>
									No products found
								</h3>
								<p className='text-gray-500 text-sm'>
									Try adjusting your search terms
								</p>
							</div>
						)}

						<div className='text-center mt-10'>
							<Link
								href='/contact'
								className='inline-block bg-primary-600 text-white px-5 md:px-6 py-2.5 md:py-3 rounded-lg text-sm md:text-base font-semibold hover:bg-primary-700 transition-colors'
							>
								Get In Touch
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	)
}
