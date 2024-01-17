'use client'

import logo from '../../public/images/base/logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from 'antd'
import styles from './Button.module.css'

const Navbar = () => {
	const pathname = usePathname()
	return (
		<nav className='flex justify-between items-center py-7 px-28'>
			<Image
				height={24}
				src={logo}
				alt='Logo'
			/>
			<div className='flex gap-12 items-center'>
				<Link
					className={`link ${pathname === '/home' ? 'active' : ''}`}
					href='/home'
				>
					Home{' '}
				</Link>
				<Link
					className={`link ${pathname === '/service' ? 'active' : ''}`}
					href='/service'
				>
					Service{' '}
				</Link>
				<Link
					className={`link ${pathname === '/feature' ? 'active' : ''}`}
					href='/feature'
				>
					Feature{' '}
				</Link>
				<Link
					className={`link ${pathname === '/product' ? 'active' : ''}`}
					href='/product'
				>
					Product{' '}
				</Link>
				<Link
					className={`link ${pathname === '/testimonial' ? 'active' : ''}`}
					href='/testimonial'
				>
					Testimonial{' '}
				</Link>
				<Link
					className={`link ${pathname === '/faq' ? 'active' : ''}`}
					href='/faq'
				>
					FAQ
				</Link>
			</div>
			<div className='flex gap-3.5'>
				<Button style={{borderColor:'#FFF'}} > Login </Button>
				<button className = {styles.signup}>Sign up</button>
			</div>
		</nav>
	)
}

export default Navbar
