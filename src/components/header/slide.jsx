'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Flex, Button } from 'antd'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export default function Slide() {
	return (
		<Flex
			justify='space-between'
			align='center'
			className='py-[96px] responsive-flex'
		>
			<div className='lg:hidden'>
				<Image
					src='/images/header/man-it.png'
					alt='Hero Image'
					width={391}
					height={407}
					priority
				/>
			</div>

			<Flex
				vertical
				align='start'
				className=''
			>
				<p
					className={`text-center text-[64px] font-semibold text-D_grey leading-[1.2] ${'lg:text-left'}`}
				>
					Lesson and insights
				</p>
				<p
					className={`text-center text-[64px] font-semibold text-primary leading-[1.2] ${'lg:text-left'}`}
				>
					from 8 years
				</p>
				<p className={`text-center text-base text-grey mt-4 ${'lg:text-left'}`}>
					Where to grow your business as a photographer: site or social media?
				</p>
				<Button
					type='primary'
					className='mt-8 mx-auto lg:mx-0'
				>
					<Link href='/sign-up'>Register</Link>
				</Button>
			</Flex>
			<div className='hidden lg:block'>
				<Image
					src='/images/header/man-it.png'
					alt='Hero Image'
					width={391}
					height={407}
				/>
			</div>
		</Flex>
	)
}
