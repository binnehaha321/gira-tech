'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Flex, Button } from 'antd'
import { Carousel } from 'react-responsive-carousel'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

const Header = () => {
	return (
		<header className='container'>
			<Carousel
				showThumbs={true}
				showArrows={true}
			>
				<Flex
					justify='space-between'
					align='center'
					className='py-[96px]'
				>
					<Flex
						vertical
						align='start'
					>
						<p className='text-left text-[64px] font-semibold text-D_grey leading-[1.2]'>
							Lesson and insights
						</p>
						<p className='text-left text-[64px] font-semibold text-primary leading-[1.2]'>
							from 8 years
						</p>
						<p className='text-left text-base text-grey mt-4'>
							Where to grow your business as a photographer: site or social
							media?
						</p>
						<Button
							type='primary'
							className='mt-8'
						>
							<Link href='/sign-up'>Register</Link>
						</Button>
					</Flex>
					<div>
						<Image
							src='/images/header/man-it.png'
							alt='Hero Image'
							width={391}
							height={407}
						/>
					</div>
				</Flex>
				<Flex justify='space-between'>
					<Flex
						vertical
						align='start'
					>
						<p className='text-left text-[64px] font-semibold leading-[1.2]'>
							Lesson and insights
						</p>
						<p className='text-left text-[64px] font-semibold text-primary leading-[1.2]'>
							from 8 years
						</p>
						<p className='text-left text-base text-grey mt-4'>
							Where to grow your business as a photographer: site or social
							media?
						</p>
						<Button
							type='primary'
							className='mt-8'
						>
							<Link href='/sign-up'>Register</Link>
						</Button>
					</Flex>
					<div>
						<Image
							src='/images/header/man-it.png'
							alt='Hero Image'
							width={391}
							height={407}
						/>
					</div>
				</Flex>
				<Flex justify='space-between'>
					<Flex
						vertical
						align='start'
					>
						<p className='text-left text-[64px] font-semibold leading-[1.2]'>
							Lesson and insights
						</p>
						<p className='text-left text-[64px] font-semibold text-primary leading-[1.2]'>
							from 8 years
						</p>
						<p className='text-left text-base text-grey mt-4'>
							Where to grow your business as a photographer: site or social
							media?
						</p>
						<Button
							type='primary'
							className='mt-8'
						>
							<Link href='/sign-up'>Register</Link>
						</Button>
					</Flex>
					<div>
						<Image
							src='/images/header/man-it.png'
							alt='Hero Image'
							width={391}
							height={407}
						/>
					</div>
				</Flex>
			</Carousel>
		</header>
	)
}

export default Header
