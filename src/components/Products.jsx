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
		bgColor: 'from-green-500 to-emerald-600',
	},
	{
		id: 'machinery',
		name: 'Machinery',
		description:
			'Industrial and agricultural machinery for various applications',
		items: machinery,
		bgColor: 'from-blue-500 to-indigo-600',
	},
	{
		id: 'electronics',
		name: 'Electronics',
		description: 'Modern electronics and technology products',
		items: electronics,
		bgColor: 'from-purple-500 to-pink-600',
	},
	{
		id: 'hygiene',
		name: 'Hygiene & Baby Care',
		description: 'Everyday essentials including sanitary pads and baby diapers',
		items: hygiene,
		bgColor: 'from-rose-500 to-pink-600',
	},
	{
		id: 'exports',
		name: 'Exports',
		description: 'Premium commodities for international markets',
		items: exportItems,
		bgColor: 'from-amber-500 to-yellow-600',
	},
]

const Products = () => {
	const [activeCategory, setActiveCategory] = useState(0)

	return (
		<section id='products' className='section-padding bg-white scroll-mt-24'>
			<div className='container-custom'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
						Our Products
					</h2>
					<div className='w-24 h-1 bg-primary-600 mx-auto rounded-full'></div>
					<p className='text-gray-600 text-lg mt-6 max-w-2xl mx-auto'>
						Discover our wide range of quality products across different
						categories
					</p>
				</div>

				{/* Category Tabs */}
				<div className='flex flex-wrap justify-center gap-3 md:gap-4 mb-12'>
					{productCategories.map((category, index) => {
						const count = category.items?.length ?? 0
						const isActive = activeCategory === index
						return (
							<button
								key={category.id}
								onClick={() => setActiveCategory(index)}
								className={`px-5 md:px-6 py-2.5 md:py-3 rounded-full font-semibold transition-all duration-300 focus:outline-none focus-visible:ring-2 ${
									isActive
										? 'bg-primary-600 text-white shadow-lg ring-2 ring-primary-300/60'
										: 'bg-gray-100 text-gray-700 hover:bg-gray-200 ring-1 ring-gray-200'
								}`}
								aria-pressed={isActive}
							>
								<span className='inline-flex items-center gap-2'>
									{category.name}
									<span
										className={`${
											isActive
												? 'bg-white/20 text-white'
												: 'bg-white text-gray-700'
										} text-xs font-semibold px-2 py-0.5 rounded-full border ${
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

				{/* Active Category Content */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8 items-center'>
					{/* Category Description */}
					<div className='lg:col-span-1 space-y-6'>
						<div
							className={`p-8 rounded-2xl bg-gradient-to-br ${productCategories[activeCategory].bgColor} text-white`}
						>
							<h3 className='text-2xl font-bold mb-4'>
								{productCategories[activeCategory].name}
							</h3>
							<p className='text-lg opacity-90 leading-relaxed'>
								{productCategories[activeCategory].description}
							</p>
							<div className='mt-6'>
								<Link
									href={`/products/${productCategories[activeCategory].id}`}
									className='bg-white bg-opacity-20 backdrop-blur-sm border border-white border-opacity-30 text-white px-6 py-3 rounded-lg hover:bg-opacity-30 transition-all duration-300'
								>
									View All Products
								</Link>
							</div>
						</div>
					</div>

					{/* Product Grid */}
					<div className='lg:col-span-2'>
						<div className='grid grid-cols-2 md:grid-cols-3 gap-5 md:gap-6'>
							{[
								...new Map(
									productCategories[activeCategory].items.map((it) => [
										it.id ?? `${it.title}-${it.img}`,
										it,
									])
								).values(),
							]
								.slice(0, 3)
								.map((item, index) => (
									<div
										key={item.id ?? `${item.title}-${index}`}
										className='group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl ring-1 ring-gray-200 hover:ring-primary-200 transition-all duration-300 transform hover:-translate-y-2'
									>
										<div className='aspect-square relative overflow-hidden'>
											<Image
												src={item.img}
												alt={item.title}
												title={item.title}
												fill
												sizes='(max-width: 767px) 50vw, (min-width: 768px) 33vw, 33vw'
												className='object-contain bg-white group-hover:scale-110 transition-transform duration-300'
											/>
											<div className='absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-all duration-300'></div>
										</div>
										<div className='p-4'>
											<h4 className='font-semibold text-gray-800 text-center group-hover:text-primary-600 transition-colors duration-300'>
												{item.title}
											</h4>
										</div>
									</div>
								))}
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Products
