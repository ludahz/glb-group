import Image from 'next/image'

const Team = ({ member }) => {
	return (
		<div className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2'>
			{/* Header */}
			<div className='h-24 bg-gradient-to-r from-primary-600 to-secondary-500'></div>

			{/* Avatar */}
			<div className='-mt-16 flex justify-center'>
				<div className='relative w-32 h-32 rounded-full ring-4 ring-white shadow-lg overflow-hidden bg-gray-100'>
					<Image
						src={member.img}
						alt={member.name}
						fill
						className='object-cover'
					/>
				</div>
			</div>

			{/* Content */}
			<div className='p-6 pt-4 text-center'>
				<h4 className='text-xl font-bold text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-300'>
					{member.name}
				</h4>
				<h6 className='text-primary-600 font-semibold mb-3'>{member.title}</h6>
				<p className='text-gray-600 text-sm leading-relaxed'>{member.desc}</p>

				{/* Social links placeholder */}
				<div className='flex justify-center space-x-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
					<div className='w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors cursor-pointer'>
						<span className='text-xs'>in</span>
					</div>
					<div className='w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors cursor-pointer'>
						<span className='text-xs'>@</span>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Team
