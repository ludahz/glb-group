import Image from 'next/image'
import { useMemo, useState } from 'react'

const Team = ({ member }) => {
	const [expanded, setExpanded] = useState(false)

	// Initials fallback for avatar
	const initials = useMemo(() => {
		if (!member?.name) return ''
		return member.name
			.split(' ')
			.filter(Boolean)
			.slice(0, 2)
			.map((n) => n[0]?.toUpperCase())
			.join('')
	}, [member?.name])

	const hasSocial =
		member?.social && (member.social.linkedin || member.social.twitter)

	return (
		<article
			className='group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 will-change-transform max-w-xs sm:max-w-sm md:max-w-md mx-auto min-h-[26rem] md:min-h-[28rem]'
			aria-label={`Team member card for ${member?.name || 'team member'}`}
		>
			{/* Header */}
			<div
				className='h-28 md:h-32 bg-gradient-to-r from-primary-700 via-primary-600 to-secondary-500 relative'
				aria-hidden='true'
			>
				<div className='absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0)_60%)]' />
			</div>

			{/* Avatar */}
			<div className='-mt-24 md:-mt-28 flex justify-center'>
				<div className='relative w-40 h-40 md:w-48 md:h-48 rounded-full ring-4 ring-white shadow-lg overflow-hidden bg-gray-100'>
					{member?.img ? (
						<Image
							src={member.img}
							alt={member?.name || 'Team member'}
							fill
							className='object-cover object-[50%_18%] md:object-center'
						/>
					) : (
						<div className='w-full h-full flex items-center justify-center text-2xl font-semibold text-gray-600'>
							{initials}
						</div>
					)}
				</div>
			</div>

			{/* Content */}
			<div className='p-4 md:p-6 pt-3 md:pt-4 text-center'>
				<h4 className='text-lg md:text-xl font-bold tracking-tight text-gray-800 mb-1 group-hover:text-primary-600 transition-colors duration-300'>
					{member?.name}
				</h4>
				<h6 className='text-primary-600 font-semibold mb-2 md:mb-3 text-sm md:text-base'>
					{member?.title}
				</h6>

				{/* Description with clamp + toggle */}
				{member?.desc && (
					<p
						className={`text-gray-600 text-sm leading-relaxed ${
							expanded ? '' : 'line-clamp-3 md:line-clamp-4'
						}`}
					>
						{member.desc}
					</p>
				)}
				{member?.desc && member.desc.length > 180 && (
					<button
						onClick={() => setExpanded((s) => !s)}
						className='mt-2 text-primary-700 hover:text-primary-800 text-sm font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 rounded'
						aria-expanded={expanded}
					>
						{expanded ? 'Show less' : 'Read more'}
					</button>
				)}

				{/* Social links (optional) */}
				{hasSocial && (
					<div className='flex justify-center gap-3 mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
						{member.social.linkedin && (
							<a
								href={member.social.linkedin}
								target='_blank'
								rel='noopener noreferrer'
								className='w-9 h-9 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors'
								aria-label='LinkedIn profile'
							>
								{/* in */}
								<svg
									className='w-4 h-4'
									viewBox='0 0 24 24'
									fill='currentColor'
									aria-hidden='true'
								>
									<path d='M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0zM8.98 8.98H14v2.05h.08c.7-1.33 2.42-2.74 4.98-2.74 5.33 0 6.32 3.5 6.32 8.05V24h-5v-6.98c0-1.67-.03-3.82-2.33-3.82-2.33 0-2.69 1.82-2.69 3.7V24h-5z' />
								</svg>
							</a>
						)}
						{member.social.twitter && (
							<a
								href={member.social.twitter}
								target='_blank'
								rel='noopener noreferrer'
								className='w-9 h-9 bg-primary-600 rounded-full flex items-center justify-center text-white hover:bg-primary-700 transition-colors'
								aria-label='Twitter profile'
							>
								{/* @ */}
								<svg
									className='w-4 h-4'
									viewBox='0 0 24 24'
									fill='currentColor'
									aria-hidden='true'
								>
									<path d='M23.4 4.83a9.44 9.44 0 0 1-2.71.74 4.73 4.73 0 0 0 2.06-2.61 9.45 9.45 0 0 1-3 1.15 4.72 4.72 0 0 0-8.06 4.31A13.4 13.4 0 0 1 1.64 3.15a4.72 4.72 0 0 0 1.46 6.29 4.7 4.7 0 0 1-2.14-.59v.06a4.72 4.72 0 0 0 3.79 4.63 4.73 4.73 0 0 1-2.13.08 4.72 4.72 0 0 0 4.41 3.28A9.47 9.47 0 0 1 0 20.54 13.35 13.35 0 0 0 7.23 22.5c8.68 0 13.43-7.19 13.43-13.43 0-.21 0-.42-.02-.63a9.6 9.6 0 0 0 2.36-2.46z' />
								</svg>
							</a>
						)}
					</div>
				)}
			</div>
		</article>
	)
}

export default Team
