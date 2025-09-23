import Link from 'next/link'
import Image from 'next/image'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

const NavBar = () => {
	const [active, setActive] = useState(false)
	const [scrolled, setScrolled] = useState(false)
	const { pathname } = useRouter()

	const navLinks = [
		{ href: '/products', label: 'Products', icon: '📦' },
		{ href: '/services', label: 'Services', icon: '⚡' },
		{ href: '/about', label: 'About', icon: '🏢' },
		{ href: '/contact', label: 'Contact', icon: '💬' },
	]

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50)
		}
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return (
		<>
			{/* Main Navigation */}
			<nav
				className={`fixed top-0 w-full z-50 transition-all duration-500 ${
					scrolled
						? 'h-16 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl'
						: 'h-20 bg-white/90 backdrop-blur-md border-b border-white/20'
				}`}
			>
				<div className='container-custom h-full flex items-center justify-between'>
					{/* Logo - Clean and Simple */}
					<Link href='/' className='flex items-center z-40 group'>
						<div className='transition-all duration-300 group-hover:scale-105'>
							<Image
								src='/images/logo/glb-group-logo-2.png'
								alt='GL-B Group SARL'
								width={160}
								height={64}
								priority
								className={`transition-all duration-300 ${
									scrolled ? 'h-8' : 'h-10 md:h-12'
								} w-auto`}
							/>
						</div>
					</Link>

					{/* Desktop Navigation - Floating Pills */}
					<div className='hidden lg:flex items-center space-x-3'>
						{navLinks.map((link, index) => (
							<Link
								key={link.href}
								href={link.href}
								className={`relative px-4 py-2.5 rounded-xl font-medium transition-all duration-300 group transform hover:scale-105 ${
									pathname === link.href
										? scrolled
											? 'bg-primary-600 text-white shadow-lg scale-105'
											: 'bg-primary-600 text-white shadow-xl scale-105'
										: scrolled
										? 'text-gray-700 hover:bg-white/90 hover:shadow-md hover:text-gray-900'
										: 'text-primary-900/80 hover:bg-white/80 hover:shadow-lg hover:text-primary-900'
								}`}
								style={{ animationDelay: `${index * 100}ms` }}
							>
								{/* Active state indicator */}
								{pathname === link.href && (
									<div className='absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 rounded-xl' />
								)}

								{/* Content */}
								<span className='relative flex items-center space-x-2'>
									<span
										className={`text-sm transition-all duration-300 ${
											pathname === link.href
												? 'opacity-100'
												: 'opacity-60 group-hover:opacity-100'
										}`}
									>
										{link.icon}
									</span>
									<span className='font-semibold tracking-wide'>
										{link.label}
									</span>
								</span>

								{/* Subtle glow effect on hover */}
								<div
									className={`absolute inset-0 rounded-xl transition-all duration-300 ${
										pathname === link.href
											? 'bg-gradient-to-r from-primary-500/20 to-primary-600/20'
											: 'bg-gradient-to-r from-primary-200/0 to-secondary-200/0 group-hover:from-primary-200/30 group-hover:to-secondary-200/30'
									}`}
								/>
							</Link>
						))}
					</div>

					{/* CTA Button */}
					<div className='hidden md:block lg:hidden'>
						<Link
							href='/contact'
							className={`px-6 py-2.5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 ${
								scrolled
									? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg hover:shadow-xl'
									: 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-xl hover:shadow-2xl'
							}`}
						>
							Get Quote
						</Link>
					</div>

					{/* Mobile Menu Button - Enhanced */}
					<button
						className={`lg:hidden relative p-3 rounded-2xl transition-all duration-300 focus:outline-none ${
							scrolled
								? 'text-gray-700 hover:bg-gray-100'
								: 'text-primary-900 hover:bg-white/60'
						}`}
						onClick={() => setActive(!active)}
						aria-label='Toggle menu'
					>
						<div className='relative w-6 h-6'>
							<HiMenuAlt3
								className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
									active ? 'rotate-180 opacity-0' : 'rotate-0 opacity-100'
								}`}
							/>
							<IoClose
								className={`absolute inset-0 w-6 h-6 transition-all duration-300 ${
									active ? 'rotate-0 opacity-100' : '-rotate-180 opacity-0'
								}`}
							/>
						</div>
					</button>
				</div>
			</nav>

			{/* Mobile Menu Overlay - Modern Slide */}
			<div
				className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
					active
						? 'opacity-100 pointer-events-auto'
						: 'opacity-0 pointer-events-none'
				}`}
			>
				{/* Backdrop */}
				<div
					className='absolute inset-0 bg-black/20 backdrop-blur-sm'
					onClick={() => setActive(false)}
				/>

				{/* Menu Panel */}
				<div
					className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl border-l border-gray-200/50 shadow-2xl transform transition-transform duration-500 ${
						active ? 'translate-x-0' : 'translate-x-full'
					}`}
				>
					{/* Header */}
					<div className='p-6 border-b border-gray-200/50'>
						<div className='flex items-center justify-between'>
							<div className='flex items-center space-x-3'>
								<div className='w-2 h-2 bg-primary-500 rounded-full'></div>
								<span className='font-bold text-primary-900'>Menu</span>
							</div>
							<button
								onClick={() => setActive(false)}
								className='p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors'
							>
								<IoClose className='w-5 h-5' />
							</button>
						</div>
					</div>

					{/* Navigation Links */}
					<div className='p-6 space-y-2'>
						<Link
							href='/'
							className={`flex items-center space-x-4 p-4 rounded-2xl font-semibold transition-all duration-300 ${
								pathname === '/'
									? 'bg-primary-50 text-primary-700 border border-primary-200'
									: 'text-gray-700 hover:bg-gray-50'
							}`}
							onClick={() => setActive(false)}
						>
							<span className='text-xl'>🏠</span>
							<span>Home</span>
						</Link>

						{navLinks.map((link, index) => (
							<Link
								key={link.href}
								href={link.href}
								className={`flex items-center space-x-4 p-4 rounded-2xl font-semibold transition-all duration-300 ${
									pathname === link.href
										? 'bg-primary-50 text-primary-700 border border-primary-200'
										: 'text-gray-700 hover:bg-gray-50'
								}`}
								onClick={() => setActive(false)}
								style={{ animationDelay: `${index * 50}ms` }}
							>
								<span className='text-xl'>{link.icon}</span>
								<span>{link.label}</span>
								{pathname === link.href && (
									<div className='ml-auto w-2 h-2 bg-primary-500 rounded-full' />
								)}
							</Link>
						))}
					</div>

					{/* CTA Section */}
					<div className='absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200/50'>
						<Link
							href='/contact'
							className='block w-full text-center bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-2xl font-semibold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300'
							onClick={() => setActive(false)}
						>
							Get Started Today
						</Link>
						<p className='text-center text-sm text-gray-500 mt-3'>
							Ready to expand globally?
						</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default NavBar
