import React from 'react'
import Image from 'next/image'
import { Flex, Button } from 'antd'

import data from './data'

export default function CommunityBelow() {
	return (
		<div className='container mt-[48px]'>
			<div>
				<p className={`font-semibold text-4xl text-center text-D_grey`}>
					Caring is the new marketing
				</p>
				<p
					className={`font-normal text-base text-grey w-[628px] h-[72px] mx-auto text-center mt-2 w-dvw ${'lg:w-fit lg:mb-8'}`}
				>
					The Nexcent blog is the best place to read about the latest membership
					insights, trends and more. See who&rsquo;s joining the community, read
					about how our community are increasing their membership income and
					lot&rsquo;s more.​
				</p>
			</div>
			<Flex
				justify='space-around'
				className={`pt-16 responsive-flex ${'lg:pt-4'}`}
			>
				{data.map((community) => (
					<div
						key={community.image}
						className='w-[368px] h-[366px] relative'
					>
						<Image
							src={community.image}
							alt={community.content}
							width={368}
							height={286}
						/>
						<div className='absolute bottom-0 w-[317px] h-[176px] p-4 rounded-lg bg-silver left-1/2 transform -translate-x-1/2 shadow-lg text-center'>
							<p className='w-[285px] h-[84px] m-auto text-grey font-semibold text-xl text-center'>
								{community.content}
							</p>
							<Button
								type='link'
								className='!text-xl !font-semibold'
							>
								Read more &rarr;
							</Button>
						</div>
					</div>
				))}
			</Flex>
		</div>
	)
}
