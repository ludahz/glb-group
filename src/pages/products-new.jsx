import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { foodItems, machinery, hygiene } from '../data/products'

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
		id: 'hygiene',
		name: 'Hygiene & Baby Care',
		description: 'Everyday essentials including sanitary pads and baby diapers',
		items: hygiene,
		bgColor: 'from-rose-500 to-pink-600',
	},
	{
		id: 'electronics',
		name: 'Electronics',
		description: 'Modern electronics and technology products',
		items: [
			{
				id: 1,
				title: 'Laptops',
				img: '/images/product/laptops.jpeg',
				description: 'Portable computers for work and study',
			},
			{
				id: 2,
				title: 'Mobile Devices',
				img: '/images/product/mobile.jpeg',
				description: 'Smartphones and tablets from leading brands',
			},
			{
				id: 3,
				title: 'Kitchen Appliances',
				img: '/images/product/kitchen-appliances.jpeg',
				description: 'Everyday kitchen appliances like blenders and cookers',
			},
			{
				id: 4,
				title: 'Home Theater',
				img: '/images/product/home-theater.jpeg',
				description: 'Televisions, speakers, and home audio systems',
			},
			{
				id: 5,
				title: 'Accessories',
				img: '/images/product/accessories.jpeg',
				description: 'Chargers, cables, and essential tech accessories',
			},
		],
		bgColor: 'from-purple-500 to-pink-600',
	},
	{
		id: 'exports',
		name: 'Export Products',
		description:
			'Premium export quality products including gold, cotton, and agricultural goods',
		items: [
			{
				id: 1,
				title: 'Gold',
				img: '/images/product/gold.jpeg',
				description: 'Refined gold suitable for international export',
			},
			{
				id: 2,
				title: 'Cotton',
				img: '/images/product/cotton.jpeg',
				description: 'Raw and processed cotton bales for textiles',
			},
			{
				id: 3,
				title: 'Dried Hibiscus',
				img: '/images/product/dried-hibiscus.jpg',
				description: 'Premium dried hibiscus petals for beverages and teas',
			},
		],
		bgColor: 'from-yellow-500 to-orange-600',
	},
]

const ProductCard = ({ product }) => (
	<div className='group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2'>
		<div className='aspect-square relative overflow-hidden'>
			<Image
				src={product.img}
				alt={
					product.description
						? `${product.title} — ${product.description}`
						: product.title
				}
				title={product.title}
				fill
				sizes='(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw'
				className='object-contain bg-white group-hover:scale-110 transition-transform duration-300'
			/>
			<div className='absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
			<div className='absolute bottom-4 left-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100'>
				<button className='bg-white text-gray-800 px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors'>
					View Details
				</button>
			</div>
		</div>
		<div className='p-6'>
			<h3 className='text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300'>
				{product.title}
			</h3>
			{product.description && (
				<p className='text-gray-600 mt-2 text-sm leading-relaxed'>
					{product.description}
				</p>
			)}
		</div>
	</div>
)

const Products = () => {
	const [activeCategory, setActiveCategory] = useState(0)
	const [searchTerm, setSearchTerm] = useState('')

	const filteredProducts = productCategories[activeCategory].items.filter(
		(item) => item.title.toLowerCase().includes(searchTerm.toLowerCase())
	)

	return (
		<>
			<Head>
				<title>Products - GL-B GROUP SARL</title>
				<meta
					name='description'
					content='Explore our comprehensive range of high-quality products including food items, machinery, electronics, and export goods.'
				/>
			</Head>

			<div className='min-h-screen bg-gray-50'>
				{/* Hero Section */}
				<section className='bg-gradient-to-br from-blue-900 to-slate-800 text-white pt-24 pb-20'>
					<div className='container-custom text-center'>
						<h1 className='text-5xl md:text-6xl font-bold mb-6 text-gradient'>
							Our Products
						</h1>
						<div className='w-32 h-1 bg-primary-600 mx-auto rounded-full mb-8'></div>
						<p className='text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed'>
							Discover our comprehensive range of high-quality products spanning
							food items, industrial machinery, modern electronics, and premium
							export goods.
						</p>
					</div>
				</section>

				{/* Search and Filter Section */}
				<section className='py-12 bg-white shadow-sm'>
					<div className='container-custom'>
						{/* Search Bar */}
						<div className='max-w-md mx-auto mb-8'>
							<div className='relative'>
								<input
									type='text'
									placeholder='Search products...'
									value={searchTerm}
									onChange={(e) => setSearchTerm(e.target.value)}
									className='w-full px-6 py-3 pl-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
								/>
								<div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
									<svg
										className='w-5 h-5 text-gray-400'
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
						<div className='flex flex-wrap justify-center gap-4'>
							{productCategories.map((category, index) => (
								<button
									key={category.id}
									onClick={() => setActiveCategory(index)}
									className={`px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
										activeCategory === index
											? 'bg-primary-600 text-white shadow-lg transform scale-105'
											: 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:scale-105'
									}`}
								>
									{category.name}
								</button>
							))}
						</div>
					</div>
				</section>

				{/* Products Section */}
				<section className='section-padding'>
					<div className='container-custom'>
						{/* Category Header */}
						<div className='text-center mb-16'>
							<div
								className={`inline-block px-8 py-4 rounded-2xl bg-gradient-to-br ${productCategories[activeCategory].bgColor} text-white mb-6`}
							>
								<h2 className='text-3xl font-bold'>
									{productCategories[activeCategory].name}
								</h2>
							</div>
							<p className='text-gray-600 text-lg max-w-2xl mx-auto'>
								{productCategories[activeCategory].description}
							</p>
						</div>

						{/* Products Grid */}
						{filteredProducts.length > 0 ? (
							<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
								{filteredProducts.map((product, index) => (
									<ProductCard key={product.id || index} product={product} />
								))}
							</div>
						) : (
							<div className='text-center py-16'>
								<div className='text-gray-400 text-6xl mb-4'>🔍</div>
								<h3 className='text-2xl font-bold text-gray-600 mb-2'>
									No products found
								</h3>
								<p className='text-gray-500'>Try adjusting your search terms</p>
							</div>
						)}
					</div>
				</section>

				{/* CTA Section */}
				<section className='bg-primary-700 text-white py-20'>
					<div className='container-custom text-center'>
						<h2 className='text-3xl md:text-4xl font-bold mb-6'>
							Interested in Our Products?
						</h2>
						<p className='text-xl mb-8 max-w-2xl mx-auto'>
							Contact us today to learn more about our products and how we can
							serve your business needs.
						</p>
						<Link
							className='inline-block bg-white text-primary-600 font-bold px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors duration-200 transform hover:scale-105'
							href='/contact'
						>
							Get In Touch
						</Link>
					</div>
				</section>
			</div>
		</>
	)
}

export default Products
