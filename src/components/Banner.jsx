import Link from 'next/link'
import Image from 'next/image'
import plane from '../../public/images/plane.jpeg'

const Banner = () => {
	return (
		<section className='relative'>
			<div className='relative min-h-[520px] md:min-h-[640px] flex items-center'>
				{/* Optimized hero image */}
				<Image
					src={plane}
					alt='Cargo plane on runway at night'
					fill
					priority
					placeholder='blur'
					sizes='100vw'
					className='object-cover'
				/>

				{/* Overlay for contrast */}
				<div className='absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/30' />

				{/* Subtle accent blobs */}
				<div className='pointer-events-none absolute inset-0 overflow-hidden hidden md:block'>
					<div className='absolute -left-10 top-16 h-48 w-48 rounded-full bg-secondary-500/25 blur-xl' />
					<div className='absolute -right-10 bottom-16 h-40 w-40 rounded-full bg-primary-500/25 blur-xl' />
				</div>

				{/* Content */}
				<div className='relative z-10 w-full'>
					<div className='container-custom text-center text-white py-16'>
						<h1 className='text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-6 text-gradient drop-shadow-[0_4px_12px_rgba(0,0,0,0.35)]'>
							GL-B GROUP SARL
						</h1>
						<p className='text-xl md:text-2xl lg:text-3xl font-light mb-10 text-gray-100 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]'>
							Your Key to Global Market
						</p>
						<Link
							href='/contact'
							className='btn-primary inline-flex items-center justify-center transform hover:scale-[1.02] shadow-lg'
						>
							CONTACT US
						</Link>
						{/* Scroll indicator */}
						<div className='mt-10 flex justify-center'>
							<Link
								href='/#products'
								className='group inline-flex flex-col items-center text-white/80 hover:text-white transition-colors'
							>
								<span className='text-sm mb-2'>Scroll</span>
								<span className='w-6 h-10 rounded-full border border-white/60 flex items-start justify-center p-1 overflow-hidden'>
									<span className='w-1 h-2 bg-white/80 rounded-full animate-bounce'></span>
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
