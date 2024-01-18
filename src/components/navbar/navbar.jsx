'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button, Flex } from 'antd'

import { routes } from './routes'
import { cn } from '@/lib'

const Navbar = () => {
	const path = usePathname()

	return (
		<nav className='container flex items-center justify-between py-[30px]'>
			<Image
				width={154}
				height={24}
				src='/images/base/logo.png'
				alt='Gira Tech Logo'
				priority
			/>
			<Flex
				gap={50}
				align='center'
			>
				{routes.map(({ href, pathname }) => {
					return (
						<Link
							key={href}
							href={href}
							className={cn('text-black text-base font-medium', {
								'text-primary': path === href
							})}
						>
							{pathname}
						</Link>
					)
				})}
			</Flex>
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
