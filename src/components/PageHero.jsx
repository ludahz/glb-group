import { useEffect, useState } from 'react'
import Link from 'next/link'

const PageHero = ({
	title,
	subtitle,
	description,
	breadcrumbs = [],
	variant = 'default', // 'default', 'gradient', 'particles'
}) => {
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
	}, [])

	// Background variants
	const getBackgroundClass = () => {
		switch (variant) {
			case 'gradient':
				return 'bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600'
			case 'particles':
				return 'bg-gradient-to-br from-primary-800 to-primary-600 relative overflow-hidden'
			default:
				return 'bg-gradient-to-br from-primary-800 to-primary-600'
		}
	}

	// Animated particles for particles variant
	const renderParticles = () => {
		if (variant !== 'particles' || !mounted) return null

		return (
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{/* Floating geometric shapes */}
				<div className='absolute top-1/4 left-1/4 w-2 h-2 bg-white/20 rounded-full animate-pulse'></div>
				<div
					className='absolute top-1/3 right-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping'
					style={{ animationDelay: '1s' }}
				></div>
				<div
					className='absolute bottom-1/3 left-1/3 w-3 h-3 bg-white/10 rounded-full animate-pulse'
					style={{ animationDelay: '2s' }}
				></div>
				<div
					className='absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-white/25 rounded-full animate-ping'
					style={{ animationDelay: '0.5s' }}
				></div>
				<div
					className='absolute bottom-1/4 right-1/5 w-2.5 h-2.5 bg-white/15 rounded-full animate-pulse'
					style={{ animationDelay: '1.5s' }}
				></div>

				{/* Larger floating elements */}
				<div
					className='absolute top-20 right-10 w-20 h-20 border border-white/10 rounded-full animate-spin'
					style={{ animationDuration: '20s' }}
				></div>
				<div
					className='absolute bottom-20 left-10 w-16 h-16 border border-white/10 rounded-full animate-spin'
					style={{ animationDuration: '15s', animationDirection: 'reverse' }}
				></div>

				{/* Gradient orbs */}
				<div
					className='absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-white/5 to-transparent rounded-full blur-xl animate-pulse'
					style={{ animationDelay: '3s' }}
				></div>
				<div
					className='absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-xl animate-pulse'
					style={{ animationDelay: '1s' }}
				></div>
			</div>
		)
	}

	return (
		<section
			className={`${getBackgroundClass()} text-white pt-28 pb-24 relative`}
		>
			{renderParticles()}

			{/* Content */}
			<div className='container-custom relative z-10'>
				{/* Breadcrumbs */}
				{breadcrumbs.length > 0 && (
					<nav className='mb-8 opacity-90'>
						<ol className='flex items-center space-x-2 text-sm'>
							<li>
								<Link
									href='/'
									className='text-white/80 hover:text-white transition-colors'
								>
									Home
								</Link>
							</li>
							{breadcrumbs.map((crumb, index) => (
								<li key={index} className='flex items-center space-x-2'>
									<span className='text-white/60'>/</span>
									{crumb.href ? (
										<Link
											href={crumb.href}
											className='text-white/80 hover:text-white transition-colors'
										>
											{crumb.label}
										</Link>
									) : (
										<span className='text-white/60'>{crumb.label}</span>
									)}
								</li>
							))}
						</ol>
					</nav>
				)}

				{/* Main Content */}
				<div className='text-center max-w-5xl mx-auto'>
					{/* Subtitle */}
					{subtitle && (
						<div
							className='mb-6 animate-fade-in-up'
							style={{ animationDelay: '0.2s' }}
						>
							<span className='inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20'>
								{subtitle}
							</span>
						</div>
					)}

					{/* Title */}
					<h1
						className='text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-white animate-fade-in-up'
						style={{ animationDelay: '0.4s' }}
					>
						<span className='bg-gradient-to-r from-white via-white to-white/90 bg-clip-text text-transparent drop-shadow-[0_4px_12px_rgba(0,0,0,0.3)]'>
							{title}
						</span>
					</h1>

					{/* Decorative line with animation */}
					<div
						className='flex justify-center mb-8 animate-fade-in-up'
						style={{ animationDelay: '0.6s' }}
					>
						<div className='relative'>
							<div className='w-24 h-1 bg-white/30 rounded-full'></div>
							<div className='absolute top-0 left-0 w-24 h-1 bg-gradient-to-r from-white/60 to-white/90 rounded-full animate-pulse'></div>
						</div>
					</div>

					{/* Description */}
					{description && (
						<p
							className='text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed font-light animate-fade-in-up'
							style={{ animationDelay: '0.8s' }}
						>
							{description}
						</p>
					)}
				</div>
			</div>
		</section>
	)
}

export default PageHero
