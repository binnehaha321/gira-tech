import React from 'react'
import { Flex } from 'antd'
import Image from 'next/image'

import data from './data'

export default function Community2() {
	return (
		<div className='container mt-[48px]'>
			<div>
				<p className='font-semibold text-4xl text-center text-D_grey'>
					Caring is the new marketing
				</p>
				<p className='font-normal text-base text-grey w-[628px] h-[72px] m-auto text-center mt-2'>
					The Nexcent blog is the best place to read about the latest membership
					insights, trends and more. See who&rsquo;s joining the community, read about
					how our community are increasing their membership income and lot&rsquo;s
					more.​
				</p>
			</div>
			<Flex
				justify='space-around'
				className='mt-4'
			>
				{data.map((community) => (
					<div
						key={community.image}
						className='w-[368px] h-[366px] relative'
					>
						<Image
							src={community.image}
							alt=''
							width={368}
							height={286}
						/>
						<div className='absolute bottom-0 w-[317px] h-[176px] bg-white left-1/2 transform -translate-x-1/2 shadow-lg '>
							<p className='w-[285px] h-[84px] m-auto text-grey font-semibold text-xl text-center'>
								{community.content}
							</p>
							<button className='w-[285px] h-[44px] text-center'>
								<span className='text-primary font-semibold text-xl'>
									Read more &rarr;
								</span>
							</button>
						</div>
					</div>
				))}
			</Flex>
		</div>
	)
}
