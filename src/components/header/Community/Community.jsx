import React from 'react'
import { Flex } from 'antd'
import Image from 'next/image'
import { frames } from './Frames'
export default function Community() {
	return (
		<Flex
			vertical
			className='mt-[28px]'
		>
			<Flex vertical>
				<p className='text-center font-semibold text-2xl leading-8 text-D_grey'>
					Manage your entire community in a single system
				</p>
				<p className='text-center text-grey'>Who is Nextcent suitable for?</p>
			</Flex>

			<Flex justify='space-between'>
				{frames.map((frame, index) => (
					<div
						className='w-1/5 flex flex-col justify-center items-center text-center'
						key={index}
					>
						<Image
							src={frame.logo}
							alt='frame'
							width={40}
							height={40}
							className=''
						/>
						<p className='text-center font-semibold text-2xl leading-8 text-D_grey'>
							{frame.title}
						</p>
						<p>{frame.content}</p>
					</div>
				))}
			</Flex>
		</Flex>
	)
}
