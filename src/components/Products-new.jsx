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
				<div className='flex flex-wrap justify-center gap-4 mb-12'>
					{productCategories.map((category, index) => (
						<button
							key={category.id}
							onClick={() => setActiveCategory(index)}
							className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
								activeCategory === index
									? 'bg-primary-600 text-white shadow-lg'
									: 'bg-gray-100 text-gray-700 hover:bg-gray-200'
							}`}
						>
							{category.name}
						</button>
					))}
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
						<div className='grid grid-cols-2 md:grid-cols-3 gap-6'>
							{[
								...new Map(
									productCategories[activeCategory].items.map((it) => [
										it.id ?? `${it.title}-${it.img}`,
										it,
									])
								).values(),
							]
								.slice(0, 6)
								.map((item, index) => (
									<div
										key={item.id ?? `${item.title}-${index}`}
										className='group bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'
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
											<div className='absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300'></div>
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
