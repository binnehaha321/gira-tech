'use client'

import Image from 'next/image'
import Link from 'next/link'

import { Button, Flex } from 'antd'

import Navigation from './navigation'

const Navbar = () => {
	return (
		<nav className='container flex items-center justify-between py-[30px]'>
			<Image
				width={154}
				height={24}
				src='/images/base/logo.png'
				alt='Gira Tech Logo'
				priority
			/>
			<Navigation />
			<Flex gap={14}>
				<Button type='link'>
					<Link href='/login'>Login</Link>
				</Button>
				<Button
					type='primary'
					className='!rounded-md'
				>
					<Link href='/sign-up'>Sign up</Link>
				</Button>
			</Flex>
		</nav>
	)
}

export default Navbar
