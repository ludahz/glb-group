import ServicesCard from './ServicesCard'
import { AiOutlineImport } from 'react-icons/ai'
import { GrServices } from 'react-icons/gr'
import { MdOutlineFlag } from 'react-icons/md'

const servicesData = [
	{
		icon: <AiOutlineImport size='3rem' />,
		title: 'IMPORT',
		desc: 'We import food, electronics, and machinery from global markets to meet local demand.',
	},
	{
		icon: <MdOutlineFlag size='3rem' />,
		title: 'EXPORT (Planned)',
		desc: 'We are preparing to expand into exports in the future. For now, our focus is domestic market and imports.',
	},
	{
		icon: <GrServices size='3rem' />,
		title: 'OTHER SERVICES',
		desc: 'Business consultancy, trade facilitation, and comprehensive support services.',
	},
]

const Services = () => {
	return (
		<section className='section-padding bg-gray-100'>
			<div className='container-custom'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
						What We Do
					</h2>
					<div className='accent-line mx-auto'></div>
					<p className='text-gray-600 text-lg mt-6 max-w-2xl mx-auto'>
						Your trusted partner in international trade and business development
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{servicesData.map((item, i) => (
						<ServicesCard
							key={i}
							icon={item.icon}
							title={item.title}
							desc={item.desc}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Services
