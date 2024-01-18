'use client'

import Link from 'next/link'
import { Flex } from 'antd'
import { usePathname } from 'next/navigation'

import { routes } from './routes'
import { cn } from '@/lib'

const Navigation = () => {
	const path = usePathname()

	return (
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
	)
}

export default Navigation
