import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

/**
 * Enhanced Banner hero with modern animations and effects.
 * Props:
 * - variant?: 'classic' | 'diagonal' | 'mesh' | 'particles' (default 'classic')
 * Also supports runtime override via query param ?variant=diagonal|mesh|particles for demos.
 */
const Banner = ({ variant = 'classic' }) => {
	const router = useRouter()
	const [mode, setMode] = useState(variant)
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		if (!router?.isReady) return
		const qp = (router?.query?.variant?.toString() || '').toLowerCase()
		if (['classic', 'diagonal', 'mesh', 'particles'].includes(qp)) {
			setMode(qp)
		} else {
			setMode(variant)
		}
	}, [router?.isReady, router?.query?.variant, variant])

	// Use `mode` directly as the active variant

	// Animated particles for enhanced variants
	const renderParticles = () => {
		if (!mounted || (mode !== 'particles' && mode !== 'classic')) return null

		return (
			<div className='absolute inset-0 overflow-hidden pointer-events-none'>
				{/* Floating geometric shapes */}
				<div className='absolute top-1/4 left-1/4 w-3 h-3 bg-white/20 rounded-full animate-slow-pulse'></div>
				<div
					className='absolute top-1/3 right-1/4 w-2 h-2 bg-white/30 rounded-full animate-slow-ping'
					style={{ animationDelay: '1s' }}
				></div>
				<div
					className='absolute bottom-1/3 left-1/3 w-4 h-4 bg-white/15 rounded-full animate-slow-pulse'
					style={{ animationDelay: '2s' }}
				></div>
				<div
					className='absolute top-1/2 right-1/3 w-2.5 h-2.5 bg-white/25 rounded-full animate-slow-ping'
					style={{ animationDelay: '0.5s' }}
				></div>
				<div
					className='absolute bottom-1/4 right-1/5 w-3.5 h-3.5 bg-white/20 rounded-full animate-slow-pulse'
					style={{ animationDelay: '1.5s' }}
				></div>

				{/* Larger floating elements */}
				<div
					className='absolute top-20 right-16 w-24 h-24 border border-white/10 rounded-full animate-spin'
					style={{ animationDuration: '60s' }}
				></div>
				<div
					className='absolute bottom-20 left-16 w-20 h-20 border border-white/10 rounded-full animate-spin'
					style={{ animationDuration: '50s', animationDirection: 'reverse' }}
				></div>

				{/* Gradient orbs */}
				<div
					className='absolute top-1/4 right-1/4 w-40 h-40 bg-gradient-to-br from-white/8 to-transparent rounded-full blur-xl animate-slow-pulse'
					style={{ animationDelay: '3s' }}
				></div>
				<div
					className='absolute bottom-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-white/12 to-transparent rounded-full blur-xl animate-slow-pulse'
					style={{ animationDelay: '1s' }}
				></div>

				{/* Moving lines */}
				<div
					className='absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white/20 to-transparent opacity-30 animate-slow-pulse'
					style={{ animationDelay: '2s' }}
				></div>
				<div
					className='absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-white/15 to-transparent opacity-30 animate-slow-pulse'
					style={{ animationDelay: '4s' }}
				></div>
			</div>
		)
	}

	return (
		<section className='relative pt-16 md:pt-20'>
			<div
				className='relative min-h-[520px] md:min-h-[640px] flex items-center overflow-hidden'
				data-variant={mode}
			>
				{/* Variant backgrounds */}
				{mode === 'classic' && (
					<>
						<div
							className='absolute inset-0 -z-10 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600'
							aria-hidden='true'
						/>
						<div
							className='absolute inset-0 -z-10 opacity-[0.12]'
							style={{
								backgroundImage:
									'linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)',
								backgroundSize: '48px 48px, 48px 48px',
								backgroundPosition: '0 0, 0 0',
							}}
							aria-hidden='true'
						/>
						<div
							className='absolute -z-10 top-[-15%] left-1/2 -translate-x-1/2 h-[600px] w-[600px] rounded-full blur-3xl'
							style={{
								background:
									'radial-gradient(closest-side, rgba(255,255,255,0.12), rgba(255,255,255,0))',
							}}
							aria-hidden='true'
						/>
						<div className='pointer-events-none absolute inset-0 overflow-hidden'>
							<div
								className='absolute -left-10 top-16 h-56 w-56 rounded-full bg-secondary-500/30 blur-3xl animate-slow-pulse'
								style={{ animationDelay: '2s' }}
							/>
							<div
								className='absolute -right-10 bottom-16 h-48 w-48 rounded-full bg-primary-400/35 blur-3xl animate-slow-pulse'
								style={{ animationDelay: '4s' }}
							/>
							<div
								className='absolute top-1/3 left-1/4 h-32 w-32 rounded-full bg-white/10 blur-2xl animate-slow-pulse'
								style={{ animationDelay: '1s' }}
							/>
						</div>
						{renderParticles()}
					</>
				)}

				{mode === 'particles' && (
					<>
						<div
							className='absolute inset-0 -z-10 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600'
							aria-hidden='true'
						/>
						{renderParticles()}
						<div className='pointer-events-none absolute inset-0 overflow-hidden'>
							<div
								className='absolute -left-16 top-20 h-64 w-64 rounded-full bg-secondary-500/25 blur-3xl animate-slow-pulse'
								style={{ animationDelay: '3s' }}
							/>
							<div
								className='absolute -right-16 bottom-20 h-56 w-56 rounded-full bg-primary-400/30 blur-3xl animate-slow-pulse'
								style={{ animationDelay: '1s' }}
							/>
						</div>
					</>
				)}

				{mode === 'diagonal' && (
					<>
						{/* Base gradient */}
						<div className='absolute inset-0 -z-10 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-600' />
						{/* Diagonal highlight band */}
						<div
							className='absolute -z-10 inset-x-[-10%] top-[-35%] h-[75%] rotate-[-6deg]'
							style={{
								background:
									'linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0))',
							}}
						/>
						{/* Enhanced ambient lighting */}
						<div className='pointer-events-none absolute inset-0 overflow-hidden'>
							<div
								className='absolute top-1/4 left-1/3 h-40 w-40 rounded-full bg-white/8 blur-2xl animate-slow-pulse'
								style={{ animationDelay: '1s' }}
							/>
							<div
								className='absolute bottom-1/3 right-1/4 h-48 w-48 rounded-full bg-secondary-500/20 blur-3xl animate-slow-pulse'
								style={{ animationDelay: '3s' }}
							/>
						</div>
					</>
				)}

				{mode === 'mesh' && (
					<>
						{/* Enhanced mesh gradient background */}
						<div
							className='absolute inset-0 -z-10'
							style={{
								background:
									'radial-gradient(60% 60% at 20% 20%, rgba(38,40,91,0.95) 0%, rgba(38,40,91,0.0) 60%), radial-gradient(60% 60% at 80% 30%, rgba(201,198,194,0.35) 0%, rgba(201,198,194,0.0) 60%), radial-gradient(70% 70% at 50% 80%, rgba(38,40,91,0.7) 0%, rgba(38,40,91,0.0) 60%), linear-gradient(180deg, rgba(17,17,40,1) 0%, rgba(27,28,65,1) 100%)',
							}}
						/>
						{/* Animated mesh overlay */}
						<div className='pointer-events-none absolute inset-0 overflow-hidden'>
							<div
								className='absolute top-1/4 right-1/4 h-32 w-32 rounded-full bg-white/8 blur-xl animate-slow-pulse'
								style={{ animationDelay: '2s' }}
							/>
							<div
								className='absolute bottom-1/4 left-1/3 h-40 w-40 rounded-full bg-secondary-500/15 blur-2xl animate-slow-pulse'
								style={{ animationDelay: '4s' }}
							/>
						</div>
					</>
				)}

				{/* Content */}
				<div className='relative z-10 w-full'>
					<div className='container-custom text-center text-white py-16'>
						{/* Animated subtitle badge */}
						<div
							className='mb-8 animate-fade-in-up'
							style={{ animationDelay: '0.2s' }}
						>
							<span className='inline-block px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 border border-white/20'>
								🌍 International Business Excellence
							</span>
						</div>

						<h1
							className='text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-[0_4px_12px_rgba(0,0,0,0.45)] animate-fade-in-up'
							style={{ animationDelay: '0.4s' }}
						>
							<span className='bg-gradient-to-r from-white via-white to-white/95 bg-clip-text text-transparent'>
								GL-B GROUP SARL
							</span>
						</h1>

						{/* Enhanced decorative line */}
						<div
							className='flex justify-center mb-8 animate-fade-in-up'
							style={{ animationDelay: '0.6s' }}
						>
							<div className='relative'>
								<div className='w-32 h-1 bg-white/30 rounded-full'></div>
								<div className='absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-white/60 to-white/90 rounded-full animate-slow-pulse'></div>
							</div>
						</div>

						<p
							className='text-xl md:text-2xl lg:text-3xl font-light mb-12 text-gray-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.45)] animate-fade-in-up'
							style={{ animationDelay: '0.8s' }}
						>
							Your Key to Global Market
						</p>

						<div
							className='animate-fade-in-up'
							style={{ animationDelay: '1s' }}
						>
							<Link
								href='/contact'
								className='btn-primary inline-flex items-center justify-center transform hover:scale-[1.05] shadow-xl transition-all duration-300 px-8 py-4 text-lg font-semibold'
							>
								CONTACT US
								<svg
									className='ml-2 w-5 h-5 transition-transform group-hover:translate-x-1'
									fill='none'
									stroke='currentColor'
									viewBox='0 0 24 24'
								>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M17 8l4 4m0 0l-4 4m4-4H3'
									/>
								</svg>
							</Link>
						</div>

						{/* Enhanced scroll indicator */}
						<div
							className='mt-16 flex justify-center animate-fade-in-up'
							style={{ animationDelay: '1.2s' }}
						>
							<Link
								href='/#services'
								className='group inline-flex flex-col items-center text-white/80 hover:text-white transition-all duration-300 transform hover:scale-110'
							>
								<span className='text-sm mb-3 font-medium'>Scroll</span>
								<span className='w-7 h-12 rounded-full border-2 border-white/60 group-hover:border-white flex items-start justify-center p-1.5 overflow-hidden transition-colors'>
									<span className='w-1.5 h-3 bg-white/80 group-hover:bg-white rounded-full animate-bounce transition-colors'></span>
								</span>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default Banner
