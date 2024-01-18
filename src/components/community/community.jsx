'use client'

import Image from 'next/image'
import { Flex, Row, Col } from 'antd'

import { frames } from './frames'

export default function Community() {
	return (
		<Flex
			vertical
			className='mt-7'
			rootClassName='container space-y-4'
		>
			<Flex
				vertical
				align='center'
			>
				<p className='text-center font-semibold text-4xl leading-[44px] text-D_grey w-[542px]'>
					Manage your entire community in a single system
				</p>
				<p className='text-center text-grey'>Who is Nextcent suitable for?</p>
			</Flex>
			<Flex justify='space-between'>
				{frames.map(({ title, content, logo }, index) => (
					<Flex
						key={index}
						vertical
						justify='center'
						align='center'
						className='w-[250px] text-center'
					>
						<Image
							src={logo}
							alt='frame'
							width={65}
							height={56}
							quality={100}
						/>
						<p className='text-center font-semibold text-2xl leading-8 text-D_grey'>
							{title}
						</p>
						<p className='text-sm text-grey'>{content}</p>
					</Flex>
				))}
			</Flex>
		</Flex>
	)
}
