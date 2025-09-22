import Link from 'next/link'
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'

const NavBar = () => {
	const [active, setActive] = useState(false)

	const navLinks = [
		{ href: '/products', label: 'PRODUCTS' },
		{ href: '/services', label: 'SERVICES' },
		{ href: '/about', label: 'ABOUT US' },
		{ href: '/contact', label: 'CONTACT US' },
	]

	return (
		<>
			{/* Main Navigation */}
			<nav className='sticky top-0 w-full backdrop-blur-md bg-blue-900/90 shadow-md z-30 h-16 md:h-18'>
				<div className='container-custom h-full flex items-center justify-between'>
					{/* Logo */}
					<Link href='/' className='flex items-center z-40'>
						<div className='bg-white/95 backdrop-blur p-2 rounded-r-full pr-6 shadow-sm border border-white/60'>
							<Image
								src='/images/logo/glNavLogo.png'
								alt='GL-B Group Logo'
								width={72}
								height={36}
								className='h-8 md:h-9 w-auto'
							/>
						</div>
					</Link>

					{/* Desktop Navigation */}
					<div className='hidden md:flex items-center space-x-8'>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className='text-white/90 font-semibold hover:text-white transition-colors duration-200 relative group'
							>
								{link.label}
								<span className='absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary-400 transition-all duration-200 group-hover:w-full'></span>
							</Link>
						))}
					</div>

					{/* Mobile Menu Button */}
					<button
						className='md:hidden text-white text-3xl z-40'
						onClick={() => setActive(!active)}
						aria-label='Toggle menu'
					>
						{active ? <AiOutlineClose /> : <GiHamburgerMenu />}
					</button>
				</div>
			</nav>

			{/* Mobile Menu Overlay */}
			{active && (
				<div className='fixed inset-0 backdrop-blur-md bg-blue-900/95 z-20 flex items-center justify-center md:hidden'>
					<div className='text-center space-y-8'>
						<Link
							href='/'
							className='block text-white text-2xl font-bold hover:text-secondary-400 transition-colors duration-200'
							onClick={() => setActive(false)}
						>
							HOME
						</Link>
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className='block text-white text-2xl font-bold hover:text-secondary-400 transition-colors duration-200'
								onClick={() => setActive(false)}
							>
								{link.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</>
	)
}

export default NavBar
