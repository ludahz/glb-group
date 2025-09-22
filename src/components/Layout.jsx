import NavBar from './NavBar'
import Footer from './Footer'

const Layout = ({ children }) => {
	return (
		<div className='min-h-screen bg-gray-900 text-gray-100'>
			<NavBar />
			<main className='relative'>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
