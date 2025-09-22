const ServicesCard = ({ title, icon, desc }) => {
	return (
		<div className='group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border border-gray-100 hover:border-primary-200 transform hover:-translate-y-2'>
			{/* Icon Container */}
			<div className='mb-6 flex justify-center'>
				<div className='icon-large group-hover:scale-110 transition-transform duration-300 shadow-lg'>
					{icon}
				</div>
			</div>

			{/* Content */}
			<div className='space-y-4'>
				<h3 className='text-xl font-bold text-gray-800 group-hover:text-primary-600 transition-colors duration-300'>
					{title}
				</h3>
				<p className='text-gray-600 leading-relaxed text-sm'>{desc}</p>
			</div>

			{/* Decorative bottom accent */}
			<div className='mt-6 accent-line mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
		</div>
	)
}

export default ServicesCard
