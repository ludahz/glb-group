import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import {
	foodItems,
	machinery,
	electronics,
	exports as exportItems,
	hygiene,
} from '../data/products'

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
		id: 'electronics',
		name: 'Electronics',
		description: 'Modern electronics and technology products',
		items: electronics,
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
		id: 'exports',
		name: 'Exports',
		description: 'Premium commodities for international markets',
		items: exportItems,
		bgColor: 'from-primary-600 to-primary-700',
	},
]

const Products = () => {
	const [activeCategory, setActiveCategory] = useState(0)

	return (
		<section id='products' className='section-padding bg-white scroll-mt-24'>
			<div className='container-custom'>
				<div className='text-center mb-12 md:mb-16'>
					<h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4'>
						Our Products
					</h2>
					<div className='w-20 h-1 bg-primary-600 mx-auto rounded-full'></div>
					<p className='text-gray-600 text-base md:text-lg mt-4 md:mt-6 max-w-2xl mx-auto px-4'>
						Discover our wide range of quality products across different
						categories
					</p>
				</div>

				{/* Category Tabs - Responsive Design */}
				<div className='flex flex-wrap justify-center gap-2 md:gap-3 mb-8 md:mb-12 px-4'>
					{productCategories.map((category, index) => {
						const count = category.items?.length ?? 0
						const isActive = activeCategory === index
						return (
							<button
								key={category.id}
								onClick={() => setActiveCategory(index)}
								className={`px-3 md:px-4 lg:px-6 py-2 md:py-2.5 lg:py-3 rounded-full font-medium md:font-semibold text-sm md:text-base transition-all duration-300 focus:outline-none focus-visible:ring-2 ${
									isActive
										? 'bg-primary-600 text-white shadow-lg ring-2 ring-primary-300/60'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200 ring-1 ring-gray-200'
								}`}
								aria-pressed={isActive}
							>
								<span className='inline-flex items-center gap-1.5 md:gap-2'>
									<span className='truncate'>{category.name}</span>
									<span
										className={`${
											isActive
												? 'bg-white/20 text-white'
												: 'bg-white text-gray-700'
										} text-xs font-semibold px-1.5 md:px-2 py-0.5 rounded-full border ${
											isActive ? 'border-white/30' : 'border-gray-200'
										}`}
									>
										{count}
									</span>
								</span>
							</button>
						)
					})}
				</div>

				{/* Active Category Content - Improved Layout */}
				<div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 items-start'>
					{/* Category Description - Reduced width on large screens to widen cards */}
					<div className='lg:col-span-1 space-y-6'>
						<div
							className={`p-6 md:p-8 rounded-2xl bg-gradient-to-br ${productCategories[activeCategory].bgColor} text-white`}
						>
							<h3 className='text-xl md:text-2xl font-bold mb-3 md:mb-4'>
								{productCategories[activeCategory].name}
							</h3>
							<p className='text-base md:text-lg opacity-90 leading-relaxed'>
								{productCategories[activeCategory].description}
							</p>
							<div className='mt-4 md:mt-6'>
								<Link
									href={`/products/${productCategories[activeCategory].id}`}
									className='inline-block bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-4 md:px-6 py-2.5 md:py-3 rounded-lg hover:bg-opacity-30 transition-all duration-300 text-sm md:text-base font-medium'
								>
									View All Products
								</Link>
							</div>
						</div>
					</div>

					{/* Product Grid - Improved responsive layout */}
					<div className='lg:col-span-3'>
						<div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-3 md:gap-4 lg:gap-5'>
							{[
								...new Map(
									productCategories[activeCategory].items.map((it) => [
										it.id ?? `${it.title}-${it.img}`,
										it,
									])
								).values(),
							]
								.slice(0, 3) // Show 3 items as requested
								.map((item, index) => (
									<div
										key={item.id ?? `${item.title}-${index}`}
										className='group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl ring-1 ring-gray-200 hover:ring-primary-200 transition-all duration-300 transform hover:-translate-y-1'
									>
										<div className='aspect-square relative overflow-hidden bg-gray-50'>
											<Image
												src={item.img}
												alt={item.title}
												title={item.title}
												fill
												sizes='(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, (max-width: 1280px) 33vw, 25vw'
												className='object-contain p-2 md:p-3 group-hover:scale-105 transition-transform duration-300'
											/>
											<div className='absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300'></div>
										</div>
										<div className='p-2 md:p-3 lg:p-4'>
											<h4 className='font-medium md:font-semibold text-gray-800 text-center text-xs md:text-sm lg:text-base group-hover:text-primary-600 transition-colors duration-300 line-clamp-2'>
												{item.title}
											</h4>
										</div>
									</div>
								))}
						</div>

						{/* Show more items link */}
						<div className='mt-6 md:mt-8 text-center'>
							<Link
								href={`/products/${productCategories[activeCategory].id}`}
								className='inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium text-sm md:text-base transition-colors duration-300'
							>
								<span>View all {productCategories[activeCategory].name}</span>
								<svg
									className='w-4 h-4'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M9 5l7 7-7 7'
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Products
