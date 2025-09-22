import Head from 'next/head'
import Link from 'next/link'
import { FcCheckmark } from 'react-icons/fc'

const MessageSent = () => {
	return (
		<>
			<Head>
				<title>Message Sent - GL-B GROUP SARL</title>
				<meta name='robots' content='noindex' />
			</Head>
			<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
				<div className='bg-white rounded-2xl shadow-lg p-8 sm:p-10 max-w-md w-full mx-4 text-center'>
					<div className='flex justify-center mb-4'>
						<FcCheckmark size='3rem' />
					</div>
					<h1 className='text-2xl font-bold text-gray-800 mb-2'>
						Message sent
					</h1>
					<p className='text-gray-600'>
						Message sent successfully. We&apos;ll get back to you at our
						earliest convenience. Thank you.
					</p>
					<div className='mt-6'>
						<Link href='/' className='btn-primary'>
							Back to Home
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default MessageSent
